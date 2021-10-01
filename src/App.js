import { useState } from "react";
import "./App.css";
import Dynamic from "./Dyanmic";
import TableTwo from "./TableTwo";
function App() {
  let mainArray = [
    {
      id: 1,
      name: "foo",
      city: "dallas",
      category: "one",
      type: "A",
      active: "FALSE",
      // state: "guj"
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

  let a = Object.keys(mainArray[0]);

  let arrData = a.filter(function (e) {
    return e !== "id";
  });
  arrData = arrData.filter(function (e) {
    return e !== "name";
  });
  console.log(arrData);

  const headers = Object.keys(mainArray[0]).map((header) => (
    <thead>{header}</thead>
  ));

  const city = [...new Set(mainArray.reduce((a, c) => [...a, c.city], []))];
  const cat = [...new Set(mainArray.reduce((a, c) => [...a, c.category], []))];
  const type = [...new Set(mainArray.reduce((a, c) => [...a, c.type], []))];
  const active = [...new Set(mainArray.reduce((a, c) => [...a, c.active], []))];

  console.log(city);
  console.log(cat);

  return (
    <div className="App">
      {/* City : {city.map((c) => c)}
      <br></br>
      Cat : {cat.map((c) => c)}
      <br></br>
      type : {type.map((c) => c)}
      <br></br>
      active : {active.map((c) => c)}
      <br></br> */}
      {/* {arrData.map((y) => {
        return (
          <table align="center">
            <thead>
              <tr>{y.toUpperCase()} :</tr>
            </thead>
            <tbody></tbody>
          </table>
        );
      })} */}
      {/* Name : <input type="text" name="" />
      <br></br>
      <table border="5px" align="center">
        <thead>
          <tr>
            {headers.map((value, index) => {
              return (
                <>
                  <th key={index}>{value}</th>
                </>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {mainArray.map((row) => (
            <tr>
              {Object.values(row).map((rowValue) => (
                <td>{rowValue}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
      <TableTwo />
      {/* <Dynamic /> */}
    </div>
  );
}

export default App;
