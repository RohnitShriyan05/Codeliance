"use client";
import './globals.css'
import { useState } from 'react'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [room, setRoom] = useState<string>("");
  const [username, setUsername]= useState<string>("");
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}