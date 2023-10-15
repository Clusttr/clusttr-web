'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const router = useRouter();
    useEffect(()=> {
        router.push('/dashboard/mint');
    }, [])
  return (
    <div></div>
  )
}

export default Dashboard