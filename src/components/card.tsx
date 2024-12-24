"use client"
import React from "react";
import { useEffect } from 'react';
import Link from "next/link";
import {blogs} from "../../data/blogs"
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Card = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div data-aos="fade-up" className="w-full flex flex-col md:flex-row justify-between items-center px-8 md:px-16 lg:px-20 gap-4 flex-wrap" >

  {blogs.map((blog) =>(
     <div key={blog.slug} className="w-full md:max-w-[calc(33%-1rem)] p-4 md:p-2 border rounded-lg">
      <Image
            src={blog.image}
            alt={blog.title}
            width={100}
            height={100}
            className="w-full"
          />

          <div className="px-4 py-4">
            <h5 className="w-28 text-[#4B6BFB] bg-gray-200 flex items-center justify-center">
              Technology
            </h5>
          </div>
          <Link href={`/blog/${blog.slug}`} className="font-bold text-lg md:text-[22px] leading-[28px]">
            {blog.title}
          </Link>

          <div className="flex justify-evenly items-center w-full mt-4">
            <Image
              src={blog.authorimage}
              alt="Author"
              width={30}
              height={20}
              className="rounded"
            />
            <p className="font-medium text-xs md:text-base leading-6 text-[#97989F]">
              {blog.authorname}
            </p>
            <p className="font-medium text-xs md:text-basetext-base leading-6 text-[#97989F]">
              {blog.publisheddate}
            </p>
          </div>
     </div>
  ))}
  </div>
      
          
    </>
  );
};

export default Card;
