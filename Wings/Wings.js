console.log("Welcome to the beta of this website")

fetch("./Wings.json")
    .then(res => res.json())
    .then(json => {
        var index = 0
        json.forEach(Wings => {
            index++

            $( "#row" ).prepend(`<div class='column-theme column-${index}'></div>`);
            $( `.column-${index}` ).append( `<h2>${Wings.Name}</h2>` );
            $( `.column-${index}` ).append( `<h3>${Wings.Address}</h3>` );
            $( `.column-${index}` ).append( `<h3>${Wings.Hours}` );

        })
    })