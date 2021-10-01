const Dynamic = () => {
  const columns = [
    { path: "id", name: "ID" },
    { path: "name", name: "Name" },
    { path: "name", name: "Name" },
    { path: "age", name: "Age" },
    { path: "favFruit", name: "Fruits" },
  ];

  const data = [
    { id: 1, name: "Kate", age: 25, favFruit: "🍏" },
    { id: 2, name: "Tom", age: 23, favFruit: "🍌" },
    { id: 3, name: "Ann", age: 26, favFruit: "🍊" },
    { id: 4, name: "Jack", age: 21, favFruit: "🍒" },
    { id: 4, name: "Jack", age: 21, favFruit: "🍒" },
    { id: 4, name: "Jack", age: 21, favFruit: "🍒" },
  ];

  let mainColumns = [
    {
      path: "id",
      name: "ID",
    },
    {
      path: "name",
      name: "Name",
    },
    {
      path: "city",
      name: "City",
    },
    {
      path: "category",
      name: "Category",
    },
  ];

  let maiData = [
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

  return (
    <div>
      <Table id="id" columns={mainColumns} data={maiData} />
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

const Table = ({ id, columns, data }) => (
  <table style={tableStyle}>
    <tbody>
      <tr>
        {columns.map(({ path, name }) => (
          <th style={tdStyle} key={path}>
            {name}
          </th>
        ))}
      </tr>
      {data.map((rowData) => (
        <tr key={rowData[id]}>
          {columns.map(({ path }) => (
            <td style={tdStyle} key={path}>
              {rowData[path]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
