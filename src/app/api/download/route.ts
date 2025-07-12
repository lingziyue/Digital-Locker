import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 处理预检请求
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const { pickupCode } = await request.json();
    
    if (!pickupCode) {
      return NextResponse.json(
        { error: '请输入取件码' },
        { status: 400 }
      );
    }

    // Find file by pickup code
    const fileShare = await prisma.fileShare.findUnique({
      where: { pickupCode }
    });

    if (!fileShare) {
      return NextResponse.json(
        { error: '取件码无效或文件不存在' },
        { status: 404 }
      );
    }

    // Check if file has expired
    if (new Date() > fileShare.expiresAt) {
      return NextResponse.json(
        { error: '文件已过期' },
        { status: 410 }
      );
    }

    // Check if file exists on disk
    if (!existsSync(fileShare.filePath)) {
      return NextResponse.json(
        { error: '文件不存在' },
        { status: 404 }
      );
    }

    // Read file from disk
    const fileBuffer = await readFile(fileShare.filePath);

    // Update download status
    await prisma.fileShare.update({
      where: { id: fileShare.id },
      data: {
        downloaded: true,
        downloadedAt: new Date()
      }
    });

    // Return file as response
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': fileShare.mimeType,
        'Content-Disposition': `attachment; filename="${encodeURIComponent(fileShare.originalName)}"`,
        'Content-Length': fileShare.fileSize.toString(),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
      },
    });

  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: '文件下载失败，请重试' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const pickupCode = searchParams.get('code');
    
    if (!pickupCode) {
      return NextResponse.json(
        { error: '请输入取件码' },
        { status: 400 }
      );
    }

    // Find file by pickup code
    const fileShare = await prisma.fileShare.findUnique({
      where: { pickupCode }
    });

    if (!fileShare) {
      return NextResponse.json(
        { error: '取件码无效或文件不存在' },
        { status: 404 }
      );
    }

    // Check if file has expired
    if (new Date() > fileShare.expiresAt) {
      return NextResponse.json(
        { error: '文件已过期' },
        { status: 410 }
      );
    }

    // Return file info without downloading
    return NextResponse.json({
      success: true,
      fileName: fileShare.originalName,
      fileSize: fileShare.fileSize,
      createdAt: fileShare.createdAt,
      expiresAt: fileShare.expiresAt,
      downloaded: fileShare.downloaded,
      downloadedAt: fileShare.downloadedAt
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
      },
    });

  } catch (error) {
    console.error('File info error:', error);
    return NextResponse.json(
      { error: '获取文件信息失败，请重试' },
      { status: 500 }
    );
  }
}
