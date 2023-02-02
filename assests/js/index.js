const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=6BqgyH6qCUGIQC1cCyCWzPvF1rs4OqNV';

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

});