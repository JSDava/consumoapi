import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [letter, setLetter] = useState("z");
  const [word, setWord] = useState("Margarita");

  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);

  const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
  const basURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${word}`;

  useEffect(() => {
    setLoading(true);
    setCocktails([]);
    axios
      .get(baseURL)
      .then((results) => {
        if (results.data.drinks) setCocktails(results.data.drinks);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  }, [letter]);

  useEffect(() => {
    setLoading(true);
    setCocktails([]);
    axios
      .get(basURL)
      .then((results) => {
        if (results.data.drinks) setCocktails(results.data.drinks);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  }, [word]);

  const search = (event) => {
    setLetter(event.target.value);
  };

  const change = (event) => {
    setWord(event.target.value);
  };

  const contaStyle = {
    textAlign: "center",
  };

  const contanerStyle = {
    background: "radial-gradient(black, black)",
  };

  return (
    <div className="App " style={contanerStyle}>
      <div>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Menu Desplegable
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>Bebidas</MenuItem>
          <MenuItem onClick={handleClose}>Aperitivo</MenuItem>
          <MenuItem onClick={handleClose}>Plato Fuerte</MenuItem>
          <MenuItem onClick={handleClose}>Comida Rapida</MenuItem>
          <MenuItem onClick={handleClose}>Postre</MenuItem>
        </Menu>
      </div>
      <div>
        <p className="h-100">. </p>
        <p className="flex font-extrabold  justify-center uppercase text-white">
          Bebidas
        </p>
      </div>

      <div className="flex aling justify-between">
        <div className="w-full h-full py-10  ">
          <input
            className="highlight-border font-bold text-xl uppercase  px-9 rounded-xl text-black"
            style={contaStyle}
            placeholder="Buscar por letra"
            maxLength={1}
            value={letter}
            onChange={search}
          />
        </div>

        <div className="w-full h-full py-10  ">
          <input
            className="highlight-border font-bold text-xl uppercase  px-9 rounded-xl text-black"
            style={contaStyle}
            placeholder="Buscar por palabra"
            maxLength={12}
            value={word}
            onChange={change}
          />
        </div>
      </div>

      {loading ? (
        <h1>Cargando....</h1>
      ) : (
        <div className="grid grid-cols-4 gap-9 p-8">
          {cocktails.map((drink, index) => (
            <CardDrink key={index} drink={drink} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;


const CardDrink = ({ drink }) => {
  return (
    <div className="text-white">
      <div>
        <img
          className="transition ease-in-out delay-200 hover:scale-110 highlight-border w-full font-bold  h-72 object-cover rounded-xl border"
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          onClick={drink.strDrink}
        />
        <h1 className="font-bold  py-2 px-10 rounded-xl border mt-4">
          {drink.strDrink}
        </h1>

      </div>
    </div>
  );
};