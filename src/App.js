import { useState } from "react";
import "./App.css";
import Table from "./Table";

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

  const unique = [...new Set(mainArray.map((item) => item.city))];

  console.log(unique);

  const key = 'category';

  const arrayUniqueByKey = [...new Map(mainArray.map(item =>
    [item[key], item])).values()];
  
  console.log(arrayUniqueByKey);

  return (
    <div className="App">
      {arrData.map((y) => {
        return (
          <table align="center">
            <thead>
              <tr>{y.toUpperCase()} :</tr>
            </thead>
            <tbody></tbody>
          </table>
        );
      })}
      Name : <input type="text" name="" />
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
      </table>
      {/* <Table /> */}
    </div>
  );
}

export default App;
