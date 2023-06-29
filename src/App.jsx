import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import Title from "./Title";
import items from "./data";

import WhatsAppButton from "./WhatsAppButton";
import InstaAppButton from "./Instagram";

const allCategories = [
  "Tüm Ürünler",
  ...new Set(items.map((item) => item.category)),
];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "Tüm Ürünler") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Köşem Market & Büfe" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
        <WhatsAppButton />
        <InstaAppButton />
      </section>
    </main>
  );
}

export default App;
