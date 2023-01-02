

export default function Homepage() {

    const rocket = "Images/Asset 1.png"

  return (

<div className="bg-gradient-to-bl from-purple-200 to-orange-100 ">
    <div className="w-auto">

        <div className='text-center grid grid-cols-2 items-center py-20'>

            <div className="w-10/12 place-self-end">
                <img src={rocket} alt="" />
            </div>

            <div className="text-left">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-500 to-red-400 text-4xl sm:text-6xl md:text-7xl font-extrabold py-4">New collection !</h1>
                    <p className="text-lg">Discover our new collection, unique designs for impeccable looks.</p>
                    <button className="text-lg p-3 rounded-xl mt-3 bg-pink-400 hover:bg-pink-500">Discover !</button>
            </div>


        </div>

    </div>
</div>


    )
}







//bg-[url('/Users/remifraiche/Documents/web-portfolio/mimb-art-css/public/Images/cart_8.png')] bg-center