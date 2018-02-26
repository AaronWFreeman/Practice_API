const apiURL ='https://api.lyrics.ovh/v1/';

function getDataFromApi(artist, title, callback) {
  let query = {
    q: artist + '/' + title,
    language: 'en-us',
  }
  let autoSettings = {
    url: apiURL + query.q,
    data: query,
    dataType: 'json',
    type: 'get',
    success: callback
  }
  $.ajax(query, autoSettings);
  console.log(query, autoSettings);

}

function renderLyrics(lyricObj) {
  // return
  //   <div>
  //     <p>
  //       // `${lyricObj}`
  //     </p>
  //   </div>;
}

function displaySearchData(data) {
  // const results = data.items.map((item, index) => renderLyrics(item));
  // $('js-search-results').html(results);
  console.log(data);
}

function watchSubmit() {
  $('.js-search-button').click(event => {
    event.preventDefault();
    let artist = $('.js-query-artist').val();
    let title = $('.js-query-title').val();
    getDataFromApi(artist, title, displaySearchData);
  });
}

$(watchSubmit);
