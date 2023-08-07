import { useEffect, useState } from "react";

const API = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  }).then((res) => res.json());
};

function TodayTemp() {
  const url = new URL(" http://api.openweathermap.org/data/2.5/weather  ");
  const params = new URLSearchParams(url.search);

  params.append("q", "5958725e630d014b364c66a9b67d8929");
  params.append("appid", "Moscow");
  params.append("lang", "ru");
  params.append("units", "metric");

  const [temp, setTemp] = useState({});

  useEffect(() => {
    async () => {
      API(url)
        .then((data) => {
          setTemp(data);
        })
        .catch((error) => {
          console.log(`Что-то пошло не так: ${error}`);
        });
    };
  }, []);

  return JSON.stringify(temp);
}

export default TodayTemp;
