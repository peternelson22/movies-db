'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SearchBox = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return
    router.push(`/search/${search}`)
    setSearch('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex max-w-6xl mx-auto justify-between items-center px-5 '
    >
      <input
        type='text'
        placeholder='Search keywords...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-full rounded-sm h-14 placeholder-gray-500 outline-none bg-transparent flex-1'
      />
      <button
        disabled={!search}
        type='submit'
        className='text-amber-600 disabled:text-gray-400 border-none border-transparent focus:border-transparent focus:ring-0'
      >
        Search
      </button>
    </form>
  )
}
export default SearchBox
