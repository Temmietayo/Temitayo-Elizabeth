import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RSignup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
      gender: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

    
  handleChange = event => {
    const state = { ...this.state };
    state[event.target.id] = event.target.value;
      this.setState(state);
    };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
    render() {
        return (
          <div>
            <div className="flex flex-row place-content-center w-screen mt-24">
              <div className="flex-col w-1/2 ">
                <h1 className="font-bold text-4xl text-left m-20 mb-0">Sign up as a Researcher</h1>
                <h3 className="font-light text-left mx-20 mt-4 text-gray-500 text-base">
                  Upload digital citizenship material, view teachers' lesson notes and review class sessions. 
                </h3>
                <button className="mx-20 mt-6 font-sans w-48 h-16 bg-purple-100 text-purple-700 rounded-3xl text-base ">Sign Up</button>
              </div>
              <div className="flex flex-col w-1/2">
                <form className="h-screen mt-20 ml-10">
                  <section className="flex-row w-full p-4">
                    <input type="text" placeholder="First Name" id="firstName" onChange={this.handleChange} className="font-sans mx-1 p-2 w-64 h-16 border border-gray-200 rounded-3xl text-sm"/>
                    <input type="text" placeholder="Last Name" id="lastName" onChange={this.handleChange} className="font-sans mx-1 p-2 w-64 h-16 border border-gray-200 rounded-3xl text-sm" />
                  </section>
                  <section className="flex-row p-4">
                    <input type="email" placeholder="Email Address" id="email" onChange={this.handleChange} className="font-sans mx-1 p-2 w-4/5 h-16 border border-gray-200 rounded-3xl text-sm"/>
                  </section> 
                  <section className="flex-row p-4">
                    <input type="number" placeholder="Mobile Number" id="mobileNumber" onChange={this.handleChange} className="mx-1 p-2 w-4/5 h-16 border border-gray-200 rounded-3xl text-sm"/>
                  </section>
                  <section className="flex-row p-4">
                    <label className="flex items-center mr-2 flex-no-wrap" htmlFor="male">
                      <input type="radio" name="gender" value="male" id="male" onChange={this.handleChange} className=" font-sans p-2 mx-1 w-64 h-16 border border-gray-200 rounded-3xl text-sm text-gray-400" />
                        <p className="pl-2 text-sm">Male</p>
                    </label>
                    <label className="flex items-center mr-2 flex-no-wrap" htmlFor="female">
                      <input type="radio" name="gender" value="female" id="female" onChange={this.handleChange} className=" font-sans p-2 mx-1 w-64 h-16 border border-gray-200 rounded-3xl text-sm text-purple-700 " />
                    <p className="text-sm pl-2">Female</p>
                    </label>
                  </section>
                  <section className="flex-row p-4">
                    <input type="password" placeholder="Choose Password" id="password" onChange={this.handleChange} className=" font-sans mx-2 p-2 w-4/5 h-16 border border-gray-200 rounded-3xl text-sm"/>
                  </section>
                  <Link to="/researcher/cont-signup">
                  <button className="justify-end bg-purple-600 font-sans w-48 h-16 text-purple-100 rounded-3xl text-base">Continue</button>
                </Link>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default RSignup;