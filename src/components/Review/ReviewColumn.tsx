"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Review from "./Review";

interface ReviewColumnProps {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}

export default function ReviewColumn(props: ReviewColumnProps) {
  const { reviews, className, msPerPixel = 0, reviewClassName } = props;

  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState<number>(0);
  const duration = `${columnHeight * msPerPixel}ms`;
  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, index) => (
        <Review
          key={index}
          imgsrc={imgSrc}
          className={reviewClassName?.(index % reviews.length)}
        />
      ))}
    </div>
  );
}
