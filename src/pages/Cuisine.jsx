import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom'; //useParams pulls out keyword from URL


function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=74db62d59a674bbc85356ed301f3b3e2&number=12&cuisine=${name}`
        );

        const recipes = await data.json();
        setCuisine(recipes.results);
    }

    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type);
    },[params.type]);

  return <Grid 
            animate={{opacity: 1}} 
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            >
        {cuisine.map((item) => {
            return (
              <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
                  <img src={item.image} alt={item.name} />
                  <h4>{item.title}</h4>
                </Link>
              </Card>
            );
        })}
    </Grid>
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    margin: 5rem;
   
`
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
    width: 100%;
    /* border-radius: 1rem; */
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Cuisine