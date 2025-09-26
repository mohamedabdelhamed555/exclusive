import React from 'react'

export default function SectionTitle({title , subtitle}:{title:string , subtitle:string}) {
  return (
    <div>
        <div className="section-title mb-15">
            <h2 className='font-semibold text-red-700 ps-6 mb-5 relative before:content[""] before:absolute before:top-1/2 before:start-0
            before:-translate-y-1/2 before:w-5 before:h-10 before:bg-red-700  before:rounded-sm '>{title}</h2>
            <span className='font-semibold text-4xl'>{subtitle} </span>
        </div>
    </div>
  )
}
