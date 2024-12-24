import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";
import { RxSwitch } from "react-icons/rx";
const header = () => {
  return (
    <>
       <div className="w-full bg-white flex flex-wrap md:flex-wrap lg:flex-nowrap flex-col md:flex-row px-8 py-10 md:px-16 lg:px-20 gap-6">
        <div className="w-full md:w-1/3 flex flex-col md:flex-row justify-between">
          <Link href="/">
            <Image
              src={"/images/logo.png"}
              alt="Furniro"
              width={180}
              height={40}
            />
          </Link>
        </div>
        <div className="w-full gap-4 md:w-1/3 flex flex-col md:flex-row justify-center items-center md:justify-around">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="w-full md:w-1/3 flex justify-around items-center">
<div className='flex'>
<input type="search" placeholder='Search' className='p-2 rounded-lg'/>
            <IoMdSearch className="w-5 h-5 mt-3" />
</div>
<Link href="/">
<RxSwitch className="w-20 h-10 "/>
</Link>
        </div>
      </div>
    </>
  )
}

export default header
