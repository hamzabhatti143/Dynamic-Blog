import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogCard from "@/components/card"
export default function Home() {
  return (
    <>
    <Header />

    <div className="w-full px-8 md:px-16 lg:px-20">
      {/* <Image src={"/images/hero.jpg"} alt="Hero" width={100} height={100} className="w-full rounded-lg mb-[-10px]"/> */}
      <div className="bg-[url('/images/hero.jpg')] h-[500px] w-full bg-no-repeat bg-cover rounded-lg opacity-75">
      </div>
      <div className="w-1/3 mx-auto  bg-white">
<h5>Technology</h5>

</div>

    </div>

<BlogCard />
    <Footer />
    </>
  );
}
