console.log("Welcome to the beta of this website");

fetch("./Pizza.json")
    .then(res => res.json())
    .then(json => {
        // Get a random index within the length of the JSON array
        var randomIndex = Math.floor(Math.random() * json.length);

        // Get the randomly selected burger
        var randomPizza = json[randomIndex];

        // Create the HTML elements for the selected burger
        $( "#row" ).prepend(`<div class='column-theme'></div>`);
        $( ".column-theme" ).append( `<h2>${randomPizza.Name}</h2>` );
        $( ".column-theme" ).append( `<h3>${randomPizza.Address}</h3>` );
        $( ".column-theme" ).append( `<h3>${randomPizza.Hours}</h3>` );
        $( ".column-theme" ).append( `<h3>${randomPizza.Rating}</h3>` );
        $(".column-theme").append(randomPizza.Maps);
    });
