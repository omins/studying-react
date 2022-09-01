import { useState, useEffect, useCallback } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { FirebaseURL } from '../../FirebaseURL';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const fetchMealHandler = useCallback(async () => {
    try {
      const response = await fetch(`${FirebaseURL}/meals.json`);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: data[key].id,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    fetchMealHandler();
  }, [fetchMealHandler]);

  return (
    <section style={{ maxWidth: '60rem', margin: '0 auto' }}>
      <Card>
        <ul className={classes.meals}>
          {meals.map(el => (
            <MealItem
              key={el.id}
              id={el.id}
              name={el.name}
              desc={el.description}
              price={el.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
