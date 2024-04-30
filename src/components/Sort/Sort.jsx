import React, { useContext, useState } from "react";
import { fruitContext } from "../../context/FruitsProvider";
import styles from "./Sort.module.css"

const Sort = () => {
  const { fruitList, setFruitList } = useContext(fruitContext);
  const [ selectedOption, setSelectedOption ] = useState("all");

  const handleSortChange = (e)=> {
	const selectedValue = e.target.value;	
	setSelectedOption(selectedValue);

	let sortedFruits = [...fruitList]
	switch (selectedValue) {
		case "highest-calories":
			sortedFruits.sort((a, b)=> b.nutritions.calories - a.nutritions.calories);
			break;
		case "lowest-fat":
			sortedFruits.sort((a, b)=> a.nutritions.fat - b.nutritions.fat);
			break;
		case "lowest-sugar":
			sortedFruits.sort((a, b)=> a.nutritions.sugar - b.nutritions.sugar);
			break;
		case "lowest-carbs":
			sortedFruits.sort((a, b)=> a.nutritions.carbohydrates - b.nutritions.carbohydrates);
			break;
		case "highest-protein":
			sortedFruits.sort((a, b)=> b.nutritions.protein - a.nutritions.protein);
			break;
		default:
			sortedFruits.sort((a, b) => a.name.localeCompare(b.name));
			break;
	}
	setFruitList(sortedFruits);
}

console.log(fruitList);
  
  return (
	<>
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

		<div>
			<ul>
				<li className={styles.listHeader}>
					<span>Name</span>
					<span>Calories</span>
					<span>Fat</span>
					<span>Sugar</span>
					<span>Carbs</span>
					<span>Protein</span>
				</li>
				{fruitList.map((shake)=> {
					return <li className={styles.listHeader}>
						<span>{shake.name}: </span>
						<span>{shake.nutritions.calories}</span>
						<span>{shake.nutritions.fat}</span>
						<span>{shake.nutritions.sugar}</span>
						<span>{shake.nutritions.carbohydrates}</span>
						<span>{shake.nutritions.protein}</span>						
						</li>
				} )}
			</ul>
		</div>
	</>
  );
};

export default Sort;
