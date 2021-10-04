import React, { useState } from "react";

function New() {
  let mainArray = [
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

  const heading = Object.keys(mainArray[0]);
  console.log("heading", heading);

  let filteredAry = heading.filter(function (e) {
    return e !== "id" && e !== "name";
  });
  console.log("filteredAry", filteredAry);

  let mai = filteredAry.map((v, index) => {
    return mainArray.map((value, i) => {
      return mainArray[i][v];
    });
  });
  console.log("mai", mai);

  const distinctValues = (currentElement, index, array) => {
    return array.indexOf(currentElement) === index;
  };
  function callback(currentElement, index, array) {
    // ...
  }
  const distintArrayValues = mai.map((currentElement, index) => {
    return currentElement.filter(distinctValues);
  });
  console.log("distintArrayValues", distintArrayValues);

  let obj = {};
  let data = {};
  for (let i = 0; i < filteredAry.length; i++) {
    obj[filteredAry[i]] = [];
    data[filteredAry[i]] = [];
    obj[filteredAry[i]].push(distintArrayValues[i]);
  }

  console.log(obj, "obj");
  console.log(data, "data");

  const [filteredData, setFilteredData] = useState(mainArray);
  const [myData, setMyData] = useState(data);

  const handleChange = (e) => {
    const { value, name, checked } = e.target;

    if (checked === true) {
      setMyData({ ...myData, [name]: [...myData[name], value] });
    } else {
      if (name === "name") {
        setMyData({ ...myData, [name]: value });
      } else {
        setMyData({
          ...myData,
          [name]: [...myData[name].filter((item) => item !== value)],
        });
      }
    }
  };

  return <div></div>;
}

export default New;
