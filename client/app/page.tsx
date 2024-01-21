import Image from 'next/image'
interface HomeProps{
  room:string,
  username:string
}
export default function Home<HomeProps>({room, username}) {
  return (
    <main className="bg-eggshell flex min-h-screen flex-col items-center justify-between px-24">
      <div className='h-screen   w-max p-60 flex flex-col items-center justify-center'>
        <p className='text-jellybean font-bold text-4xl logofont pb-8'>CODELIANCE</p>
        <input placeholder='Enter Username' className='rounded-lg text-lg px-2 bg-transparent border border-jellybean'/>
        <button className='text-dark w-full rounded-lg text-lg mt-5 bg-jellybean text-eggshell font-semibold'>Join Room</button>
        <button className='text-dark w-full rounded-lg text-md mt-3 text-dark'>Create Room</button>
      </div>
      <div className='text-black'>
        
      </div>
    </main>
  )
}