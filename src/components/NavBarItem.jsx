'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

const NavBarItem = ({ title, param }) => {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')
  const pathname = usePathname()

  return (
    <div className=''>
      <Link
        href={
          pathname === '/tv' ? `/tv?genre=${param}` : `/?genre=${param}`
        }
        className={`m-4 cursor-pointer hover:text-amber-600 font-mono font-semibold p-2 ${
          genre &&
          genre === param &&
          'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
        }`}
      >
        {title}
      </Link>
    </div>
  )
}
export default NavBarItem
