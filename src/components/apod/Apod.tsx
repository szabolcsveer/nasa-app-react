import React, { useEffect, useState } from "react";
import "./Apod.scss";
const API_KEY = process.env.REACT_APP_NASA_API_KEY;

export interface AstronomyPictureOfTheDay {
  date: Date;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

function Apod() {
  const [apod, setApod] = useState<AstronomyPictureOfTheDay | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
        {
          method: "GET",
          headers: { get: "X-RateLimit-Remaining" },
        }
      );
      const data = await res.json();
      setApod(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="title">{apod?.title}</h1>
      <section className="section">
        {apod?.media_type === "image" ? (
          <img className="image" src={apod?.url} alt="astronomy_picture_of_the_day" />
        ) : (
            <video src={apod?.url}></video>
          )}
        <p className="explanation">{apod?.explanation}</p>
      </section>
    </div>
  );
}

export default Apod;
