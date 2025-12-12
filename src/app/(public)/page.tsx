import Link from 'next/link';
import Image from 'next/image';
import TrendyProductCard from '@/components/public/TrendyProductCard';
import FeaturedProductsSection from '@/components/public/FeaturedProductsSection';
import VoucherCard from '@/components/public/VoucherCard';
import HeroCarousel from '@/components/public/HeroCarousel';

export default function HomePage() {
  return (
    <div className="pb-12">
      {/* Hero Section */}
      <HeroCarousel />



      {/* Trendy Products (Gadgets) - Left Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-20 items-center h-[850px]">
          {/* Left Image */}
          <div className="flex-1 w-full relative h-full overflow-hidden group">
            <Image
              src="/images/homePage/image-section1.png"
              alt="Trendy Gadgets"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Products */}
          <div className="flex-1 w-full space-y-8 py-10">
            <div className="text-center md:text-left space-y-3">
              <p className="text-neutral-500 text-xl font-normal font-sans">Trendy Products</p>
              <h2 className="text-4xl font-bold text-slate-800 leading-[50px]">Top-rated gadgets</h2>
              <p className="text-neutral-500 text-sm">Handpicked deals on the latest tech you’ll love.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <TrendyProductCard
                title="XIAOMI 15T PRO"
                description="Focused on powerful performance and Leica-enhanced photography"
                price={2999}
                rating={4.9}
                sales={155}
                image="/images/homePage/xiaomi15tpro.webp"
                colors={['#44403C', '#52525B', '#000000']}
                isSale
              />
              <TrendyProductCard
                title="iPhone 17 Pro Max"
                description="Offering top-tier performance, camera quality, and ecosystem integration."
                price={6999}
                rating={4.9}
                sales={355}
                image="/images/homePage/iphone17promax.webp"
                colors={['#D1D5DB', '#FB923C', '#1E293B']}
                isSale
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trendy Products (Students) - Right Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse gap-20 items-center h-[850px]">
          {/* Right Image */}
          <div className="flex-1 w-full relative h-full overflow-hidden group">
            <Image
              src="/images/homePage/image-section2.png"
              alt="Best for Students"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Left Products */}
          <div className="flex-1 w-full space-y-8 py-10">
            <div className="text-center md:text-left space-y-3">
              <p className="text-neutral-500 text-xl font-normal font-sans">Trendy Products</p>
              <h2 className="text-4xl font-bold text-slate-800 leading-[50px]">Best for Students</h2>
              <p className="text-neutral-500 text-sm">Study, stream, and create with gear made for students.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <TrendyProductCard
                title="ASUS TUF Gaming A15"
                description="Powerful 15.6-inch Ryzen 7 gaming laptop with RTX 3050 graphics and a fast 144 Hz display"
                price={3499}
                rating={4.9}
                sales={455}
                image="/images/homePage/asustufgaminga15.webp"
                colors={['#1F2937']}
                isSale
              />
              <TrendyProductCard
                title="Lenovo IdeaTab TB-336FU"
                description="Affordable 11.5-inch Android tablet with a sharp 2K screen, Dimensity 6300 chip"
                price={829}
                rating={4.9}
                sales={255}
                image="/images/homePage/lenovoIdeaTabTB-336fu.png"
                colors={['#A3A3A3']}
                isSale
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Bento Grid */}
      {/* Category Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0">
          <Image src="/images/homePage/section3-background.jpg" alt="Background" fill className="object-cover" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[850px] relative z-10">
          {/* Col 1: Laptop (Top Left) */}
          <div className="col-span-1 relative overflow-hidden group h-[400px] md:h-auto bg-white">
            <Image src="/images/homePage/section3-img1.png" alt="Laptop" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute left-0 bottom-0 bg-[#657979]/90 w-[300px] h-[180px] p-6 flex flex-col items-center justify-center text-center transition-colors">
              <h3 className="text-white text-3xl font-bold mb-4 font-sans leading-tight">Power to go</h3>
              <Link href="/products?category=laptop" className="text-[10px] font-bold font-sans text-white border border-white px-6 py-3 uppercase tracking-wider inline-block hover:bg-white hover:text-black transition-colors">EXPLORE LAPTOP</Link>
            </div>
          </div>

          {/* Col 2: Stack (Accessories + Tablet) (Top Right) */}
          <div className="col-span-1 flex flex-col gap-4 h-[600px] md:h-auto">
            {/* Accessories */}
            <div className="flex-1 relative overflow-hidden group bg-teal-950">
              <Image src="/images/homePage/section3-img2.jpg" alt="Accessories" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute left-0 bottom-0 bg-[#657979]/90 w-[300px] h-[160px] p-6 flex flex-col items-center justify-center text-center transition-colors">
                <h3 className="text-white text-xl font-bold mb-4 font-sans">Style, charge, protect</h3>
                <Link href="/products?category=accessories" className="text-[10px] font-bold font-sans text-white border border-white px-6 py-3 uppercase tracking-wider inline-block hover:bg-white hover:text-black transition-colors">EXPLORE ACCESSORIES</Link>
              </div>
            </div>
            {/* Tablet */}
            <div className="flex-1 relative overflow-hidden group">
              <Image src="/images/homePage/section3-img4.jpg" alt="Tablet" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute left-0 bottom-0 bg-[#657979]/90 w-[300px] h-[160px] p-6 flex flex-col items-center justify-center text-center transition-colors">
                <h3 className="text-white text-2xl font-bold mb-4 font-sans">Big screen, light feel</h3>
                <Link href="/products?category=tablet" className="text-[10px] font-bold font-sans text-white border border-white px-6 py-3 uppercase tracking-wider inline-block hover:bg-white hover:text-black transition-colors">EXPLORE TABLET</Link>
              </div>
            </div>
          </div>

          {/* Col 3: PC (Bottom Left) */}
          <div className="col-span-1 relative overflow-hidden group h-[400px] md:h-auto">
            <Image src="/images/homePage/section3-img5.jpg" alt="PC" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute left-0 bottom-0 bg-[#657979]/90 w-[300px] h-[180px] p-6 flex flex-col items-center justify-center text-center transition-colors">
              <h3 className="text-white text-3xl font-bold mb-4 font-sans leading-tight">Power at <br />your desk</h3>
              <Link href="/products?category=pc" className="text-[10px] font-bold font-sans text-white border border-white px-6 py-3 uppercase tracking-wider inline-block hover:bg-white hover:text-black transition-colors">EXPLORE PERSONAL COMPUTER</Link>
            </div>
          </div>

          {/* Col 4: Phone (Bottom Right) */}
          <div className="col-span-1 relative overflow-hidden group h-[400px] md:h-auto">
            <Image src="/images/homePage/section3-img1.jpg" alt="Phone" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute left-0 bottom-0 bg-[#657979]/90 w-[300px] h-[180px] p-6 flex flex-col items-center justify-center text-center transition-colors">
              <h3 className="text-white text-3xl font-bold mb-4 font-sans leading-tight">Life in <br />your hand.</h3>
              <Link href="/products?category=phone" className="text-[10px] font-bold font-sans text-white border border-white px-6 py-3 uppercase tracking-wider inline-block hover:bg-white hover:text-black transition-colors">EXPLORE PHONE</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <FeaturedProductsSection />

      {/* Subscribe Banner */}
      <section className="relative h-[400px] my-32 w-full max-w-[1920px] mx-auto overflow-visible z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] -z-10">
          <Image
            src="/images/homePage/section5-img.png"
            alt="Subscribe"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-sans tracking-tight">Don’t miss the next sale!</h2>
          <p className="text-white text-xl font-normal mb-8 max-w-2xl">Sign up and be the first to receive exclusive gadget vouchers.</p>
          <div className="flex w-full max-w-md bg-brand-teal rounded-[5px] overflow-hidden">
            <button className="w-full py-4 text-center text-white text-3xl font-normal font-sans tracking-tight hover:bg-teal-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Exclusive Vouchers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-6xl font-bold text-teal-950 mb-12 text-center tracking-tight font-sans">Exclusive Vouchers For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VoucherCard
            title="10% Discount"
            subtitle="WELCOME VOUCHER FOR FIRST PURCHASE"
            description={`Valid for first-time customers only.\nApplicable for a single transaction per user.\nMinimum spend of RM 888.`}
          />
          <VoucherCard
            title="RM 150 Rebate"
            subtitle="BIRTHDAY VOUCHER DURING BIRTHDAY MONTH"
            description={`Only valid during the customer’s birthday month.\nEach customer is entitled to 1 birthday voucher per year.\nMinimum spend of RM 1000.`}
          />
          <VoucherCard
            title="RM 50 Discount For Both"
            subtitle="REFER 1 FRIEND, BENEFITS 2 PEOPLE"
            description={`Referrer and referee both receive the voucher.\nVoucher is not valid if the referee cancels.\nEach successful referral earns 1 voucher only.`}
          />
          <VoucherCard
            title="RM 10 Discount"
            subtitle="1 review, 1 voucher"
            description={`Customer must submit a genuine review with photo.\nOne voucher per order review only.`}
            isActive
          />
          <VoucherCard
            title="10% Discount within 24 Hour"
            subtitle="encouragement to proceed"
            description={`Issued only to customers who abandon their cart.\nValid for a limited time (within 24 hours).`}
          />
          <VoucherCard
            title="RM 30 Extra Discount"
            subtitle="DO NOT FORGET YOUR ACCESSORIES"
            description={`Only applicable when purchasing selected products.\nVoucher can only be used to purchase accessories.`}
          />
          <VoucherCard
            title="RM 350 Loyalty Rebate"
            subtitle="AN APPRECIATION GIFT SPECIAL FOR YOU"
            description={`Rewarded when total spending reaches the RM 3,500.\nOne voucher per milestone level.`}
          />
          <VoucherCard
            title="Free Accessory worth RM 50"
            subtitle="A NEW YEAR, A NEW ACCESSORY"
            description={`Only available during festive periods.\nNot applicable for bundled items.`}
            isActive
          />
          <VoucherCard
            title="18% Discount"
            subtitle="DISCOUNT FOR NEWLY DEBUT PRODUCT"
            description={`Applicable for early shoppers during product launches.\nValid only within the promo period.`}
          />
        </div>
      </section>

      {/* Bottom Features/Blog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="relative aspect-[3/4] md:aspect-square rounded-lg overflow-hidden group cursor-pointer border border-gray-100">
              <Image src={`/images/homePage/blog-${i}.png`} alt="Feature" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-white text-xs font-bold uppercase mb-1">News</span>
                <h4 className="text-white font-semibold text-sm leading-tight">Latest Tech Insights & Reviews</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
