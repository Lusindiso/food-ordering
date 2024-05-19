import landingImage from '../assets/landing.png';
import appDownloadImage from '../assets/appDownload.png';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div className='bg-white rounded-lg dshadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
        <h1 className='text-5xl font-bold tracking-tight text-orange-600'>
          Tuck into a takeaway today
        </h1>
        <span className='text-xl'>
          Food is just a click away!
        </span>

        <form className='max-w-md mx-auto'>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'></label>
          <div className='relative flex'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-orange-500'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
              placeholder='Search by City or Town'
              required
            />
            <button
              type='submit'
              className='text-white absolute end-2.5 bottom-2 bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl px-4 py-2'>
              Search
            </button>
          </div>
        </form>
      </div>
      <div className='grid md:grid-cols-2 gap-5'>
        <img src={landingImage} />
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <span className='font-bold text-3xl tracking-tighter'>
            Order takeaway even faster!
          </span>
          <span>
            Download the TheTakeOut App for faster ordering
            and personalised recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
