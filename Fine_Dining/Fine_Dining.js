console.log("Welcome to the beta of this website");

fetch("./Fine_Dining.json")
    .then(res => res.json())
    .then(json => {
        // Get a random index within the length of the JSON array
        var randomIndex = Math.floor(Math.random() * json.length);

        // Get the randomly selected Fine_Dining
        var randomFine_Dining = json[randomIndex];

        // Create the HTML elements for the selected Fine_Dining
        $("#row").prepend(`<div class='column-theme'></div>`);
        $(".column-theme").append(`<h2>${randomFine_Dining.Name}</h2>`);
        $(".column-theme").append(`<h3>${randomFine_Dining.Address}</h3>`);
        $(".column-theme").append(`<h3>${randomFine_Dining.Hours}</h3>`);
        $(".column-theme").append(`<h3>${randomFine_Dining.Rating}</h3>`);
        $(".column-theme").append(randomFine_Dining.Maps);
    })