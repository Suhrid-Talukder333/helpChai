import Link from 'next/link';

const Popup = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: any;
  setModalOpen: any;
}) => {
  return (
    <>
      <div
        style={{ background: 'rgb(17 25 40 / 0.9)' }}
        className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center px-4 py-5 ${
          modalOpen ? 'block' : 'hidden'
        }`}
      >
        <div
          onFocus={() => setModalOpen(true)}
          onBlur={() => setModalOpen(false)}
          className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center  md:px-[70px] md:py-[60px]"
        >
          <h3 className="text-dark pb-[18px] text-xl font-semibold  sm:text-2xl">
            Understanding Water Quality: Read More About WQI
          </h3>
          <span
            className={`bg-blue-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded`}
          ></span>
          <p className="text-body-color text-justify mb-10 text-base leading-relaxed text-justify">
            For a detailed understanding of how the Water Quality Index (WQI) is
            calculated and interpreted, please refer to the comprehensive
            information available on the provided link.
          </p>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-1/2 px-3">
              <button
                onClick={() => setModalOpen(false)}
                className="border-stroke text-dark block w-full rounded-md border p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-300"
              >
                Cancel
              </button>
            </div>
            <div className="w-1/2 px-3">
              <button className="border-grey-200 bg-blue-300 block w-full rounded-md border p-3 text-center text-base font-medium transition hover:bg-blue-200">
                <Link href={`/dashboard/learning`}> Learn </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
