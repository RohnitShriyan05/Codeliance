"use client";
import { useState } from 'react';
import User from '@/components/User'
import Image from 'next/image'

export default function Home<HomeProps>() {
  const [user, setUser] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  return (  
    <div>
      <User room={room} setUser={setUser} setRoom={setRoom}/>  <p>{room}</p>
    </div>
  )
}