const apiURL ='https://api.lyrics.ovh/v1/';

function getDataFromApi(artist, title) {
  let url = apiURL + artist + '/' + title;
  fetch(url, {
      method: 'GET',
      headers: {"Accept": "application/json"},
      mode: 'cors'
    }).then((response) => {
        if (response.status !== 200) {
          console.log(`Looks like there was a problem. Status Code:  +
            ${response.status}`);
          return;
        }
        return response.json();
    }).then((data) => {
        renderLyrics(data);
    }).catch(function(err) {
      console.log('Error :-S', err);
      return err;
    });
}

function renderLyrics(data) {
  $('.js-search-results').html(data.lyrics);
}

function watchSubmit() {
  $('.js-search-button').click(event => {
    event.preventDefault();
    let artist = $('.js-query-artist').val();
    let title = $('.js-query-title').val();
    getDataFromApi(artist, title);
  });
}

$(watchSubmit);
