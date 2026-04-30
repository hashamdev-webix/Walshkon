import { useEffect, useState } from "react";

function CircleProgress({ value, start }: { value: number; start: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!start) return; 

    let startValue = 0;
    const duration = 1800;
    const stepTime = duration / value;

    const timer = setInterval(() => {
      startValue += 1;
      setProgress(startValue);

      if (startValue >= value) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, start]);

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full -rotate-90">
        <circle cx="48" cy="48" r={radius} stroke="#e5e7eb" strokeWidth="10" fill="none" />
        <circle
          cx="48"
          cy="48"
          r={radius}
          stroke="#26374A"
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-out"
        />
      </svg>

      <h1 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#26374A]">
        {progress}%
      </h1>
    </div>
  );
}
export default CircleProgress