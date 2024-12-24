import React from 'react'
import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogCard from "@/components/card"
const page = () => {
  return (
    <div>
          <Header />

          <h1 className='text-2xl font-bold px-8 py-10 md:px-16 lg:px-20'>All Blogs</h1>
          <BlogCard />
          <Footer />
    </div>
  )
}

export default page
