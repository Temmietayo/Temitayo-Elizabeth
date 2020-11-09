import React, { Component } from 'react';


export default class RSignin extends Component {
    render() {
        return (
            <div>
            <div className="flex flex-col w-1/2 m-auto mt-40 justify-center">
               <div className=""> <h1 className="font-bold text-4xl text-center">Sign in to continue creating as a Researcher</h1></div>
              <div className="flex flex-col w-1/2 m-auto text-center">
                <form className="">
                    <div className="flex-row">
                        <input type="text" placeholder="Email Address" className="p-4 m-2 font-sans w-full h-16 border border-gray-200 rounded-3xl text-sm"/>
            
                    </div>
                    <div className="flex-row justify-center">
                        <input type="text" placeholder="Choose Password" className="p-4 m-2 font-sans w-full h-16 border border-gray-200 rounded-3xl text-sm"/>
                    </div>
                    <div className="flex-row m-2">
                        <button className="font-sans w-1/2 h-16 bg-purple-100 text-purple-700 rounded-3xl text-base ">Register</button>
                        <button className="font-sans w-1/2 h-16 bg-purple-100 text-purple-700 rounded-3xl text-base ">Sign Up</button>  
                    </div>
                </form>
              </div>
            </div>
          </div>
        )
    }
}
