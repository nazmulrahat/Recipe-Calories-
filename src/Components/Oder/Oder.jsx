import Odre from "../odre/Odre";


const Oder = ({oder}) => {
 
    const {name,preparing_time,calories} = oder
    return (
        <div className="flex w-[500px] flex-col gap-5 h-fit py-8 px-5 border-2 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold">Want to cook: {oder.length}</h1>
            <hr />
            <div className="flex justify-around gap-10 text-center">
                <h3 className="text-2xl">Name</h3>
                <h3 className="text-2xl">Time</h3>
                <h3 className="text-2xl">Calories</h3>
                <h1></h1>
                <h1></h1>
            </div>
            <div>
                {
                   oder.map(rat => <Odre rat={rat} key={rat.id} ></Odre>)
                }
            </div>
         
            
        </div>
    );
};

export default Oder;