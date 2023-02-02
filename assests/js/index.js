

$('#searchButton').on('click', function (event) {

    event.preventDefault();

    const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=6BqgyH6qCUGIQC1cCyCWzPvF1rs4OqNV';

    // link to search input text
    const searchInput = $('#search-term').val();
    // value of users input year
    const searchYear = $('#search-year').val();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);



        // display title of article to page 

        // display article year 

        // display link to article 

    });

});
