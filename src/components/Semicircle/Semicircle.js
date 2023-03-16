import React from "react";

const SemiCircleProgressBar = ({
  progress,
  size,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke,
}) => {
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate the strokeDashoffset based on the progress
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg className="svg" width={size} height={size}>
      <circle
        className="svg-circle-bg"
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        stroke={circleOneStroke}
        fill="none"
      />
      <circle
        className="svg-circle"
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        stroke={circleTwoStroke}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />
      <text className="svg-circle-text" x={center} y={center}></text>
    </svg>
  );
};

export default SemiCircleProgressBar;
