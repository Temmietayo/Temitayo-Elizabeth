import React from "react";
import { Link } from "react-router-dom";
import csc from "country-state-city";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import intl from "./build/js/intlTelInput";
import "./build/css/intlTelInput.css";
import "./style.scss";
import exclude from "../../assets/images/Exclude.png";

import Spinner from "../../components/spinner";

class signup extends React.Component {
  constructor() {
    super();
    this.currentTab = 0;
    this.tab = null;
    this.state = {
      countries: csc.getAllCountries(),
      cStates: null,
      loading: false,
    };
    this.change = this.change.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.tab = document.getElementsByClassName("tab");
    this.showTab(this.currentTab);

    const input = document.querySelector("#telephone");
    intl(input, {});
  }

  showTab(n) {
    // This function will display the specified tab of the form ...
    if (this.tab) {
      this.tab[n].style.display = "block";
      // ... and fix the Previous/Next buttons:
      if (n === 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline-block";
      }
      if (n === this.tab.length - 1) {
        document.getElementById("nextBtn").innerHTML = "Submit";
      } else {
        document.getElementById("nextBtn").innerHTML = "Continue";
      }
    }
  }

  handleChange(event) {
    const state = { ...this.state };
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit(event) {
    const vm = this;
    vm.setState({ loading: true });
    event.preventDefault();
    const payload = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone,
      gender: this.state.gender,
      university: this.state.university,
      country: this.state.country,
      state: this.state.mystate,
      address: this.state.address,
      specialty: this.state.specialty,
    };
    const FBauth = firebase.auth();
    FBauth.createUserWithEmailAndPassword(payload.email, this.state.password)
      .then(() => {
        const user = firebase.auth().currentUser;
        firebase
          .firestore()
          .collection("researchers")
          .doc(user.uid)
          .set(payload)
          .then(() => {
            vm.setState({ loading: false });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  change(event) {
    this.setState({
      cStates: csc.getStatesOfCountry(event.target.value),
      country: csc.getCountryById(event.target.value).name,
    });
  }

  render() {
    return (
      <div className="flex relative h-screen w-full px-5 justify-between lg:px-40 cont">
        <div className="absolute bg-1 bottom-0 left-0">
          <img className="" src={gp3} alt="" />
        </div>
        <div className="absolute bg-2 top-0 right-0">
          <img className="" src={gp21} alt="" />
        </div>
        <div className="relative flex z-20 flex-col flex-no-wrap left-side-div">
          <div className="absolute bg-3">
            <img src={e8} alt="" />
          </div>
          <div>
            <img src={exclude} alt="logo" />
          </div>
          <div className="my-5">
            <p className="flex text-2xl font-bold">
              Sign up to start
              <br />
              creating like a researcher
            </p>
          </div>
          <div>
            <p className="text-xs">
              Upload digital citizenship materials, view teachers lesson notes
              and review classroom sessions
            </p>
          </div>
          <div>
            <Link className="btn-link" to="/signin">
              Sign in
            </Link>
          </div>
        </div>
        <div>
          <div>
            <form onSubmit={this.handleSubmit} action="">
              <div className="flex-col tab">
                <div className="flex">
                  <div className="form-group">
                    <input
                      name="firstname"
                      type="text"
                      placeholder="Firstname"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="lastname"
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Lastname"
                    />
                  </div>
                </div>
                <div className="form-group flex w-full">
                  <input
                    className="fullWidth"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group2 flex w-full">
                  <div className="special-input">
                    <input
                      className="fullWidth"
                      type="text"
                      name="phone"
                      id="telephone"
                      placeholder="Phone Number"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group2 flex w-full">
                  <div className="special-input justify-between">
                    <input
                      className="fullWidth"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Choose password"
                      onChange={this.handleChange}
                    />
                    <a
                      href="ss"
                      onClick={(e) => {
                        e.preventDefault();
                        const psh = document.getElementById("password");
                        if (psh.type === "password") {
                          psh.type = "text";
                        } else {
                          psh.type = "password";
                        }
                      }}
                    >
                      <img src={ps} alt="" />
                    </a>
                  </div>
                </div>
                <div className="flex radio-holder">
                  <div className="form-group">
                    <label
                      className="flex radio-label items-center mr-2 flex-no-wrap"
                      htmlFor="male"
                    >
                      <input
                        id="male"
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={this.handleChange}
                      />
                      <p className="pl-2 text-sm">Male</p>
                    </label>
                  </div>
                  <div className="form-group">
                    <label
                      className="flex radio-label items-center mr-2 flex-no-wrap"
                      htmlFor="female"
                    >
                      <input
                        id="female"
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={this.handleChange}
                      />
                      <p className="text-sm pl-2 plc">Female</p>
                    </label>
                  </div>
                  <div className="form-group">
                    <label
                      className="flex radio-label items-center mr-2 flex-no-wrap"
                      htmlFor="pnts"
                    >
                      <input
                        id="pnts"
                        type="radio"
                        name="gender"
                        value="pnts"
                        onChange={this.handleChange}
                      />
                      <p className="test-sm pl-2">PNTS</p>
                    </label>
                  </div>
                </div>
                <div className="form-group button-holder flex justify-end">
                  <button
                    type="button"
                    id="nextBtn"
                    onClick={(e) => {
                      e.preventDefault();
                      this.tab[this.currentTab].style.display = "none";
                      this.currentTab += 1;
                      this.showTab(this.currentTab);
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
              {/* Second Tab starts */}
              <div className="flex-col tab">
                <div className="form-group flex w-full">
                  <input
                    className="fullWidth"
                    type="text"
                    name="university"
                    placeholder="University"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group flex w-full">
                  <select name="country" onChange={this.change} id="country">
                    <option disabled>Select country</option>
                    {this.state.countries.map((value) => {
                      return (
                        <option
                          id={value.id}
                          key={value.id}
                          name={value.name}
                          value={value.id}
                        >
                          {value.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group flex w-full">
                  <select
                    name="mystate"
                    onChange={this.handleChange}
                    id="state"
                  >
                    <option disabled>Select state</option>
                    {this.state.cStates
                      ? this.state.cStates.map((value, index) => {
                        return (
                          <option id={index} value={value.name}>
                            {value.name}
                          </option>
                        );
                      })
                      : ""}
                  </select>
                </div>
                <div className="form-group flex w-full">
                  <input
                    className="fullWidth"
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group flex w-full">
                  <input
                    className="fullWidth"
                    name="specialty"
                    type="text"
                    placeholder="Area specialty"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group button-holder flex justify-between">
                  <button
                    type="button"
                    className="faded"
                    id="prevBtn"
                    onClick={(e) => {
                      e.preventDefault();
                      this.tab[this.currentTab].style.display = "none";
                      this.currentTab -= 1;
                      this.showTab(this.currentTab);
                    }}
                  >
                    Previous
                  </button>
                  <button
                    className="flex justify-center items-center"
                    type="submit"
                    id="finBtn"
                  >
                    <p className="pr-2">Finish Up</p>
                    <Spinner
                      display={this.state.loading}
                      height={20}
                      width={20}
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default signup;