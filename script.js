var tampil = document.getElementById("Tampil");
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'data.json');
ourRequest.onload = function () {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};
ourRequest.send();

function renderHTML(data) {
    var htmlstring = "";
    htmlstring +="<table>"
        + "<tr><th>Name</th>" 
        + "<th>Rotation Period</th>" 
        + "<th>Surface Water</th>" 
        + "<th>Diameter</th>"
        +"<th>Gravity</th>" 
        + "<th>Climate</th></tr>";
    for (ii = 0; ii < data.results.length; ii++) {
        htmlstring += "<tr> "
            + "<td>" + data.results[ii].name + "</td>"
            + "<td>" + data.results[ii].rotation_period + "</td>"
            + "<td>" + data.results[ii].surface_water + "</td>"
            + "<td>" + data.results[ii].diameter + "</td>"
            + "<td>" + data.results[ii].gravity + "</td>"
            + "<td>" + data.results[ii].climate + "</td>"
            + "</tr>";
    }
        htmlstring+="</table>";
 
tampil.insertAdjacentHTML('beforeend', htmlstring);
    var br = "<br>";
    tampil.insertAdjacentHTML('beforeend', br);
}
