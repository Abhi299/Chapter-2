export const metadata = {
  title: 'Chapter 2 Entertainment',
  description: 'Page description',
}

export default function ServicesPage() {

  return (
    <div className="flex justify-center">
        <div className="pt-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {/* Column 1 */}
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold mb-4 text-center font-medium text-white-600 mb-10">Phase 1<br />(2023-2024)</h2>
            {/* Item 1 */}
            <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700 mb-8">
              <div className="w-56 h-72 bg-cover bg-center relative text-gray-800" style={{ backgroundImage: 'url("/images/consulting.jpg")' }}>
                <div className="flex flex-row justify-between">
                </div>
              </div>

              <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-gray-800 font-bold text-3xl mb-2">Artist Consulting</span>
                <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700 mb-8">
              <div className="w-56 h-72 bg-cover bg-center relative text-gray-800" style={{ backgroundImage: 'url("/images/marketing.jpg")' }}>
                <div className="flex flex-row justify-between">
                </div>
              </div>

              <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-gray-800 font-bold text-3xl mb-2">Digital Marketing</span>
                <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700 mb-8">
              <div className="w-56 h-72 bg-cover bg-center relative text-gray-800" style={{ backgroundImage: 'url("/images/analytics.jpg")' }}>
                <div className="flex flex-row justify-between">
                  {/* ...Content of the element */}
                </div>
              </div>

              <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-gray-800 font-bold text-3xl mb-2">Data Analytics</span>
                <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold mb-4 text-center font-medium text-white-600 mb-10">Phase 2<br />(2024-2025)</h2>
            {/* Item 1 */}
            <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700 mb-8">
              <div className="w-56 h-72 bg-cover bg-center relative text-gray-800" style={{ backgroundImage: 'url("/images/tour.jpg")' }}>
                <div className="flex flex-row justify-between">
                </div>
              </div>

              <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-gray-800 font-bold text-3xl mb-2">Tour Management</span>
                <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700 mb-8">
              <div className="w-56 h-72 bg-cover bg-center relative text-gray-800" style={{ backgroundImage: 'url("/images/event.jpg")' }}>
                <div className="flex flex-row justify-between">
                  {/* ...Content of the element */}
                </div>
              </div>

              <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-gray-800 font-bold text-3xl mb-2">Event Coordination</span>
                <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700 mb-8">
              <div className="w-56 h-72 bg-cover bg-center relative text-gray-800" style={{ backgroundImage: 'url("/images/dsp.jpg")' }}>
                <div className="flex flex-row justify-between">
                  {/* ...Content of the element */}
                </div>
              </div>

              <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-gray-800 font-bold text-3xl mb-2 mt-12">DSPs Pitch</span>
                <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            {/* Repeat for Item 2 and Item 3 */}
          </div>

          {/* Column 3 */}
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold mb-4 text-center font-medium text-white-600 mb-10">Phase 3<br />(After 2025)</h2>
            {/* Item 1 */}
            <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700 mb-8">
              <div className="w-56 h-72 bg-cover bg-center relative text-gray-800" style={{ backgroundImage: 'url("/images/sync.jpg")' }}>
                <div className="flex flex-row justify-between">
                  {/* ...Content of the element */}
                </div>
              </div>

              <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-gray-800 font-bold text-3xl mb-2 mt-12">Sync Pitch</span>
                <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700 mb-8  ">
              <div className="w-56 h-72 bg-cover bg-center relative text-gray-800" style={{ backgroundImage: 'url("/images/label.jpg")' }}>
                <div className="flex flex-row justify-between">
                </div>
              </div>

              <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-gray-800 font-bold text-3xl mb-2">Labels Services</span>
                <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

          </div>
        </div>
    </div>



  );
}