import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import Favbutton from "./Favbutton";

function Popular() {
  const [popular, setPopular] = useState([]);

  //useEffect automatically imports from React - running the getPupuler function only when the component is mounted
  useEffect(() => {
    getPopular();
  }, []);

  // fetch request to Spoonacular API to find random (popular) recipes.
  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=74db62d59a674bbc85356ed301f3b3e2&number=12`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <div>
      <Title>
        <h3>Popular Picks</h3>
      </Title>
      <Wrapper>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem",
            breakpoints: {
              1024: { perPage: 3, },
              767: { perPage: 2, },
              640: { perPage: 1, },
            },
            focus: "center",
            updateOnMove: true,
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    {/* <Favbutton></Favbutton> */}
                    <Gradient />
                   
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 600;
    font-size: 2rem;
    color: #715a45;
  }
`;

const Wrapper = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
`;
const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  /* border: 1px solid #dadcd9; */
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;

  img {
    /* border-radius: 1rem; */
    /* position: absolute; */
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    font-weight: 600;
    font-size: 1rem;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, 0%);
    color: #95ab8b;
    width: 100%;
    height: 50;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 
`;


const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100;
  background: linear-gradient(rgba(0, 0, 0, 0)), rgba(0, 0, 0, 0.5);
`;

export default Popular;
