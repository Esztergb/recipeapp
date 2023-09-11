import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

function Searched() {

    const [searchedRecipies, setSearchedRecipies] = useState([]);
    let params = useParams();
    const getSearchedRecipies = async (name) => {
       const data = await fetch(
         `https://api.spoonacular.com/recipes/complexSearch?apiKey=74db62d59a674bbc85356ed301f3b3e2&number=12&query=${name}`
       );
       const recipes = await data.json();
       setSearchedRecipies(recipes.results);
     };

    useEffect(() => {
        getSearchedRecipies(params.search);
    },[params.search])

  return (
    <Grid>
        {searchedRecipies.map((item) => {
            return (
                <Card key={item.id}>
                   <Link to={"/recipe/" + item.id}>
                    <img src={item.image} alt=""/>
                    <h4>{item.title}</h4>
                  </Link>
                </Card>
            )
        })}


    </Grid>
  )
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin: 5rem;
`;
const Card = styled.div`
  min-height: 20rem;
  border-radius: 1rem;
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
export default Searched