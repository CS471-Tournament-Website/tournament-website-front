"use client";

import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
    date : string
}

const CountdownTimer: React.FC<CountdownTimerProps> = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate: Date = new Date("2024-12-12T10:00:00");

    const calculateTimeLeft = (): TimeLeft => {
      const now: Date = new Date();
      const difference: number = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
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

  return (
    <div className="py-36">
      <div className="flex justify-center items-center gap-4 text-4xl md:text-6xl font-bold">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <span className="tabular-nums">
              {String(timeLeft.days).padStart(3, "0")}
            </span>
            <span className="text-sm mt-2">days</span>
          </div>
          <span className="mx-2">:</span>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <span className="tabular-nums">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-sm mt-2">hours</span>
          </div>
          <span className="mx-2">:</span>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <span className="tabular-nums">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-sm mt-2">minutes</span>
          </div>
          <span className="mx-2">:</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="tabular-nums">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="text-sm mt-2">seconds</span>
        </div>
      </div>
    </div>
  );
};


export default CountdownTimer;