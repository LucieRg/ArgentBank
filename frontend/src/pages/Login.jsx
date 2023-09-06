import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Form from "../components/Form";

function Login() {
  return (
    <div className="Page-bg">
      <Nav />
      <main className="main bg-dark">
        <Form />
      </main>

      <Footer />
    </div>
  );
}
export default Login;
