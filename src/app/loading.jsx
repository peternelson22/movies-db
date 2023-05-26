import Image from 'next/image'

const loading = () => {
  return (
    <div className='flex justify-center'>
      <Image src={'spinner.svg'} height={150} width={150} alt='loading...' />
    </div>
  )
}
export default loading
