import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip"; // Added TooltipProvider
import { FiClock, FiCalendar } from "react-icons/fi";
import { Button } from "@/components/ui/button";
const blogs = [
  {
    title: "Going all-in with millennial design",
    image: "/images/rectangle-13.png",
    date: "12th Oct 2022",
    readTime: "5 min",
  },
  {
    title: "Going all-in with millennial design",
    image: "/images/rectangle-14.png",
    date: "12th Oct 2022",
    readTime: "5 min",
  },
  {
    title: "Going all-in with millennial design",
    image: "/images/rectangle-15.png",
    date: "12th Oct 2022",
    readTime: "5 min",
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Our Blogs</h2>
        <p className="text-gray-600">Find a bright idea to suit your taste with our great selection</p>
      </div>

      {/* Wrap everything inside TooltipProvider */}
      <TooltipProvider>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded" />
              <div className="p-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <h3 className="text-xl ">{blog.title}</h3>
                  </TooltipTrigger>
                  <TooltipContent className="p-2 bg-gray-800 text-white text-sm rounded-md">
                    Syed Obaid
                  </TooltipContent>
                </Tooltip>
                <p className="text-black ml-6 mt-2 cursor-pointer">Read More</p>
                <div className="flex ml-6 text-sm text-gray-500 mt-4 space-x-4">
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    <span>{blog.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <FiCalendar className="mr-1" />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TooltipProvider>

      <div className="text-center mt-6">
        <Button className="text-black underline">
          View All Posts
        </Button>
      </div>
    </section>
  );
};

export default BlogSection;
