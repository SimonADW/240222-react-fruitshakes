import {useState} from "react";
import fruitShakesData from "../../assets/data/fruitShakesData";
import FruitShake from "../FruitShake/FruitShake";
import styles from "./FruitShakesList.module.css"

const FruitShakesList = () => {
  const [fruitShakesDataList, setFruitShakesDataList] =
    useState(fruitShakesData);

  return (
    <div>
      <ul className={styles.shakes_main_container}>
        {fruitShakesDataList.map((shake) => {
          return <FruitShake key={shake.id} fruitShake={shake} />;
        })}
      </ul>
    </div>
  );
};

export default FruitShakesList;
