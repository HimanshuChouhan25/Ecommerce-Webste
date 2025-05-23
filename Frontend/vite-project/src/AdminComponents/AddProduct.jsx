import axios from "axios"
import { useFormik } from 'formik';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddProduct() {
    const [image,setImage]=useState('')
    const [error,setError]=useState()
    const [loading,setLoading]=useState(false)

    const notify = () => toast("Wow so easy!");
    const getImage=(target)=>{
        console.log(target.files[0])
        setImage(target.files[0])
    }

    const formData=new FormData();

    const formik=useFormik({
        initialValues: {
            p_id: '',
            p_price: '',
            p_name: '',
            p_description: '',
            p_company:'',
          },
          onSubmit:async values => {
            // const data={...values,p_image:image}
            formData.append('p_id',values.p_id)
            formData.append('p_price',values.p_price)
            formData.append('p_name',values.p_name)
            formData.append('p_description',values.p_description)
            formData.append('p_company',values.p_company)
            formData.append('p_image',image)
            // for (const [key, value] of formData.entries()) {
            //   console.log(key, value); 
            // }
            
          try {
              const res= await  axios.post('http://localhost:3001/product/add',formData)
              console.log(res);
              toast.success("Product added successfully")
              
            } catch (error) {
            setError(error)
            toast.error("Error occered")
          }
            // alert(JSON.stringify(data, null, 2));
          },
    })

  return (
    <div className="w-full flex flex-col min-h-screen">
      <header className="bg-black text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Add New Product</h1>
      </header>
      <main className="flex-1 bg-background p-6 md:p-12">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Product Name
              </label>
              <input
                id="p_name"
                type="text"
                name='p_name'
                onChange={formik.handleChange}
                placeholder="Enter product name"
                className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <textarea
                id="p_description"
                name='p_description'
                onChange={formik.handleChange}
                placeholder="Enter product description"
                className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[120px]"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="price" className="text-sm font-medium">
                Price
              </label>
              <input
                id="p_price"
                type="text"
                name='p_price'
                onChange={formik.handleChange}
                placeholder="Enter product price"
                className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="price" className="text-sm font-medium">
              Product id
              </label>
              <input
                id="p_id"
                type="text"
                name='p_id'
                onChange={formik.handleChange}
                placeholder="Enter product price"
                className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="price" className="text-sm font-medium">
              Product company
              </label>
              <input
                id="p_company"
                type="text"
                name='p_company'
                onChange={formik.handleChange}
                placeholder="Enter product price"
                className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="image" className="text-sm font-medium">
                Image
              </label>
              <div className="flex items-center gap-2">
                <input
                onChange={(e)=>{getImage(e.target)}}
                  id="image"
                  type="file"
                  className="block w-full rounded-md border border-input bg-transperent px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button variant="ghost" size="icon">
                  <UploadIcon className="h-5 w-5" />
                  <span className="sr-only text-black">Upload image</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <button
              type="submit"
              onClick={formik.handleSubmit}
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray focus:outline-none focus:ring-1 focus:ring-ring w-full"
            >
              Add Product
            </button>
            {/* <button
              variant="outline"
              className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring w-full"
            >
              Cancel
            </button> */}
            { <ToastContainer />}
           
          </div>
        </div>
      </main>
    </div>
  )
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}