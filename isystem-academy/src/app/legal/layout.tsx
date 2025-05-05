import React from 'react';

// Direct layout for legal pages - bypasses language routing
export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="legal-layout">
      {children}
    </div>
  );
}