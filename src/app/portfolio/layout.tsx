/* eslint-disable @next/next/no-img-element */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute -z-1 inset-0 flex justify-center overflow-hidden -translate-y-32">
        <img
          src="/glow-1.png"
          alt=""
          width="2000"
          height="1200"
          className="max-w-none origin-top scale-125"
        />
      </div>
      <div className="relative z-5">{children}</div>
    </div>
  );
}
