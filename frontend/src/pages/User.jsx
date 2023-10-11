import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Account from "../components/Account";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoAsync } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

export default function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    // Appel à l'action asynchrone pour obtenir les informations de l'utilisateur
    dispatch(getUserInfoAsync());

    // Vérification de l'authentification après que les données de l'utilisateur ont été chargées
    if (!isAuthenticated) {
      navigate("/login"); // Redirigez vers la page de connexion si l'utilisateur n'est pas authentifié
    }
  }, [dispatch, navigate, isAuthenticated]);

  const accountsData = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  return (
    <div className="Page-bg">
      <Nav />

      <div className="main bg-dark">
        <Header />

        {accountsData.map((account, index) => (
          <Account
            key={index}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
