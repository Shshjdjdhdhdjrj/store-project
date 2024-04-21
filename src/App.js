import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import FooterCard from "./FooterCard";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Helmet>
        <title>React Store</title>
        <meta name="description" content="Your description here" />
      </Helmet>
      <Header />
      <main className="main">
        <ProductGrid />
      </main>
      <FooterCard />
    </div>
  );
};

export default App;
