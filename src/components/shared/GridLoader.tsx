import React from 'react'
import { Skeleton } from '../ui/skeleton'

export default function GridLoader() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="bg-amber-500 h-[125px] w-[250px] rounded-xl" />
      <div className="bg-amber-500 space-y-2">
        <Skeleton className="bg-amber-500 h-4 w-[250px]" />
        <Skeleton className="bg-amber-500 h-4 w-[200px]" />
      </div>
    </div>
  )
}
