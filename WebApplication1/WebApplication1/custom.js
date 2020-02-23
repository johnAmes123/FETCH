const path = 'data.json';
const path1 = 'users.json';
const chart = 'chart.json'; // JSON FILE
var myRequest = new Request(chart, myInit);

var myInit = {
    method: 'GET',
    headers: {
        'Content-Type':'JSON'
    }
}

fetch(myRequest).then(function (response) {
    return response.json();

}).then(function (data) {

    console.log(data);
    // ChartJS should go over here

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            // LOAD IT FROM A JSON
            labels: data.labels,
            datasets: [{
                // LOAD FROM A JSON
                label: data.dataSet1.label,
                backgroundColor: data.color[0],
                borderColor: data.color[0],
                // LOAD FROM A JSON
                data: data.dataSet1.data
            },
            {
                // LOAD FROM A JSON
                label: data.dataSet2.label,
                backgroundColor: data.color[1],
                borderColor: data.color[1],
                // LOAD FROM A JSON
                data: data.dataSet2.data
            }]
        },

        // Configuration options go here
        options: {
            responsive: false
        }
    });
















    console.log(data);

    console.log(data.User1.FirstName);

    console.log(data.User1.Hobbies[0]);









}).catch(function () {
    console.log("error!!");
    // Test 
});

