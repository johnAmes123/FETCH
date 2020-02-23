const path = 'data.json';

fetch(path).then(function (response) {
    return response.json();

}).then(function (data) {

    console.log(data);
    // Fetch
});

