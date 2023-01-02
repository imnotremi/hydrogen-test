export default function Stats() {
    return (
        <div className="mt-20 max-w-2xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="bg-gradient-to-bl from-indigo-300 to-indigo-800 md:mb-8 sm:mt-4 rounded-3xl hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-900">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                    
                    <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl text-purple-100 ">Latest news. Most value. Biggest impact.</h2>
                    <p className="mt-3 text-xl text-indigo-100 sm:mt-4">There are many reasons to learn, but let&apos;s talk about the numbers.</p>
                    </div>

                    <dl className="mt-10 text-center sm:max-w-4xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-24">
                        <div className="flex flex-col">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-100">Cost of the Headless eCommerce Store *Shopify</dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">$50,000+</dd>
                        </div>
                        <div className="flex flex-col mt-10 sm:mt-0">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-100">Average Ecommerce Developer Salary *ZipRecruiter</dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">$83,000+</dd>
                        </div>
                        <div className="flex flex-col mt-10 sm:mt-0">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-100">Time commitment (+building)</dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">5 Hours</dd>
                        </div>
                    </dl>
                    
                </div>
            </div>
        </div>
    )
  }