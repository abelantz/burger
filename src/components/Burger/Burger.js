import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            }); // [,] Metoda per me kthy objectin ne array prej state ingredients
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

        if(transformedIngredients.length === 0){
            transformedIngredients = <p>çka pi qet</p>
        }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
           {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}
export default burger;