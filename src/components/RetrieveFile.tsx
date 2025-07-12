'use client';

import { useState } from 'react';

interface FileInfo {
  success: boolean;
  fileName?: string;
  fileSize?: number;
  createdAt?: string;
  expiresAt?: string;
  downloaded?: boolean;
  downloadedAt?: string;
  error?: string;
}

export default function RetrieveFileComponent() {
  const [pickupCode, setPickupCode] = useState('');
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleCheckCode = async () => {
    if (!pickupCode.trim()) {
      setFileInfo({ success: false, error: '请输入取件码' });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/download?code=${encodeURIComponent(pickupCode.trim())}`);
      const data = await response.json();
      setFileInfo(data);
    } catch (error) {
      setFileInfo({
        success: false,
        error: '查询失败，请重试'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!pickupCode.trim()) return;

    setDownloading(true);
    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pickupCode: pickupCode.trim() }),
      });

      if (response.ok) {
        // Get filename from response headers
        const contentDisposition = response.headers.get('Content-Disposition');
        let filename = 'download';
        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
          if (filenameMatch) {
            filename = decodeURIComponent(filenameMatch[1].replace(/['"]/g, ''));
          }
        }

        // Create blob and download
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        // Refresh file info to show download status
        handleCheckCode();
      } else {
        const errorData = await response.json();
        setFileInfo({
          success: false,
          error: errorData.error || '下载失败，请重试'
        });
      }
    } catch (error) {
      setFileInfo({
        success: false,
        error: '下载失败，请重试'
      });
    } finally {
      setDownloading(false);
    }
  };

  const resetForm = () => {
    setPickupCode('');
    setFileInfo(null);
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">文件取件</h2>
        <p className="text-gray-600">输入取件码下载文件</p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <label htmlFor="pickupCode" className="block text-sm font-medium text-gray-700 mb-2">
            取件码
          </label>
          <input
            id="pickupCode"
            type="text"
            value={pickupCode}
            onChange={(e) => setPickupCode(e.target.value)}
            placeholder="请输入6位取件码"
            className="form-input text-center text-lg tracking-wider"
            maxLength={6}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleCheckCode();
              }
            }}
          />
        </div>

        <div className="text-center mb-6">
          <button
            onClick={handleCheckCode}
            disabled={loading || !pickupCode.trim()}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '查询中...' : '查询文件'}
          </button>
        </div>
      </div>

      {fileInfo && (
        <div className="max-w-md mx-auto">
          {fileInfo.success ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{fileInfo.fileName}</div>
                  <div className="text-sm text-gray-600">
                    {fileInfo.fileSize ? formatFileSize(fileInfo.fileSize) : ''}
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div>上传时间：{fileInfo.createdAt ? new Date(fileInfo.createdAt).toLocaleString('zh-CN') : ''}</div>
                <div>有效期至：{fileInfo.expiresAt ? new Date(fileInfo.expiresAt).toLocaleString('zh-CN') : ''}</div>
                {fileInfo.downloaded && (
                  <div className="text-orange-600">
                    已下载：{fileInfo.downloadedAt ? new Date(fileInfo.downloadedAt).toLocaleString('zh-CN') : ''}
                  </div>
                )}
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {downloading ? '下载中...' : '下载文件'}
                </button>
                <button
                  onClick={resetForm}
                  className="btn-secondary"
                >
                  重新查询
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-700">{fileInfo.error}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
