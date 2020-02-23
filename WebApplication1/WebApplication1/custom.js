const path = 'data.json';

fetch(path).then(function (response) {
    return response.json();

}).then(function (data) {

    console.log(data);

    console.log(data.FirstName);

    console.log(data.LastName);

    document.getElementById("testData").innerHTML = data.FirstName;

    console.log(Object.keys(data));

    console.log(Object.values(data));


});

