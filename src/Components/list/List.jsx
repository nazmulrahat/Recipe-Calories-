

const List = ({ item ,handleOder}) => {
    console.log(item);
    const { image, name, short_description, ingredients, preparing_time, calories
    } = item
    return (
        <div className="my-14 border-2 p-6 rounded-xl  items-center  text-start w-[450px]  justify-center flex gap-2  flex-col">
            <img className="w-80 h-52 rounded-xl" src={image} alt="" />
           <div className="   items-start text-start   justify-center flex gap-2  flex-col">
           <h1 className="text-3xl font-bold">{name}</h1>
            <p>{short_description
            }</p>
            <hr />
            <div className="flex flex-col justify-start items-start">
            <h2 className="text-xl font-bold">Ingredients: 6</h2>
            <ul className="flex flex-col  ">
                <li >{ingredients[0]}</li>
                <li >{ingredients[1]}</li>
                <li >{ingredients[2]}</li>
                <li >{ingredients[3]}</li>
                <li >{ingredients[4]}</li>
                <li >{ingredients[5]}</li>

            </ul>
            </div>
            <hr />
            <div className="flex gap-6">
                <div className="flex justify-center items-center">
                    <img className="w-7" src="../../../public/img/Frame.png" alt="" />
                    <p>{preparing_time
                    }</p>
                </div>
                <div className="flex justify-center items-center">
                    <img className="w-8" src="../../../public/img/Frame2.png" alt="" />
                    <p>{calories}</p>
                </div>

            </div>
           
           <button onClick={()=>handleOder(item)} className=" bg-green-400 h-10 w-36 rounded-full text-black font-bold"> Want to Cook</button>
           




           </div>



        </div>
    );
};

export default List;