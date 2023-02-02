

function searchForArticle() {

    const urlLink = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=6BqgyH6qCUGIQC1cCyCWzPvF1rs4OqNV';

    // value of user input 

    // value of users input year

    //

}



$('#searchButton').on('click', function (event) {

    event.preventDefault();

    const queryURL = searchForArticle();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // link to search input text
        searchInput = $('#search-term').val();

        // title 


        // 
    });

});
