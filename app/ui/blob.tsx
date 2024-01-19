import '@/app/ui/blob.css'

export function Blob() {
  return (
    <div className="square blob">
      <span></span>
      <span></span>
      <span></span>
      <div className="content">
        <p className='md:text-5xl antialiased font-bold text-4xl'>How <strong className='text-white'>Safe</strong> is Your</p>
        <p className='md:text-5xl antialiased font-bold text-4xl'>Everyday <strong className='text-blue-300'>Water</strong>?</p>
      </div>
    </div>
  );
}
