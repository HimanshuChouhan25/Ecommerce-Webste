import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import { useNavigate } from 'react-router-dom';


const HomeProductCards = (props) => {
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
    <>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our curated selection of the latest and greatest fashion items.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {props.data?props.data.map((obj)=>(
 <div onClick={(e)=>{e.preventDefault() ; specific(obj);}} to={`/show-product/:${JSON.stringify(obj)}`} key={obj._id} className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
                 <LazyLoadImage
                  effect="blur"
                  src={`http://localhost:3001/uploads/${obj.p_images[0]}`}
                  width={300}
                  height={300}
                  alt="Product 1"
                  className="h-[300px] w-full object-cover object-center transition-all group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{obj.p_name}</h3>
                  <p className="text-muted-foreground">Rupees {obj.p_price}</p>
                </div>
              </div>
              

        )):<p>Loading...</p>}
             
            </div>
          </div>
        </section>
    </>
  )
}

export default HomeProductCards
