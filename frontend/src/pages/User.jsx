import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Account from "../components/Account";
import { useDispatch } from "react-redux";
import { getUserInfoAsync } from "../../redux/userActions";


export default function User() {
const dispatch = useDispatch()
  useEffect (()=>{

    dispatch (getUserInfoAsync())
  })
  return (
    <div className="Page-bg">
      <Nav />

      <div className="main bg-dark">
        <Header />

        <Account
          title={"Argent Bank Checking (x8349)"}
          amount={"$2,082.79"}
          description={"Available Balance"}
        />
        <Account
          title={"Argent Bank Savings (x6712)"}
          amount={"$10,928.42"}
          description={"Available Balance"}
        />
        <Account
          title={"Argent Bank Credit Card (x8349)"}
          amount={"$184.30"}
          description={"Current Balance"}
        />
      </div>
      <Footer />
    </div>
  );
}
