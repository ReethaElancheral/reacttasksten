import { useState } from 'react'

import './App.css'
import img1 from '../src/assets/images/sphagatti.jpg';
import img2 from '../src/assets/images/chicken.jpg';
import img3 from '../src/assets/images/salad.jpg';
import img4 from '../src/assets/images/pancake.jpg';
import img6 from '../src/assets/images/smoothie.jpg';


const recipes = [
  {
    id: 1,
    title: 'Spaghetti Bolognese',
    image: img1,
    ingredients: ['Spaghetti', 'Minced Beef', 'Tomato Sauce', 'Onion', 'Garlic', 'Olive Oil'],
    instructions: 'Boil water in a large pot, add salt and spaghetti. In a pan, sauté chopped onions and garlic in olive oil until golden. Add minced beef and cook until browned. Pour in tomato sauce and let simmer for 15 minutes. Drain the pasta, mix with sauce, and serve hot with grated cheese.'
  },
  {
    id: 2,
    title: 'Chicken Curry',
    image: img2,
    ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk', 'Onion', 'Garlic', 'Ginger', 'Chili'],
    instructions: 'Heat oil in a pan, sauté chopped onion, garlic, ginger, and chili until fragrant. Add chicken pieces and sear on all sides. Stir in curry powder and mix well. Pour in coconut milk, bring to a boil, then simmer for 25–30 minutes until chicken is cooked through. Garnish with coriander and serve with rice.'
  },
  {
    id: 3,
    title: 'Veggie Salad',
    image: img3,
    ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Carrot', 'Olive Oil', 'Lemon Juice', 'Salt', 'Pepper'],
    instructions: 'Wash and chop all vegetables. Place in a large mixing bowl. In a small bowl, whisk together olive oil, lemon juice, salt, and pepper. Pour the dressing over the vegetables and toss until well coated. Chill before serving for a refreshing taste.'
  },
  {
    id: 4,
    title: 'Pancakes',
    image: img4,
    ingredients: ['Flour', 'Milk', 'Eggs', 'Baking Powder', 'Sugar', 'Butter'],
    instructions: 'In a bowl, mix flour, sugar, and baking powder. In another bowl, beat eggs and mix with milk. Combine wet and dry ingredients until smooth. Heat a non-stick pan, melt a bit of butter, and pour batter to form pancakes. Cook until bubbles form, flip and cook the other side. Serve with syrup or fruits.'
  },
  {
    id: 6,
    title: 'Fruit Smoothie',
    image: img6,
    ingredients: ['Banana', 'Strawberries', 'Greek Yogurt', 'Honey', 'Milk'],
    instructions: 'Combine banana, strawberries, Greek yogurt, honey, and milk in a blender. Blend until smooth and creamy. Adjust thickness by adding more milk if needed. Serve chilled in a tall glass. You can top with chia seeds or granola for extra nutrition.'
  },
];


function App() {
 
const [selected, setSelected] = useState(null);

  return (
    <div className="recipe-app">
      <h1>📖 Recipe Book</h1>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card" onClick={() => setSelected(recipe)}>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </div>
        ))}
      </div>

      {selected && (
        <div className="recipe-detail">
          <button className="btn close" onClick={() => setSelected(null)}>×</button>
          <h2>{selected.title}</h2>
          <img src={selected.image} alt={selected.title} className="detail-img" />
          <h4>Ingredients</h4>
          <ul>
            {selected.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h4>Instructions</h4>
          <p>{selected.instructions}</p>
        </div>
      )}
    </div>
  )
}

export default App
