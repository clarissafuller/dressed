import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../../utils/queries";
import "./home.css";

import Header from "../../components/Header/index";

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache",
  });

  const matchupList = data?.matchups || [];
  const imageUrl =
    "https://media.istockphoto.com/id/864505242/photo/mens-clothing-and-personal-accessories.jpg?s=612x612&w=0&k=20&c=TaJuW3UY9IZMijRrj1IdJRwd6iWzXBlrZyQd1uyBzEY=";

  return (
    <>
      <Header />
      <div className="promotion-container">
        <p className="m-0">Refer a friend and get 20% off!</p>
      </div>
      <div className="large-pic-container">
        <div className="centered-button">
          <button type="button">NEW ARRIVALS</button>
        </div>
        <img src={imageUrl} alt="Large Pic" />
      </div>
    </>
  );
};

export default Home;
