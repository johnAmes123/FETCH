const path = 'data.json';

var myRequest = new Request(path, myInit);

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

}).catch(function () {
    console.log("error!!");
    // Test 
});

