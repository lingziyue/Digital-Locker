'use client';

import { useState } from 'react';
import SendFileComponent from '@/components/SendFile';
import RetrieveFileComponent from '@/components/RetrieveFile';
import Header from '@/components/Header';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'send' | 'retrieve'>('send');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-1">
            <button
              onClick={() => setActiveTab('send')}
              className={`px-8 py-3 rounded-md font-medium transition-colors duration-200 ${
                activeTab === 'send'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              寄件
            </button>
            <button
              onClick={() => setActiveTab('retrieve')}
              className={`px-8 py-3 rounded-md font-medium transition-colors duration-200 ${
                activeTab === 'retrieve'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              取件
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="gov-card">
          {activeTab === 'send' ? (
            <SendFileComponent />
          ) : (
            <RetrieveFileComponent />
          )}
        </div>
      </main>
    </div>
  );
}
