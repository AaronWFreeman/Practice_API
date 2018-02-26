const apiURL ='https://api.lyrics.ovh/v1/';

function getDataFromApi(artist, title) {
  let url = apiURL + artist + '/' + title;
  fetch(url, {
      method: 'GET',
      headers: {"Accept": "application/json"},
      mode: 'cors'
    }).then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        return response.json();
    }).then((data) => {
        return data;
    }).catch(function(err) {
      console.log('goFetch() Error :-S --> utils.js', err);
      return err;
    });
  // let query = {
  //   q: artist + '/' + title,
  //   language: 'en-us',
  // }
  // let autoSettings = {
  //   url: apiURL + query.q,
  //   data: query,
  //   dataType: 'json',
  //   type: 'get',
  //   success: callback
  // }
  // $.ajax(autoSettings);
  // console.log(query, autoSettings);

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
  console.log('hey', data);
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
