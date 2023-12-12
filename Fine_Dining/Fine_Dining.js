console.log("Welcome to the beta of this website")

fetch("./Fine_Dining.json")
    .then(res => res.json())
    .then(json => {
        var index = 0
        json.forEach(Fine_Dining => {
            index++

            $( "#row" ).prepend(`<div class='column-theme column-${index}'></div>`);
            $( `.column-${index}` ).append( `<h2>${Fine_Dining.Name}</h2>` );
            $( `.column-${index}` ).append( `<h3>${Fine_Dining.Address}</h3>` );
            $( `.column-${index}` ).append( `<h3>${Fine_Dining.Hours}</h3>` );

        })
    })