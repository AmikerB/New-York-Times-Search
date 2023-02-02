$("#searchBtn").on("click", function (event) {
  event.preventDefault();

  const queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=6BqgyH6qCUGIQC1cCyCWzPvF1rs4OqNV";

  // retrieve search input text
  const searchInput = $("#searchInput").val();
  console.log(searchInput);
  // retrieve number of records
  const numberInput = $("#numberInput").val();
  console.log(numberInput);
  // retrieve search start year
  const startYearInput = $("#startYearInput").val();
  console.log(startYearInput);
  // retrieve search end year
  const endYearInput = $("#endYearInput").val();
  console.log(endYearInput);

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    // display title of article to page

    // display article year

    // display link to article
  });
});

$("#clearBtn").on("click", function (event) {
  event.preventDefault();

  $("#searchInput").val("");
  $("#numberInput").val("");
  $("#startYearInput").val("");
  $("#endYearInput").val("");
});
