import axios from "axios";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useLocation, useParams } from "react-router-dom";


export default function ShowProduct() {

    const location=useLocation();
    // console.log(location.state);
    const [data,setData]=useState(location.state)
    console.log(data);
    
    // const [product, setProduct] = useState(useParams('object'));
    // setProduct(JSON.parse(product));
 
    return (
      <div class="w-full grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div class="grid gap-4">
          <LazyLoadImage
          effect="blur"
            src={`http://localhost:3001/uploads/${data.p_images[0]}`}
            alt="Product Image"
            width="800"
            height="800"
            class="aspect-square object-cover border w-full rounded-lg overflow-hidden"
          />
          <div class="grid md:grid-cols-3 gap-4">
            <LazyLoadImage
            effect="blur"
              src="/placeholder.svg"
              alt="Product Thumbnail"
              width="150"
              height="150"
              class="aspect-square object-cover border rounded-lg overflow-hidden"
            />
            <LazyLoadImage
            effect="blur"
              src="/placeholder.svg"
              alt="Product Thumbnail"
              width="150"
              height="150"
              class="aspect-square object-cover border rounded-lg overflow-hidden"
            />
            <LazyLoadImage
            effect="blur"
              src="/placeholder.svg"
              alt="Product Thumbnail"
              width="150"
              height="150"
              class="aspect-square object-cover border rounded-lg overflow-hidden"
            />
          </div>
        </div>
        <div class="grid gap-6">
          <div>
            <h1 class="text-3xl font-bold">{data.p_name}</h1>
            <p class="text-gray-500">{data.p_description}</p>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 fill-blue-500" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg class="w-5 h-5 fill-blue-500" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg class="w-5 h-5 fill-blue-500" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg class="w-5 h-5 fill-gray-300 stroke-gray-500" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg class="w-5 h-5 fill-gray-300 stroke-gray-500" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div class="text-4xl font-bold">Rupees {data.p_price}</div>
          </div>
          <form class="grid gap-4">
            <div class="grid gap-2">
              <label for="color" class="text-base">
                Color
              </label>
              <div class="flex items-center gap-2">
                <label
                  for="color-black"
                  class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-200"
                >
                  <input type="radio" id="color-black" name="color" value="black" class="hidden" />
                  Black
                </label>
                <label
                  for="color-white"
                  class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-200"
                >
                  <input type="radio" id="color-white" name="color" value="white" class="hidden" />
                  White
                </label>
                <label
                  for="color-blue"
                  class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-200"
                >
                  <input type="radio" id="color-blue" name="color" value="blue" class="hidden" />
                  Blue
                </label>
              </div>
            </div>
            <div class="grid gap-2">
              <label for="size" class="text-base">
                Size
              </label>
              <div class="flex items-center gap-2">
                <label
                  for="size-xs"
                  class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-200"
                >
                  <input type="radio" id="size-xs" name="size" value="xs" class="hidden" />
                  XS
                </label>
                <label
                  for="size-s"
                  class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-200"
                >
                  <input type="radio" id="size-s" name="size" value="s" class="hidden" />
                  S
                </label>
                <label
                  for="size-m"
                  class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-200"
                >
                  <input type="radio" id="size-m" name="size" value="m" class="hidden" />
                  M
                </label>
                <label
                  for="size-l"
                  class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-200"
                >
                  <input type="radio" id="size-l" name="size" value="l" class="hidden" />
                  L
                </label>
                <label
                  for="size-xl"
                  class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-200"
                >
                  <input type="radio" id="size-xl" name="size" value="xl" class="hidden" />
                  XL
                </label>
              </div>
            </div>
            <div class="grid gap-2">
              <label for="quantity" class="text-base">
                Quantity
              </label>
              <select id="quantity" class="w-24 border rounded-md p-2">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Add to cart</button>
          </form>
        </div>
        <div class="col-span-2">
          <h2 class="text-2xl font-bold mb-4">Related Products</h2>
          <div class="flex overflow-x-auto gap-4">
            <div class="flex-shrink-0">
              <div class="p-1">
                <div class="border rounded-lg overflow-hidden">
                  <LazyLoadImage
                    src="/placeholder.svg"
                    alt="Related Product"
                    width="300"
                    height="300"
                    class="aspect-square object-cover"
                  />
                  <div class="p-4">
                    <h3 class="text-lg font-semibold">Acme Hoodie</h3>
                    <p class="text-gray-500">Cozy and stylish</p>
                    <div class="flex items-center justify-between mt-2">
                      <div class="text-2xl font-bold">$59</div>
                      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-md">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-shrink-0">
              <div class="p-1">
                <div class="border rounded-lg overflow-hidden">
                  <LazyLoadImage
                    src="/placeholder.svg"
                    alt="Related Product"
                    width="300"
                    height="300"
                    class="aspect-square object-cover"
                  />
                  <div class="p-4">
                    <h3 class="text-lg font-semibold">Acme Joggers</h3>
                    <p class="text-gray-500">Comfortable and versatile</p>
                    <div class="flex items-center justify-between mt-2">
                      <div class="text-2xl font-bold">$49</div>
                      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-md">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-shrink-0">
              <div class="p-1">
                <div class="border rounded-lg overflow-hidden">
                  <LazyLoadImage
                    src="/placeholder.svg"
                    alt="Related Product"
                    width="300"
                    height="300"
                    class="aspect-square object-cover"
                  />
                  <div class="p-4">
                    <h3 class="text-lg font-semibold">Acme Backpack</h3>
                    <p class="text-gray-500">Durable and spacious</p>
                    <div class="flex items-center justify-between mt-2">
                      <div class="text-2xl font-bold">$79</div>
                      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-md">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-shrink-0">
              <div class="p-1">
                <div class="border rounded-lg overflow-hidden">
                  <LazyLoadImage
                  effect="blur"
                    src="/placeholder.svg"
                    alt="Related Product"
                    width="300"
                    height="300"
                    class="aspect-square object-cover"
                  />
                  <div class="p-4">
                    <h3 class="text-lg font-semibold">Acme Sunglasses</h3>
                    <p class="text-gray-500">Stylish UV protection</p>
                    <div class="flex items-center justify-between mt-2">
                      <div class="text-2xl font-bold">$39</div>
                      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-md">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }