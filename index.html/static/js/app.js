// from data.js
const tableData = data;

$(document).ready(function() {
    console.log("Ready!");

    renderTable(tableData);

    $("#filter-btn").on("click", function() {
        
        filterData();
    });
});

function filterData() {
    // step 0, grab all the user inputs
    let date_filter = $("#datetime").val();
    let state = $("#state").val();
    let country = $("#country").val();
    let shape = $("#shape").val();

    let filter_data = tableData.filter(row => row.datetime === date_filter);
    filter_data = filter_data.filter(row => row.state === state);
    filter_data = filter_data.filter(row => row.country === country);
    filter_data = filter_data.filter(row => row.shape === shape);
    renderTable(filter_data);
}

function renderTable(inp_data) {
    // init html string
    let html = "";

    // loop through all rows
    inp_data.forEach(function(row) {
        html += "<tr>";

        // loop through each cell
        Object.entries(row).forEach(function([key, value]) {
            html += `<td>${value}</td>`;
        });

        // close the row
        html += "</tr>";
    });

    // shove the html in our elements
    console.log(html);
    $("tbody").html("");
    $("tbody").append(html);
}