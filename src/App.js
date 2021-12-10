import React, { useState } from "react";
import "./styles.css";

var Movies = {
  songs: [
    { Hobby: "Soniye", rating: " rating 4/5" },
    { Hobby: "sanam re", rating: "rating: 5/5" },
    { Hobby: "Tere bin", rating: "rating:5/5" },
    { Hobby: "sanu ek pal", rating: "rating: 2/5" }
  ],
  Food: [
    { Hobby: "Rasagulla", rating: "rating: 4/5" },
    { Hobby: "aampak", rating: "rating: 3/5" },
    { Hobby: "poha jalebi", rating: "rating: 2/5" },
    { Hobby: "Dal-Bati", rating: "rating: 5/5" }
  ],
  Trevel: [
    { Hobby: "maharastra", rating: "rating: 4/5" },
    { Hobby: "Raj-sthan", rating: "rating: 3/5" },
    { Hobby: "Himachal", rating: "rating: 5/5" },
    { Hobby: "up", rating: "rating: 3/5 " }
  ]
};

var movieknow = Object.keys(Movies);

export default function App() {
  const [Hobby, setmovie] = useState("songs");
  function genreClickHandler(genre) {
    setmovie(genre);
  }
  return (
    <div className="App">
      <h1> Know My Hobbys 😍</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Hobby. click down any to get started...{" "}
      </p>

      <div>
        {movieknow.map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingBlock: "0" }}>
          {Movies[Hobby].map((favorite) => (
            <li
              key={favorite}
              style={{
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {favorite.Hobby} </div>
              <div style={{ fontSize: "smallj" }}> {favorite.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
