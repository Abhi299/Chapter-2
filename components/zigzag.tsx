import Image from "next/image";
import CEO from '@/public/images/CEO.jpg'
import CFO from '@/public/images/CFO.jpg'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
            <h1 className="h2 mb-4">Our team</h1>
            <p className="text-xl text-gray-400">Harmonizing Passion and Talent: Meet Our Remarkable Team.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-2 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <div className="w-75 h-75 rounded-full overflow-hidden mb-4">
              <Image className="w-full h-full object-cover" src={CEO} alt="CEO" />
            </div>
            <h4 className="h4 mb-2 text-center">Benson Zhang</h4>
            <p className="text-lg text-gray-400 text-center">CEO</p>
          </div>


            {/* 2nd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <div className="w-75 h-75 rounded-full overflow-hidden mb-4">
              <Image className="w-full h-full object-cover" src={CFO} alt="CFO" />
            </div>
            <h4 className="h4 mb-2 text-center">Vedansh Shashvat Mishra</h4>
            <p className="text-lg text-gray-400 text-center">CFO</p>
          </div>

          </div>

        </div>
      </div>
    </section>
  )
}
