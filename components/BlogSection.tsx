import Image from 'next/image';
import React from 'react';

const BlogSection = () => {
  const posts = [
    {
      date: 'Mar 20',
      title: 'Beard Styles/by admin',
      author: 'The best barbershop in the town',
      description: 'The best barbershop in the town. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image:'/assets/48f78c426333baf176908ddce326824b.jpeg'
    },
    {
      date: 'Apr 25',
      title: 'Beard Styles/by admin',
      author: 'The best barbershop in the town',
      description: 'The best barbershop in the town. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image:'/assets/67fa5d5cf07313370e6660e353f53c17.jpeg'
    },
    {
      date: 'Jun 12',
      title: 'Beard Styles/by admin',
      author: 'The best barbershop in the town',
      description: 'The best barbershop in the town. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image:"/assets/72139bc34adce7c4d522e016e0c5280e.jpeg"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">News From Blog</h2>
        <p className="text-lg text-gray-600 mb-8">What’s on our mind</p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className=" relative">
            <div>
                <Image
                  src={post.image}
                  alt={post.title}
                  width='400'
                  height="400"
                 
                  className="object-cover w-full h-48"
                 
              />
              
            </div>
            <div className="text-gray-900 font-bold w-10 h-10 text-center text-sm mb-2 absolute right-0 top-[55%] bg-text">{post.date} </div> 
            <div className='flex mt-2'>
              <div className='w-[4px] h- bg-text mr-2'>

              </div>
              <div>


            <h3 className="text-sm font-semibold text-gray-500  uppercase">
            {post.title}
            </h3>
            <div className="text-gray-800 text-lg  mb-2"> {post.author}</div> 
              </div>
            </div>
            <p className="text-gray-600">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
