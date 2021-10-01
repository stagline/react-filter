import React, { useState, useEffect } from "react";

function New() {
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
    //   state: "guj",
    },
    {
      id: 3,
      name: "jim",
      city: "san francisco",
      category: "one",
      type: "B",
      active: "TRUE",
    //   state: "raj",
    },
    {
      id: 4,
      name: "jane",
      city: "denver",
      category: "two",
      type: "C",
      active: "FALSE",
    //   state: "mah",
    },
  ];

  const head = Object.keys(mainArray[0]);
  console.log(`head`, head);

  let filteredAry = head.filter(function (e) {
    return e !== "id";
  });
  filteredAry = filteredAry.filter(function (e) {
    return e !== "name";
  });

  const mai = filteredAry.map((v, index) => {
    return mainArray.map((value, i) => {
      return mainArray[i][v];
    });
  });

  const unique = (v, i, s) => {
    return s.indexOf(v) === i;
  };

  const distinctArrayValue = mai.map((v, i) => {
    return v.filter(unique);
  });

  let myObj = {};
  let data = {};
  for (let i = 0; i < filteredAry.length; i++) {
    myObj[filteredAry[i]] = [];
    data[filteredAry[i]] = [];
    myObj[filteredAry[i]].push(distinctArrayValue[i]);
  }

  const [myData, setMyData] = useState(data);

  const [filteredData, setFilteredData] = useState(mainArray);

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
    setFilteredData(multiFilter(mainArray, myData));
  }, [myData]);

  function multiFilter(array, filters) {
    const filterKeys = Object.keys(filters);

    return array.filter((item) => {
      return filterKeys.every((key) => {
        if (key === "name")
          return (
            item.name.toLowerCase().indexOf(filters[key].toLowerCase()) !== -1
          );
        if (!filters[key].length) return true;
        return filters[key].includes(item[key]);
      });
    });
  }

  return (
    <div>
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
            {Object.values(myObj).map((value, index) => {
              return (
                <>
                  {value.map((v, i) => {
                    return (
                      <td>
                        {v.map((val, ind) => {
                          return (
                            <tr>
                              {val}
                              <label className="switch">
                                <input
                                  type="checkbox"
                                  name={filteredAry[index]}
                                  value={val}
                                  onChange={handleChange}
                                />
                                <span className="slider round"></span>
                              </label>
                            </tr>
                          );
                        })}
                      </td>
                    );
                  })}
                </>
              );
            })}
          </tr>
        </tbody>
      </table>
      <br />
      <label>Name</label>
      <input type="text" name="name" onChange={handleChange} />

      <CustomTable filteredData={filteredData} head={head} />
    </div>
  );
}

export default New;

const CustomTable = ({ filteredData, head }) => {
  const objectValues = (newArray) => Object.values(newArray);

  return (
    <table border="1px" align="center">
      <thead>
        <tr>
          {head.map((value) => (
            <th key={value}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((v, index) => {
          return (
            <tr key={index}>
              {objectValues(v).map((values, i) => {
                return <td key={i}>{values}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
