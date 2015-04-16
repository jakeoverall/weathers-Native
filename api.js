var api = {
  getData: function(data) {
    var url = `http://api.wunderground.com/api/d25a32507d5608fc/history_${data.year}${data.month}${data.day}/q/${data.state}/${data.city}.json`;
    return fetch(url).then(function(response){
      return response.json();
    });
  }
}

module.exports = api;