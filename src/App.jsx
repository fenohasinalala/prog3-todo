import { useState } from "react";
import Items from "./Items";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [toDos, setToDos] = useState([]);
  const [dones, setDones] = useState([]);

  const doneElement = (id) => {
    const toDosCopy = [...toDos];
    const toDosUpdate = toDosCopy.filter((f) => f.id !== id);
    const toAdd = toDosCopy.filter((f) => f.id === id);
    setToDos(toDosUpdate);
    setDones([...dones, ...toAdd]);
  };
  const [newItem, setNewItem] = useState("");

  const addItem = (ItemToAdd) => {
    const toDosCopy = [...toDos];
    toDosCopy.push(ItemToAdd);
    setToDos(toDosCopy);
  };

  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nom = newItem;
    const id = uuidv4();
    const isComplet = false;
    //const id = "" + Date.now;

    if (nom.length > 0) {
      const toAdd = { id, nom, isComplet };
      addItem(toAdd);
      setNewItem("");
    }
  };

  return (
    <div className="App">
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          placeholder="Ajouter un Item"
          onChange={handleChange}
        />
      </form>
      <div className="content">
        <div className="list">
          <h1>TASK</h1>
          <ul>
            {toDos.map((item) => {
              return (
                <Items
                  itemInfo={item}
                  actionClick={() => doneElement(item.id)}
                  key={item.id}
                />
              );
            })}
          </ul>
        </div>
        <div className="list">
          <h1>DONE</h1>
          <ul>
            {dones.map((item) => {
              return (
                <Items
                  itemInfo={item}
                  actionClick={() => doneElement(item.id)}
                  key={item.id}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
