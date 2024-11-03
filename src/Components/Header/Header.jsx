
const Header = () => {
    return (
       <div className="flex justify-between flex-row items-center my-6 px-3">
        <h1 className="text-3xl">Recipe Calories</h1>
        <div className="flex justify-around gap-5">
            <a href="">Home</a>
            <a href="">Recipes</a>
            <a href="">About</a>
            <a href="">Search</a>
        </div>
      
       <div className=" flex gap-2">
       <input className="bg-slate-100 text-gray-300 text-center  rounded-xl" type="text" placeholder="Search"  />
       <img className="  rounded-full p-1 bg-green-400  " src="../../../public/img/Vector.png" alt="" />
       </div>
    
        
       

       </div>
           
    );
};

export default Header;