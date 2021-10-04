import { useState } from "react";

const Dynamic = () => {
  const [filterState, setFilterState] = useState({
    columns: [],
    name: "",
    city: [],
    category: [],
    type: [],
    active: [],
  });

  const maicolumns = [
    { path: "id", name: "ID" },
    { path: "name", name: "Name" },
    { path: "city", name: "City" },
    { path: "category", name: "Category" },
    { path: "type", name: "Type" },
    { path: "active", name: "Active" },
  ];

  const maidata = [
    {
      id: 1,
      name: "foo",
      city: "dallas",
      category: "one",
      type: "A",
      active: "FALSE",
    },
    {
      id: 2,
      name: "bar",
      city: "dallas",
      category: "one",
      type: "B",
      active: "FALSE",
    },
    {
      id: 3,
      name: "jim",
      city: "san francisco",
      category: "one",
      type: "B",
      active: "TRUE",
    },
    {
      id: 4,
      name: "jane",
      city: "denver",
      category: "two",
      type: "C",
      active: "FALSE",
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
    console.log(arr);
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

  const city = [...new Set(maidata.reduce((a, c) => [...a, c.city], []))];
  const cat = [...new Set(maidata.reduce((a, c) => [...a, c.category], []))];
  const type = [...new Set(maidata.reduce((a, c) => [...a, c.type], []))];
  const active = [...new Set(maidata.reduce((a, c) => [...a, c.active], []))];

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
      <br />
      <br />
      Name :
      <input
        type="text"
        onChange={(e) =>
          setFilterState({ ...filterState, name: e.target.value })
        }
      />
      <table style={tableStyle}>
        <tbody>
          <tr>
            {maicolumns.map(({ path, name }) => (
              <th style={tdStyle} key={path}>
                {name}
              </th>
            ))}
          </tr>
          {maidata
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
            .map((rowData, id) => (
              <tr key={rowData[id]}>
                {maicolumns.map(({ path }) => (
                  <td style={tdStyle} key={path}>
                    {rowData[path]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dynamic;

const tableStyle = {
  border: "1px solid black",
  borderCollapse: "collapse",
};

const tdStyle = {
  border: "1px solid black",
};

// https://www.google.com/search?q=multiple+filter+in+javascript+github&oq=multiple+filter+in+javascript+github&aqs=chrome..69i57.9544j0j7&sourceid=chrome&ie=UTF-8
