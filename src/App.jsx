
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Food from './Components/Food/Food'
import Oder from './Components/Oder/Oder'
import { useState } from 'react'

function App() {

  const [oder,setOder]=useState([]);
  const handleOder = odr =>{

    const newOder = [...oder,odr]
    ;
    setOder(newOder);
  }



  return (
    <>
   <div>



   <Header></Header>
   <Banner></Banner>
   {/* main  */}
<div className=' flex justify-between gap-16'>
  {/* item */}
  <div>
  <Food  handleOder={ handleOder}></Food>
  </div>
  
  {/*Oder */}
  <div>
    <Oder oder={oder}></Oder>

  </div>

</div>






{/* end */}
   </div>
    </>
  )
}

export default App
