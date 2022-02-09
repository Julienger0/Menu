import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './Data'
import './style.css'

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
    if (category === 'all') {
      setMenuItems(items)
      return;
    }
  }

  return (
    <div className="content">

      <h2 className='title'>Our Menu</h2>


      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
