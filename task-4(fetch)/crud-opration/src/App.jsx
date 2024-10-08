import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import axios from "axios";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setCards(response.data.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Carousel />
      <Banner />
      <div className="card-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.body}
              image={`https://via.placeholder.com/150`}
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
