import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const x = useRef(0);
  const y = useRef(0);

  useEffect(() => {
    document.body.style.cursor = "none";

    const move = (e) => {
      x.current = e.clientX;
      y.current = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x.current}px, ${y.current}px, 0)`;
      }
    };

    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        {/* outer ring */}
        <div className="w-7 h-7 rounded-full border border-[#2bee6c] opacity-50" />
        {/* center dot */}
        <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2bee6c]" />
      </div>
    </div>
  );
};

export default CustomCursor;
