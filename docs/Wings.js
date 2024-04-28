console.log("Welcome to the beta of this website");

fetch("./Wings.json")
    .then(res => res.json())
    .then(json => {
        // Get a random index within the length of the JSON array
        var randomIndex = Math.floor(Math.random() * json.length);

        // Get the randomly selected burger
        var randomWings = json[randomIndex];

        // Create the HTML elements for the selected burger
        $("#row").prepend(`<div class='column-theme'></div>`);
        $(".column-theme").append(`<h2>${randomWings.Name}</h2>`);
        $(".column-theme").append(`<h3>${randomWings.Address}</h3>`);
        $(".column-theme").append(`<h3>${randomWings.Hours}</h3>`);
        $(".column-theme").append(`<h3>${randomWings.Rating}</h3>`);
        $(".column-theme").append(randomWings.Maps);
    });
