import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  //useEffect automatically imports from React - running the getPupuler function only when the component is mounted
  useEffect(() => {
    getPupular();
  }, []);

  //store in local storage to avoid fetching the API constantly
  const getPupular = async () => {
    const check = localStorage.getItem("popular"); //checking to see if popular is saved in local storage
    if (check) {
      //if saved, perfect do not fetch the API any more, but if not save go ahead and fetch
      setPopular(JSON.parse(check));
      // fetch request to Spoonacular API to find random (popular) recipes.
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey={ADD YOUR OWN API KEY HERE UNTIL WE SAVE THEM ELSEWHERE -DELETE CURLY BRACKETS}2&number=9`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipies));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <h3 className="flex text-cbrown text-lg mt-4">Popular Picks</h3>

      <Splide
        options={{
          perPage: 5, //how many cards we want to display on the carusel
          arrow: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={recipe.image} alt={recipe.title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2"></div>
                  <p className="text-gray-700 text-base">{recipe.title}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Save Recipie
                  </span>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}



export default Popular;
