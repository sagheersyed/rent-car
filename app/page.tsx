'use client'
import { Hero , Home1 } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'

// package.json
/* ( dev-dependencies ) are just used in developement mode not used in production.*/
// in the other hand ( dependencies ) are used in both developement and production mode
// in package.json we have project info , commands , dependencies available which are need in our project.

// file-system based routing
// in next js if we want to create multiple pages for routing we need to follow the file-system based routing. In the app folder we need to define our route with the folder name and under the folder we need to create a file page.js this is the convention which we will follow in next.js. ex: app/login , app/about , app/services
export default function Home() {
  const router = useRouter();
  console.log(router)
  return (
    <main className="md:flex justify-center sm:block sm:text-left md:items-center flex-col flex-1">
      <Hero/> 
      <Home1/>
    </main>
  );
}
