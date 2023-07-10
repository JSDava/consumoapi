
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
export default function Result() {
        
            const CardDrink = ({ drink }) => {
    return (
      <div className="text-white">
        <div>
          <img
            className="transition ease-in-out delay-200 hover:scale-110 highlight-border w-full font-bold  h-72 object-cover rounded-xl border"
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
          />
          <h1 className="font-bold  py-2 px-10 rounded-xl border mt-4">
            {drink.strDrink}
          </h1>
  
          <ul className="list-decimal  py-2 px-10 ">
            {[...Array(15)].map((_, index) => {
              const ingredient = drink[`strIngredient${index + 1}`];
              return ingredient && <li key={index}>{ingredient}</li>;
            })}
          </ul>
  
          <p className="">{drink.strInstructionsES}</p>
        </div>
      </div>
    );
  };
        
    

}
