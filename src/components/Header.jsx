import Link from 'next/link'
import MenuItem from './MenuItem'
import DarkMode from './DarkMode'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { MdMovie } from 'react-icons/md'

const Header = () => {
  return (
    <div className='flex justify-between mx-6 max-w-6xl sm:mx-auto items-center py-3'>
      <div className='flex font-mono font-semibold'>
        <MenuItem title='Home' address='/' Icon={AiFillHome} />
        <MenuItem title='Series' address='/tv' Icon={MdMovie} />
        <MenuItem title='About' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex items-center space-x-5'>
        <DarkMode />
        <Link href='/'>
          <h2 className='text-2xl'>
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1 font-mono'>
              IMDb
            </span>
            <span className='text-xl hidden sm:inline sm:mr-4 lowercase font-mono'>
              Clone
            </span>
          </h2>
        </Link>
      </div>
    </div>
  )
}
export default Header
