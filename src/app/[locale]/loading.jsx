"use client";

import { useEffect, useState } from "react";
import Preloader from "@/components/common/Preloader";

const Loading = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderClose = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Simulate loading for 3 seconds (adjust as needed)
    setTimeout(() => {
      setLoading(false);
    }, 16000);
  }, []);
  return (
    <>
      <Preloader />
    </>
  );
};

export default Loading;
