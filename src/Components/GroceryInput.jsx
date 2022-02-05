import { useState } from "react";
import style from "./Grocery.module.css";
export default function GroceryInput({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    onAdd(text);
    setText("");
  };
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add your Grocery"
      />
      <button className={style.button} onClick={handleClick}>
        Add
      </button>
    </>
  );
}
