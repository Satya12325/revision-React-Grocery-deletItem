import style from "./Grocery.module.css";

export default function GroceryList({ id, title, handleDelete }) {
  if (id === 0) {
    var Style = {
      display: "none"
    };
  }
  return (
    <div style={Style} className={style.divv}>
      <div>{id}.</div>
      <div>{title}</div>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}
