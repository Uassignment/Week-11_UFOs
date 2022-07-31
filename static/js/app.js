// import data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");


function buildTable(data) {
  // clear existing data
  tbody.html("");
  // loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    }
    );
  });
}

function filteredTable() {

  var date, city, state, country, shape, filteredData;

  date = d3.select("#datetime").property("value");
  city = d3.select("#city").property("value");
  state = d3.select("#state").property("value");
  country = d3.select("#country").property("value");
  shape = d3.select("#shape").property("value");
  filteredData = tableData;

  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  if (city) {
    filteredData = filteredData.filter(row => row.city === city);
  }
  if (state) {
    filteredData = filteredData.filter(row => row.state === state);
  }
  if (country) {
    filteredData = filteredData.filter(row => row.country === country);
  }
  if (shape) {
    filteredData = filteredData.filter(row => row.shape === shape);
  }

  
  //buildTable(clearFilter);

  buildTable(filteredData);
  
}

buildTable(tableData);

d3.selectAll("#filter-btn").on("click", filteredTable);
d3.selectAll("#clearFilter").on("click", clearFilter);



// Build the table when the page loads


//function showAll() {
  //var $rows = $('#findings tr');
  //$rows.show();
//}
//var buttonClearFilter = $('#clearFilter');
//buttonClearFilter.click('showaAll');


