'use client'

import { useEffect } from 'react'

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error)
  }, [error])
  return (
    <div className='mt-10 text-center place-items-center grid'>
      <div className='bg-amber-100 text-gray-700 dark:bg-gray-600 dark:text-white rounded-md p-5'>
        <h1 className='text-3xl font-mono font-semibold mb-2'>Something went wrong</h1>
        <button
          className='hover:text-amber-200 bg-amber-500 rounded-md p-1 font-mono font-semibold'
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
export default Error
