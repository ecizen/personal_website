'use client';

export default function FixedScreenWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="fixed inset-0 z-[-1] overflow-hidden"
      style={{
        contain: 'strict',
        clipPath: 'inset(0 0 0 0)',
        WebkitMaskImage: '-webkit-radial-gradient(white, black)', // penting untuk masking
        pointerEvents: 'none',
      }}
    >
      {children}
    </div>
  );
}
