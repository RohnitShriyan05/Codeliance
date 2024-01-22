"use client";
import { v4 as uuid } from "uuid";

interface props {
    setRoom: React.Dispatch<React.SetStateAction<any>>,
    setUser: React.Dispatch<React.SetStateAction<any>>,
    room:string
}
export default function User<props>({ setRoom, setUser, room }) {
    const createRoom = ()=> setRoom(uuid().slice(0,8).toUpperCase());
    return (
        <main className="bg-eggshell flex min-h-screen flex-col items-center justify-between px-24">
            <div className='h-screen   w-max p-60 flex flex-col items-center justify-center'>
                <p className='text-jellybean font-bold text-4xl logofont pb-2'>CODELIANCE</p>
                <p className="text-jellybean pb-4">A collaborative code editor</p>
                <input onChange={(e)=>setUser(e.target.value)} maxLength={12} placeholder='Enter Username' className='w-full    rounded-lg text-lg px-2 bg-transparent text-dark border border-jellybean' />
                <input value={room} onChange={(e)=>setRoom(e.target.value)} maxLength={8} placeholder='Enter Room ID' className='w-full    rounded-lg text-lg mt-3 px-2 bg-transparent text-dark border border-jellybean' />
                <button className='text-dark w-full rounded-lg text-lg mt-5 bg-jellybean text-eggshell font-semibold'>Join Room</button>
                <button onClick={createRoom} className='text-dark w-full rounded-lg text-md mt-3 text-dark'>Create Room</button>
            </div>
            <div className=''>
                
            </div>
        </main>
    );
}