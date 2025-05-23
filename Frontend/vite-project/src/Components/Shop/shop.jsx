/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XJ99S3fT17g
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div className="relative flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center z-10">
          <a href="#" className="flex items-center justify-center">
            <i className="fa-solid fa-shopping-bag text-2xl" />
            <span className="sr-only">Acme Ecommerce</span>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Shop
            </a>
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </a>
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </a>
          </nav>
        </header>
        <main className="flex-1 relative">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Shop Our Collection
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Browse our curated selection of high-quality home goods and decor. Find the perfect items to elevate
                    your living space.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="relative flex-1">
                    <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="search"
                      placeholder="Search products..."
                      className="pl-12 pr-4 py-2 rounded-md bg-gray-200 w-full"
                    />
                  </div>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero Product"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Discover our curated selection of the best home goods and decor. Find the perfect items to elevate
                    your living space.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                <div className="group flex flex-col items-start justify-between rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <img
                    src="/placeholder.svg"
                    width="300"
                    height="300"
                    alt="Product 1"
                    className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center"
                  />
                  <div className="mt-4 flex w-full flex-col items-start justify-between">
                    <h3 className="text-lg font-medium">Acme Sofa</h3>
                    <p className="text-gray-500">$999.99</p>
                  </div>
                </div>
                <div className="group flex flex-col items-start justify-between rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <img
                    src="/placeholder.svg"
                    width="300"
                    height="300"
                    alt="Product 2"
                    className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center"
                  />
                  <div className="mt-4 flex w-full flex-col items-start justify-between">
                    <h3 className="text-lg font-medium">Acme Lamp</h3>
                    <p className="text-gray-500">$49.99</p>
                  </div>
                </div>
                <div className="group flex flex-col items-start justify-between rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <img
                    src="/placeholder.svg"
                    width="300"
                    height="300"
                    alt="Product 3"
                    className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center"
                  />
                  <div className="mt-4 flex w-full flex-col items-start justify-between">
                    <h3 className="text-lg font-medium">Acme Rug</h3>
                    <p className="text-gray-500">$199.99</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-gray-200 p-6 md:py-12 w-full">
          <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
            <div className="grid gap-1">
              <h3 className="font-semibold">Shop</h3>
              <a href="#">Home</a>
              <a href="#">Furniture</a>
              <a href="#">Decor</a>
              <a href="#">Lighting</a>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">About</h3>
              <a href="#">Our Story</a>
              <a href="#">Sustainability</a>
              <a href="#">Careers</a>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Customer Service</h3>
              <a href="#">Contact Us</a>
              <a href="#">Returns</a>
              <a href="#">FAQs</a>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Legal</h3>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Newsletter</h3>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 px-4 py-2 rounded-md bg-white"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500">Sign up to get the latest updates and offers.</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }