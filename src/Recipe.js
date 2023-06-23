import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, calories, image, ingredients, dishType}) => {
    return (
            <div className={style.recipe}>
            <h1 className={style.h1}>{title}</h1>
            <p className={style.p}>Dish Type: {dishType}</p>
            <h3>Ingredients</h3>
            <ol>
                {ingredients.map(ingredient => (
                    <li className={style.li}>{ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image} src={image} alt="" />
        </div>
        
    );
}

export default Recipe;