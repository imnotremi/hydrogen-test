

export default function Homepage() {

    const rocket = "Images/rocket.png.png"

  return (

<div className="  ">
    <div className="bg-gradient-to-tr from-amber-300 to-red-500">

        <div className='text-center grid grid-cols-2 items-center py-32'>

            <div className="w-7/12 place-self-center">
                <img src={rocket} alt="" />
            </div>

            <div className="text-left place-self-content">
                    <h1 className="text-6xl font-extrabold py-4">New collection !</h1>
                    <p className="text-lg">Discover our new collection, unique designs for impeccable looks.</p>
                    <button className="text-lg p-3 rounded-2xl mt-10 bg-teal-400 hover:bg-teal-500">Discover !</button>
            </div>


        </div>

    </div>
</div>


    )
}



//bg-[url('/Users/remifraiche/Documents/web-portfolio/mimb-art-css/public/Images/cart_8.png')] bg-center