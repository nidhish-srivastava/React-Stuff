import React, { useState } from "react";

const arr = ["play cricket", "play video game", "read book"];

//* 1 -> Creaate a checkbox where where wahtever the user checks,those items are displayed,if unchecks then removed
//* 2 -> Also show a delete button inside the list,which deletes the item from its original list(not from the new list that we rendered)

const CheckBox2 = () => {
  const [array, setFilteredArray] = useState(arr);
  const [checkedItem, setCheckedItem] = useState("");
  const [newArray, setNewArray] = useState([]);
  const changeHandler = (e) => {
    const item = e.target.value;
    const includes = newArray.includes(item);
    includes
      ? setNewArray((prev) => prev.filter((e) => e != item))
      : setNewArray((e) => [...e, item]);
  };
  const filterOriginalList = (e) => {
    setFilteredArray((prev) => prev.filter((input) => input !== e));
    setNewArray((prev) => prev.filter((input) => input !== e));
  }
  return (
    <div>
      {array.map((e) => (
        <div>
          {/* <input type="checkbox" value={e} onChange={()=> checkedItem ==e ? "" : setCheckedItem(e)} id={e}/> */}
          <input type="checkbox" value={e} onChange={changeHandler} id={e}/>
          {/* BUG --> IF WE USE NAME ATTRIBUTE,then if we remove the 2nd item which was selected(3rd wasnt),then after removal,3rd becomes checked */}
          <label htmlFor={e}>{e}</label>
        </div>
      ))}
      {newArray.map((e) => (
        <h2>
          {e} <button onClick={() => filterOriginalList(e)}>Delete</button>{" "}
        </h2>
      ))}

    </div>
  );
};

export default CheckBox2;
