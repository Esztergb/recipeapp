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

  // fetch request to Spoonacular API to find random (popular) recipes.
  const getPupular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=74db62d59a674bbc85356ed301f3b3e2&number=15`
    );

    const data = await api.json();

    setPopular(data.recipes);
  };

  return (
    <div className="flex flex-col items-center ">
      
        <h3 className="flex text-cbrown text-lg mt-4">Popular Picks</h3>

        <Splide
          options={{
            perPage: 4, //how many cards we want to display on the carusel 
            arrow: false, 
            pagination: false,
            drag:'free',
           }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    className="w-full"
                    src={recipe.image}
                    alt={recipe.title}
                  />
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
