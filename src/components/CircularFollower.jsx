import React, { useState, useEffect } from "react";

const CircularFollower = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="circular-follower"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: isMouseInside ? "transform 0.05s ease" : "transform 0.5s ease",
      }}
    />
  );
};

export default CircularFollower;
