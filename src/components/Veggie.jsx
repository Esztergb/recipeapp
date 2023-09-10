import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";



function Veggie() {
 const [veggie, setVeggie] = useState([]);

 //useEffect automatically imports from React - running the getPupuler function only when the component is mounted
 useEffect(() => {
   getVeggie();
 }, []);

 // fetch request to Spoonacular API to find random (veggie) recipes.
 const getVeggie = async () => {
   const check = localStorage.getItem("veggie");

   if (check) {
     setVeggie(JSON.parse(check));
   } else {
     const api = await fetch(
       `https://api.spoonacular.com/recipes/random?apiKey=74db62d59a674bbc85356ed301f3b3e2&number=12&tags=vegetarian`
     );
     const data = await api.json();
     localStorage.setItem("veggie", JSON.stringify(data.recipes));
     setVeggie(data.recipes);
     console.log(data.recipe)
   }
 };




  return (
    <div> 
      <Title>
      <h3 className="#715a45">Vegetarian Picks</h3>
      </Title>
      <Wrapper>
       

        <Splide
          options={{
            perPage: 5,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
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
  min-height: 15rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  /* border: 1px solid #dadcd9; */
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;

  img {
    /* border-radius: 2rem; */
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
    height: 40;
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

export default Veggie;
