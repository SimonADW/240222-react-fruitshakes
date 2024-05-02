import React from 'react';
import styles from "./ShakesPage.module.css"
import FruitShakesList from '../components/FruitShakesList/FruitShakesList';

const ShakesPage = () => {
	return <div className={styles.shakesPage_main_container}>
		<FruitShakesList />
		
	</div>;
};

export default ShakesPage;
