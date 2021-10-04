import React, { useEffect, useState } from "react";

export default function NewDynamic() {
  let mainArray = [
    {
      id: 1,
      name: "foo",
      city: "dallas",
      category: "one",
      type: "A",
      active: "FALSE",
      address: "MH",
    },
    {
      id: 2,
      name: "bar",
      city: "dallas",
      category: "one",
      type: "B",
      active: "FALSE",
      address: "MH",
    },
    {
      id: 3,
      name: "jim",
      city: "san francisco",
      category: "one",
      type: "B",
      active: "TRUE",
      address: "GJ",
    },
    {
      id: 4,
      name: "jane",
      city: "denver",
      category: "two",
      type: "C",
      active: "FALSE",
      address: "RJ",
    },
  ];

  const heading = Object.keys(mainArray[0]);
  console.log(heading);

  let filteredAry = heading.filter(function (e) {
    return e !== "id" && e !== "name";
  });
  console.log("filteredAry", filteredAry);

  const mai = filteredAry.map((v, index) => {
    return mainArray.map((value, i) => {
      return mainArray[i][v];
    });
  });
  console.log("mai", mai);

  function callback(currentElement, index, array) {
    return array.indexOf(currentElement) === index;
  }

  const disarr = mai.map((currentElement, index) => {
    return currentElement.filter(callback);
  });
  console.log(disarr, "disarr");

  let obj = {};
  let data = {};
  for (let i = 0; i < filteredAry.length; i++) {
    obj[filteredAry[i]] = [];
    data[filteredAry[i]] = [];
    obj[filteredAry[i]].push(disarr[i]);
    console.log(obj, "obj cccccccc");
    console.log(obj[filteredAry[i]], "obj llll");
  }
  console.log(data, "sdddd");

  const [filteredData, setFilteredData] = useState(mainArray);
  const [myData, setMyData] = useState(data);
  console.log(myData, "lllll");

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

  useEffect(() => {
    setFilteredData(multipleFilter(myData, mainArray));
    console.log("myData, mainArray", myData, mainArray);
  }, [myData]);
  console.log(filteredData, "filteredData");

  const multipleFilter = (filters, array) => {
    const filterk = Object.keys(filters);
    console.log("filters", "array", filters, array);
    console.log("filterk", filterk);

    return array.filter((item) => {
      return filterk.every((key) => {
        console.log("key", key);
        if (key === "name")
          return (
            item.name.toLowerCase().indexOf(filters[key].toLowerCase()) !== -1
          );
        if (!filters[key].length) return true;
        return filters[key].includes(item[key]);
      });
    });
  };

  return (
    <div>
      <h3>New Dynamic</h3>
      <table>
        <thead>
          <tr>
            {filteredAry.map((value, index) => {
              return (
                <>
                  <th key={index}>{value}</th>
                </>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(obj).map((value, index) => {
              return (
                <>
                  {value.map((v, i) => {
                    console.log("v", v);
                    return (
                      <>
                        <td>
                          {v.map((val, ind) => {
                            return (
                              <>
                                {val}
                                <input
                                  type="checkbox"
                                  name={filteredAry[index]}
                                  onChange={handleChange}
                                  value={val}
                                />
                              </>
                            );
                          })}
                        </td>
                      </>
                    );
                  })}
                </>
              );
            })}
          </tr>
        </tbody>
      </table>
      <br />
      Name :
      <input type="text" name="name" onChange={handleChange} />
      <CustomTable filteredData={filteredData} heading={heading} />
    </div>
  );
}

const CustomTable = ({ filteredData, heading }) => {
  console.log(filteredData, heading, "filteredData,heading");

  return (
    <table>
      <thead>
        <tr>
          {heading.map((v, i) => {
            return (
              <>
                <th key={i}>{v}</th>
              </>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((v, i) => {
          return (
            <>
              <tr key={i}>
                {Object.values(v).map((u, i) => {
                  return <td key={i}>{u}</td>;
                })}
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

// https://www.javascripttutorial.net/javascript-array-filter/

// https://www.google.com/search?q=multiple+filter+in+javascript+github&oq=multiple+filter+in+javascript+github&aqs=chrome..69i57.9544j0j7&sourceid=chrome&ie=UTF-8
