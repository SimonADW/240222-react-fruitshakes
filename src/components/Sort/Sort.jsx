import React, { useContext, useState } from "react";
import { fruitContext } from "../../context/FruitsProvider";
import styles from "./Sort.module.css"

const Sort = () => {
  const { fruitList, setFruitList } = useContext(fruitContext);
  const [selectedOption, setSelectedOption] = useState("all");

  const handleSortChange = (e)=> {
	const selectedValue = e.target.value;
	setSelectedOption(selectedValue);

	let sortedFruits = [...fruitList]
	switch (selectedOption) {
		case "highest-calories":
			sortedFruits.sort((a, b)=> a.nutrition.calories - b.nutrition.calories);
		case "lowest-fat":
			sortedFruits.sort((a, b)=> a.nutrition.fat - b.nutrition.fat);
		case "lowest-sugar":
			sortedFruits.sort((a, b)=> a.nutrition.sugar - b.nutrition.sugar);
		case "lowest-carbs":
			sortedFruits.sort((a, b)=> a.nutritions.carbohydrates - b.nutritions.carbohydrates);
		case "highest-protein":
			sortedFruits.sort((a, b)=> a.nutrition.protein - b.nutrition.protein);
		default:
			sortedFruits.sort((a, b) => a.name.localeCompare(b.name));
	}
	setFruitList(sortedFruits);
  }
  console.log(fruitList);

  return (
    <div className={styles.sort_container}>
      <label htmlFor="sort-options">Sort by:</label>
      <select onChange={handleSortChange} value={selectedOption} name="sort-options">
        <option value="all">All</option>
        <option value="highest-calories">Highest Calories</option>
        <option value="lowest-fat">Lowest Fat</option>
        <option value="lowest-sugar">Lowest Sugar</option>
        <option value="lowest-carbs">Lowest Carbs</option>
        <option value="highest-protein">Highest Protein</option>
      </select>
    </div>
  );
};

export default Sort;
