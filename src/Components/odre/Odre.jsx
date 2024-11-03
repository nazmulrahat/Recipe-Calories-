

const Odre = ({rat}) => {
 console.log(rat);
 const {name,preparing_time,calories
 }=rat
    return (
        <div className="flex justify-around text-start items-center my-2">
            <h1>{name}</h1>
            <h1>{preparing_time}</h1>
            <h1>{calories
            }</h1>
            
            <button className="bg-green-400 rounded-lg h-fit w-fit px-1 py-1 text-xl">Preparing</button>
        </div>
    );
};

export default Odre;