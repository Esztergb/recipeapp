import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom'; //useParams pulls out keyword from URL
import { getCuisine } from "../api/spoonacular";
import RecipeCard from "../components/RecipeCard";

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const params = useParams();

     useEffect(() => {
       getCuisine(params.type)
       .then((recipes) => {
        setCuisine(recipes)
       })
       .catch((error) => {
        console.error(error)
       })
       console.log(params.type);
     }, [params.type]);


  return <Grid 
            animate={{opacity: 1}} 
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            >
        {cuisine.map((item) => {
            return (
              <RecipeCard key={item.id} image={item.image} title={item.title} id={item.id} />
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
export default Cuisine