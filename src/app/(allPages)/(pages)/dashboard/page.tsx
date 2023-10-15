"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard/mint");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <p>redirecting . . .</p>;
};

export default Dashboard;
