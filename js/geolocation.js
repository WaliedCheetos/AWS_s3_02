// JavaScript source code

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCurrentPosition_successCB, getCurrentPosition_errorCB);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function getCurrentPosition_successCB(successCB) {
    latlng = "getCurrentPosition_successCB: " + "Latitude: " + successCB.coords.latitude + "<br>Longitude: " + successCB.coords.longitude;
    console.log(latlng);
    //geocodeHERE(successCB.coords.latitude + ',' + successCB.coords.longitude);
}

function getCurrentPosition_errorCB(errorCB) {
    errorMsg = "getCurrentPosition_successCB: " + errorCB;
    addDynamoDBItem(errorMsg);
    console.error(errorMsg);
}

async function geocodeHERE(latlng) {
    geocodeURLString = 'https://revgeocode.search.hereapi.com/v1/revgeocode?apikey=***&lang=en-US&at=' + latlng
    $.ajax({
        url: geocodeURLString,
        type: 'GET',
        success: function (successCB) {
            console.log(JSON.stringify(successCB));
        },
        error: function (errorCB) {
            console.error(JSON.stringify(errorCB));
        }
    });

    //let response = await fetch('https://revgeocode.search.hereapi.com/v1/revgeocode?apikey=***&lang=en-US&at=' + latlng);
    //let data = await response.json();
    //return data;
}

//geocodeHERE.then(data => console.log(data));