
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HrfTRMNDnYn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from 'react-router-dom';
import HomeProductCards from './HomeProductCards';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fun = async () => {
      const res = await axios.get("http://localhost:3001/product/")
      console.log(res.data.data);
      setData( res.data.data)
    // useMemo(()=>{  setData( res.data.data),[]})
    }
    fun()

  }, [])

  const navigate = useNavigate()

  const specific = (user) => {
    // setSpecificUser( data.filter((user)=>{
    //   return user.id==uid ? user:null
    // }))
    // console.log(specificUser,uid);

    // if(specificUser){nevigate('/specificUser',{state:specificUser});}
    navigate('/show-product', { state: user });
  }
  return (
    <div className=" mx-2 w-full flex flex-col min-h-[100dvh]">
      {data ?
        <>
          <Header />
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 ">
              <div className="container grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
                <LazyLoadImage
                  effect="blur"
                  src="https://media.istockphoto.com/id/1733124463/photo/stylish-dark-skinned-man-wearing-a-yellow-blazer.webp?b=1&s=170667a&w=0&k=20&c=dhEVxzO_8gCjtAmRZpALtf59c8YPaux10y6b1cUigAs="
                  width={600}
                  height={600}
                  alt="Hero Product"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    New Product
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Elevate Your Style</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Discover our latest collection of high-quality, sustainable fashion for all your needs.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </section>
            {/* Product Component */}

            <HomeProductCards data={data} />


            {/* Product Component */}
            <section className="w-full py-12 md:py-24 lg:py-32  ">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Our E-commerce Platform?</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Our e-commerce platform offers a seamless shopping experience, secure payments, and a wide range of
                      features to help your business thrive.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <ul className="grid gap-6">
                      <li>
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">Secure Payments</h3>
                          <p className="text-muted-foreground">
                            Our platform offers a range of secure payment options to ensure your customers' financial
                            information is protected.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">Responsive Design</h3>
                          <p className="text-muted-foreground">
                            Our e-commerce platform is designed to be mobile-friendly, ensuring a seamless shopping
                            experience across all devices.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">Scalable Infrastructure</h3>
                          <p className="text-muted-foreground">
                            Our platform is built to handle high traffic and sales, so your business can grow without
                            worrying about infrastructure limitations.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <LazyLoadImage
                    effect="blur"
                    src="https://m.media-amazon.com/images/I/71OKaQZbj5L._AC_UL480_FMwebp_QL65_.jpg"
                    width={550}
                    height={400}
                    alt="E-commerce Features"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                </div>
                <div className="flex justify-center">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Our Products
                  </Link>
                </div>
              </div>
            </section>
            <Footer />
          </main>
        </>
        : <p>Loading...</p>}
    </div>
  )
}

