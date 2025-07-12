import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Professional filing cabinet/locker icon */}
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                  <path d="M4 10h16M4 14h16" stroke="white" strokeWidth="0.5" fill="none"/>
                  <circle cx="18" cy="8" r="1" fill="white"/>
                  <circle cx="18" cy="12" r="1" fill="white"/>
                  <circle cx="18" cy="16" r="1" fill="white"/>
                  <rect x="6" y="6.5" width="8" height="1" fill="white" opacity="0.8"/>
                  <rect x="6" y="10.5" width="6" height="1" fill="white" opacity="0.8"/>
                  <rect x="6" y="14.5" width="7" height="1" fill="white" opacity="0.8"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">数字文件柜</h1>
                <p className="text-sm text-gray-600">Digital Locker System</p>
              </div>
            </div>
          </div>
          
          {/* Navigation or additional info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-sm text-gray-600">
              安全 · 便捷 · 可靠
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
