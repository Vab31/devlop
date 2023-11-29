import React from 'react'
import lpu from '../img/lpulogo.png'
import dtu from '../img/dtulogo.jpg'
import ims from '../img/ims.jpeg'
import cu from '../img/cu.jpg'
import yb from '../img/yours.jpeg'
import mgkv from '../img/mgkv.png'

export default function Collaborations() {
   let data=[
        {
            img:lpu
        },
        {
            img:dtu
        },
        {
            img:ims
        },
        {
            img:cu
        },
        {
            img:yb
        },
        {
            img:mgkv
        },
    ]
    const boxStyle = {
        boxShadow: '0 4px 8px rgba(255, 10, 10, 0.5)', // Adjust values as needed
        padding: '20px', // Add other styling as needed
      };
  return (
   
   
    <section className="text-gray-600 body-font">
    <div className="flex flex-col text-center w-full mt-3 mr-auto">
      <h2 style={{ fontFamily: 'Instagram Sans Bold'}} className="md:text-5xl text-2xl md:m-5 text-black">Collaborations & Partnerships</h2>
   </div>
  <div className="container px-5  md:ml-auto  ">
    
    <div className="flex flex-wrap  ">
    { data.map((val)=>(
        
      <div className="p-4 md:w-1/3 mr-auto ml-auto"  >
        <div className="flex rounded-lg h-full md:p-8 flex-col">
          <div className="flex items-center  bg-gray-100 mb-2 w-28 h-28" style={boxStyle}>
           <img src={val.img}/>
        </div>
      </div>
      </div>
      ) )} 
    </div>
  </div>
</section>
       
       
      
  )
}
