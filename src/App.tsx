import React, { useState, useContext } from 'react';
import Component, { Item } from "./components/Component";
import './App.css';

function App() {
  const items: Item[] = [
    {
      id: 1,
      title: "A nice sunset",
      imageUrl:
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 2,
      title: 'random',
      quote:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quam ea. Nisi nulla earum itaque, sapiente exercitationem, laudantium sunt fuga dolores repellendus, expedita dicta. Voluptates minima laboriosam odit reprehenderit magnam!",
    },
  ];

  return <Component items={items} />;
}

export default App;