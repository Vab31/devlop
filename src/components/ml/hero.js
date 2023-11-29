import React from 'react'
import ml from '../../img/ml.png'
import './hero.css'
import Service from './Service'
import Prize from './price'

export default function Heroml() {
  return (
    <div>
    <section className="text-gray-600 body-font  bg-slate-300">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src={ml}/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Program Overview
          <br className="hidden lg:inline-block "/> <p className='title-font sm:text-4xl text-2xl  font-medium text-gray-900 '>Mode: Live Virtual Classroom</p>
        </h1>
        <p className="mb-8 text-xl text-black">
        In this program you’ll be taught to use all the tools required and identify trends, patterns and gain insights from raw data as required in the industry. You will leave this program having learnt how to validate and support big business decisions with facts and figures. </p>
      
      </div>
    </div>
  </section>
  <Service/>
  <section className="text-white m-10 md:ml-48 md:mr-40 bg-black body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-5xl text-3xl font-medium title-font mb-4 text-white">Get in Touch With Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">With our guidence and support, you can chart your own course and shine your own guiding star in your journey towards success</p> </div>
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex-grow w-full">
        <label for="full-name" className="leading-7 text-sm text-white">Full Name</label>
        <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative flex-grow w-full">
        <label for="phonenumber" className="leading-7 text-sm text-white">Phone Number</label>
        <input type="text" id="phonenumber" name="phonenumber" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
    </div>
  </div>
</section>


<Prize/>
  </div>
  )
}
