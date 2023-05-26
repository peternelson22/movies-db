import Image from 'next/image'

const loading = () => {
  return (
    <div className='flex justify-center'>
      <Image src={'spinner.svg'} height={90} width={90} alt='loading...' />
    </div>
  )
}
export default loading
