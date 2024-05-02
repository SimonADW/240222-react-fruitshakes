import React, { Children, createContext, useEffect, useState } from "react";

const fruitContext = createContext();

const FruitsProvider = ({children}) => {
  const [fruitList, setFruitList] = useState([]);

  const fetchFruits = async () => {
    try {
      const response = await fetch("http://localhost:4000/");
      const data = await response.json();
	    const sortedFruits = data.sort((a, b) => a.name.localeCompare(b.name))
      setFruitList(sortedFruits);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=> {
	fetchFruits();
  }, [])

  return (
    <fruitContext.Provider value={{fruitList, setFruitList}}>
      {children}
    </fruitContext.Provider>
  );
};

export {FruitsProvider, fruitContext};
