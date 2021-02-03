import React, { useEffect, useState } from "react";

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

  return <div>{apod?.explanation}</div>;
}

export default Apod;
