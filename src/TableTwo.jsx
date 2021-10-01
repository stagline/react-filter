import React, { useEffect, useState } from "react";

export default function TableTwo() {
  const [filterState, setFilterState] = useState({
    columns: [],
    name: "",
    city: [],
    category: [],
    type: [],
    active: [],
  });

  let mainArray = [
    {
      id: 1,
      name: "foo",
      city: "dallas",
      category: "one",
      type: "A",
      active: "FALSE",
      //   state: "guj",
    },
    {
      id: 2,
      name: "bar",
      city: "dallas",
      category: "one",
      type: "B",
      active: "FALSE",
      //state: "guj"
    },
    {
      id: 3,
      name: "jim",
      city: "san francisco",
      category: "one",
      type: "B",
      active: "TRUE",
      //state: "raj"
    },
    {
      id: 4,
      name: "jane",
      city: "denver",
      category: "two",
      type: "C",
      active: "FALSE",
      //state: "mah"
    },
  ];

  const handleCity = (e) => {
    let arr = filterState.city;
    if (e.target.checked) {
      if (!arr.indexOf(e.target.value) > -1) {
        arr.push(e.target.value);
        setFilterState({
          ...filterState,
          city: arr,
        });
      }
    } else {
      if (arr.indexOf(e.target.value) > -1) {
        arr.splice(arr.indexOf(e.target.value), 1);
        setFilterState({
          ...filterState,
          city: arr,
        });
      }
    }
  };
  const handleCategory = (e) => {
    let arr = filterState.category;
    if (e.target.checked) {
      if (!arr.indexOf(e.target.value) > -1) {
        arr.push(e.target.value);
        setFilterState({
          ...filterState,
          category: arr,
        });
      }
    } else {
      if (arr.indexOf(e.target.value) > -1) {
        arr.splice(arr.indexOf(e.target.value), 1);
        setFilterState({
          ...filterState,
          category: arr,
        });
      }
    }
  };
  const handleType = (e) => {
    let arr = filterState.type;
    if (e.target.checked) {
      if (!arr.indexOf(e.target.value) > -1) {
        arr.push(e.target.value);
        setFilterState({
          ...filterState,
          type: arr,
        });
      }
    } else {
      if (arr.indexOf(e.target.value) > -1) {
        arr.splice(arr.indexOf(e.target.value), 1);
        setFilterState({
          ...filterState,
          type: arr,
        });
      }
    }
  };

  const handleActive = (e) => {
    let arr = filterState.active;
    if (e.target.checked) {
      if (!arr.indexOf(e.target.value) > -1) {
        arr.push(e.target.value);
        setFilterState({
          ...filterState,
          active: arr,
        });
      }
    } else {
      if (arr.indexOf(e.target.value) > -1) {
        arr.splice(arr.indexOf(e.target.value), 1);
        setFilterState({
          ...filterState,
          active: arr,
        });
      }
    }
  };

  const city = [...new Set(mainArray.reduce((a, c) => [...a, c.city], []))];
  const cat = [...new Set(mainArray.reduce((a, c) => [...a, c.category], []))];
  const type = [...new Set(mainArray.reduce((a, c) => [...a, c.type], []))];
  const active = [...new Set(mainArray.reduce((a, c) => [...a, c.active], []))];

  return (
    <div>
      City :{" "}
      {city.map((c) => (
        <>
          <input
            type="checkbox"
            value={c}
            onChange={(e) => handleCity(e)}
          ></input>
          {c}
        </>
      ))}
      <br></br>
      Cat :{" "}
      {cat.map((c) => (
        <>
          <input
            type="checkbox"
            value={c}
            onChange={(e) => handleCategory(e)}
          ></input>
          {c}
        </>
      ))}
      <br></br>
      type :{" "}
      {type.map((c) => (
        <>
          <input
            type="checkbox"
            value={c}
            onChange={(e) => handleType(e)}
          ></input>
          {c}
        </>
      ))}
      <br></br>
      active :{" "}
      {active.map((c) => (
        <>
          <input
            type="checkbox"
            value={c}
            onChange={(e) => handleActive(e)}
          ></input>
          {c}
        </>
      ))}
      <br></br>
      <br></br>
      Name :
      <input
        type="text"
        onChange={(e) =>
          setFilterState({ ...filterState, name: e.target.value })
        }
      />
      <br></br>
      <br></br>
      <table border="5px" align="center">
        <thead>
          <td>ID</td>
          <td>Name</td>
          <td>City</td>
          <td>Category</td>
          <td>Type</td>
          <td>Status</td>
        </thead>
        <tbody>
          {mainArray
            .filter(
              (item) =>
                (item.name.includes(filterState.name) ||
                  filterState.name == "") &&
                (filterState.city.includes(item.city) ||
                  filterState.city.length == 0) &&
                (filterState.category.includes(item.category) ||
                  filterState.category.length == 0) &&
                (filterState.type.includes(item.type) ||
                  filterState.type.length == 0) &&
                (filterState.active == item.active || filterState.active == "")
            )
            .map((item, i) => {
              return (
                <>
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>{item.category}</td>
                    <td>{item.type}</td>
                    <td>{item.active}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
