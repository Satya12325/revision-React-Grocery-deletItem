import { useState } from "react";
import GrceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";
import { v4 as uuid } from "uuid";
export default function Grocery() {
  const [state, setStaet] = useState([
    {
      title: "default",
      id: 0
    }
  ]);

  const handleAdd = (title) => {
    if (title === "") {
      return false;
    }
    const payload = {
      title: title,
      id: state.length
    };
    setStaet([...state, payload]);
  };
  const handleDelete = (id) => {
    let data = state.filter((item) => item.id !== id);
    setStaet(data);
  };

  return (
    <>
      <GrceryInput onAdd={handleAdd} />

      {state.map((item) => {
        return (
          <GroceryList
            key={item.id}
            id={item.id}
            title={item.title}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
}
