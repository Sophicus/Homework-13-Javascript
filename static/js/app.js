// from data.js
var tableData = data;

var filter = d3.select("#filter-btn");

filter.on("click", function(){
    d3.event.preventDefault();
    
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);

    // d3.select("#ufo-table")
    // .append("td").text({datetime})

    var tbody = d3.select("tbody");

    filteredData.forEach((filteredTable) => {
        var row = tbody.append("tr");
        Object.entries(filteredTable).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

});

