"use client";

import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
    date: string
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate: Date = new Date(date);

    const calculateTimeLeft = (): TimeLeft => {
      const now: Date = new Date();
      const difference: number = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string; showColon?: boolean }> = ({ value, label, showColon }) => (
    <div className="flex flex-col items-center">
      <div className="flex items-end">
        <span className="tabular-nums text-7xl font-bold">
          {String(value).padStart(label === 'days' ? 3 : 2, "0")}
        </span>
        {showColon && <span className="text-7xl font-bold mb-1 ml-2">:</span>}
      </div>
      <div className="text-sm mt-5 text-secondary-color">{label}</div>
    </div>
  );

  return (
    <div className="flex flex-col gap-10 h-full py-36 justify-center items-center text-primary-color">
      <div className="text-3xl font-semibold tracking-wider">
        Get Ready! SS4 Starts Soon!
      </div>
      <div className="flex justify-center items-end gap-4">
        <TimeUnit value={timeLeft.days} label="days" showColon />
        <TimeUnit value={timeLeft.hours} label="hours" showColon />
        <TimeUnit value={timeLeft.minutes} label="minutes" showColon />
        <TimeUnit value={timeLeft.seconds} label="seconds" />
      </div>
      <div className="flex flex-row font-semibold gap-2">
        See you on
        <div className="font-extrabold">
          20 Mar 2024 10.00 A.M.
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
