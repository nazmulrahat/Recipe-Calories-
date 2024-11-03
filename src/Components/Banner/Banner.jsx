

const Banner = () => {
    return (
      <div>
          <div className=" bg-[url('https://i.ibb.co.com/6sTwTTS/Rectangle-1.png')] flex flex-col items-center gap-6 p-11 bg-no-repeat  h-96 rounded-3xl w-fll ">
            <h1 className="text-5xl font-bold text-white">Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className="text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex gap-6">
                <button className="bg-green-300 text-xl font-bold h-[50px] rounded-3xl w-[175px]" >Explore Now</button>
                <button className="border-2 text-xl font-bold h-[50px] rounded-3xl w-[175px]" >Our Feedback</button>
            </div>

           
         
        </div>
        <div className="my-16 flex flex-col gap-5">
                <h1 className="text-4xl font-bold">Our Recipes</h1>
                <p>Our recipes are crafted to delight your taste buds, offering a variety of flavors and ingredients. <br /> Enjoy easy-to-follow steps that inspire creativity and bring joy to your cooking experience.</p>
            </div>
     
      </div>
    );
};

export default Banner;