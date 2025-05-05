import React from 'react';
import { Logo } from '@/components/ui/logo';

/**
 * Loading component displayed during page transitions
 * This provides a smoother user experience during navigation
 */
export default function Loading(): React.ReactElement {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-6">
        {/* Logo with slight animation */}
        <div className="animate-pulse">
          <Logo lang="en" size="lg" showText={false} isLink={false} />
        </div>
        
        {/* Loading spinner */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin"></div>
          <span className="text-lg font-medium text-gray-700">Loading...</span>
        </div>
      </div>
    </div>
  );
}
