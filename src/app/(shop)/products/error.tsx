"use client"
export default function error({error}:{error:Error}) {
  return (
    <div className='flex flex-col justify-center items-center bg-black text-white '>
        <h1>Something Went Wrong</h1>
        <p>{error.message}</p>
    </div>
  )
}
