import React, { Component } from "react";

export default class Table extends Component {
  state = {
    columns: [],
    columnsToHide: ["_id"],
    results: [
      {
        _id: 1,
        firstname: "Robert",
        lastname: "Redfort",
        city: "New York",
        zip: 1233,
        street: "Mahn Street",
        street_number: "24A",
        favoriteKebab: "cow",
        address: "Akola",
      },
      {
        _id: 2,
        firstname: "Patty",
        lastname: "Koulou",
        city: "Los Angeles",
        zip: 5654,
        street: "Av 5th Central",
        street_number: 12,
        phoneNumber: "0321454545",
        address: "Jaipur",
      },
      {
        _id: 3,
        firstname: "Matt",
        lastname: "Michiolo",
        city: "Chicago",
        zip: 43452,
        street: "Saint Usk St",
        street_number: 65,
        phoneNumber: "0321454545",
        address: "nagpur",
      },
      {
        _id: 4,
        firstname: "Sonia",
        lastname: "Remontada",
        city: "Buenos Aires",
        zip: "43N95D",
        street: "Viva la Revolution Paso",
        street_number: 5446,
        country: "Argentina",
        address: "Mumbai",
      },
    ],
  };
  componentDidMount() {
    this.mappDynamicColumns();
  }

  mappDynamicColumns = () => {
    let columns = [];
    this.state.results.forEach((result) => {
      Object.keys(result).forEach((col) => {
        if (!columns.includes(col)) {
          columns.push(col);
        }
      });
      this.setState({ columns });
    });
  };

  addTableRow = (result) => {
    let row = [];
    this.state.columns.forEach((col) => {
      if (!this.state.columnsToHide.includes(col)) {
        row.push(
          Object.keys(result).map((item) => {
            if (result[item] && item === col) {
              return result[item];
            } else if (item === col) {
              return "No Value";
            }
          })
        );
        row = this.filterDeepUndefinedValues(row);
      }
    });

    return row.map((item, index) => {
      // console.log(item, "item ?");
      return (
        <td
          key={`${item}--${index}`}
          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        >
          {item}
        </td>
      );
    });
  };

  mapTableColumns = () => {
    return this.state.columns.map((col) => {
      if (!this.state.columnsToHide.includes(col)) {
        const overridedColumnName = this.overrideColumnName(col);
        return (
          <th
            key={col}
            scope="col"
            className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {overridedColumnName}
          </th>
        );
      }
    });
  };

  filterDeepUndefinedValues = (arr) => {
    return arr
      .map((val) =>
        val.map((deepVal) => deepVal).filter((deeperVal) => deeperVal)
      )
      .map((val) => {
        if (val.length < 1) {
          val = ["-"];
          return val;
        }
        return val;
      });
  };

  // if you want to change the text of the col you could do here in the .map() with another function that handle the display text

  overrideColumnName = (colName) => {
    switch (colName) {
      case "phoneNumber":
        return "Phone number";
      case "lastname":
        return "Custom Last Name";
      default:
        return colName;
    }
  };

  createTable = (results) => {
    return (
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>{this.mapTableColumns()}</tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            return <tr key={result._id}>{this.addTableRow(result)}</tr>;
          })}
        </tbody>
      </table>
    );
  };

  render() {
    return (
      <div>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                {this.state.results.length ? (
                  <div className="card">
                    {this.createTable(this.state.results)}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// https://stackoverflow.com/questions/44709897/how-to-generate-table-rows-dynamically-using-react-js

// https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript