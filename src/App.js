import "./App.css";

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

  return (
    <div className="App">
      {mainArray.map((u, key) => (
        <>
          <div>
            <div>
              City : {u.city} <input type="checkbox"></input>
            </div>
            <br></br>
          </div>
          <>
            <div>
              Category :{u.category} <input type="checkbox"></input>
            </div>
            <br></br>
          </>
          <>
            <div>
              Type :{u.type} <input type="checkbox"></input>
            </div>
            <br></br>
          </>
          <>
            <div>
              Active :{u.active} <input type="checkbox"></input>
            </div>
            <br></br>
          </>
        </>
      ))}
      Name : <input type="text" name="" />
      <br></br>
      <table>
        <thead>
          <td>ID</td>
          <td>Name</td>
          <td>City</td>
          <td>Category</td>
          <td>Type</td>
          <td>Status</td>
        </thead>
        <tbody>
          {mainArray.map((item, i) => {
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

export default App;
