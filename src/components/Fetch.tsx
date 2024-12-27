"use client"
import React, {useEffect, useState} from 'react'
interface Itodo{
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
  }
const Fetch = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [showComment, setShowComment] = useState(false); // New state to control showing comment

    // Handle button click
    const handleClick = () => {
        setShowComment(true); // Show the comment when button is clicked
    };
    const [data, setData] = useState<Itodo[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/comments")

            const parseResponse: Itodo[] = await response.json()
          
            console.log("todo >>>" + parseResponse);
            setData(parseResponse);
        };
        fetchData();
    }, [])
  return (
    <>

       <div className='w-full px-8 md:px-16 lg:px-20 pt-20'>
        <h1 className='font-bold text-3xl mb-6'>Post Comment</h1>
      {data.slice(0, 4).map((todo, index)=>(
        <div key={index}>
        <p className='font-bold text-xl'>{todo.name}</p>
        <p className='mb-8'>{todo.body}</p>
      </div>
      )
      
      )}
      </div>
<div className='w-3/4  px-8 md:px-16 lg:px-20 pt-20 flex justify-center gap-8 flex-col'>
      <input type="text" id='name' value={name} 
      onChange={(e) => setName(e.target.value)}
      placeholder='Enter Your Name' className='border border-black p-4 rounded-md'/>
      <textarea  cols={10} id='comment' value={comment} 
      onChange={(e) => setComment(e.target.value)}
      rows={3} placeholder='Write Your Comment' className='border border-black p-4 rounded-md'></textarea>
      <button onClick={handleClick} className='bg-blue-600 text-white p-2 rounded-lg text-lg'>Comment</button>
      </div>

      {showComment && (
                <div className="w-3/4  px-8 md:px-16 lg:px-20 pt-20 flex justify-center gap-8 flex-col">
                    <p className='font-bold text-xl'>{name}</p>
                    <p className="font-medium">{comment}</p>
                </div>
            )}
    </>
  )
}

export default Fetch

