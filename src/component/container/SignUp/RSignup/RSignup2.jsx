import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RSignup2 extends Component {
  constructor() {
    super();
    this.state = {
      university: "",
      country: "",
      state: "",
      address: "",
      area_of_speciality: "",

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
  }
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
                  <section className="flex-row p-4">
                  <input type="text" placeholder="Adekunle Ajasin University, Akungba" className="font-sans mx-1 p-2 w-4/5 h-16 bg-purple-100 placeholder-purple-500 border border-purple-600 rounded-3xl text-sm"/>
                            </section>
                            <section className="flex-row p-4">
                    <input type="text" placeholder="Select Country" className="font-sans mx-1 p-2 w-4/5 h-16 border border-gray-200 rounded-3xl text-sm"/>
                  </section>
                  <section className="flex-row p-4">
                    <input type="text" placeholder="Select State" className="font-sans mx-1 p-2 w-4/5 h-16 border border-gray-200 rounded-3xl text-sm"/>
                  </section> 
                  <section className="flex-row p-4">
                    <input type="text" placeholder="Address" className="mx-1 p-2 w-4/5 h-16 border border-gray-200 rounded-3xl text-sm"/>
                    </section>
                            <section className="flex-row p-4">
                    <input type="text" placeholder="Select Area Speciality" className="mx-1 p-2 w-4/5 h-16 border border-gray-200 rounded-3xl text-sm"/>
                </section>
                            
                  <section className="flex-row p-4">
                    <Link to="/">
                    <button type="text" className=" font-sans p-2 mx-1 w-64 h-16 bg-purple-200 text-purple-500 rounded-3xl text-sm text-gray-400">Previous</button>
                    </Link>
                      <Link to="/researcher/account-successful">
                    <button type="text" className=" font-sans p-2 mx-1 w-64 h-16 bg-purple-500 text-white rounded-3xl text-sm">Continue</button>
                </Link>
                </section>

                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default RSignup2;