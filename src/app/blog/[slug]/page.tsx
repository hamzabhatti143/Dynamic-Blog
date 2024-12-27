import { blogs } from "../../../../data/blogs"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Comments from "@/components/Fetch"
import Image from "next/image"
export default function BlogPost({params} : {params: {slug: string}}){
    const blog = blogs.find((b) => b.slug === params.slug);

    if(!blog){
        return <h1>This Post does not exist</h1>
    }

    return(
        <>
        <Header />
        <div className="px-8 md:px-16 lg:px-20 flex flex-col items-center justify-center">
            <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={400}
            />
            <h2 className="text-2xl mt-8 font-bold">{blog.title}</h2>
            <p className="text-justify">{blog.content}</p>
        </div>

        <Comments />

        <Footer />

        </>
    )
}