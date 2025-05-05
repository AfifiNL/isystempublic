'use client';

import React, { ReactNode } from 'react';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="legal-layout">
      {children}
    </div>
  );
}