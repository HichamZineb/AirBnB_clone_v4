$(document).ready(function () {
  $('input[type=checkbox]').click(function () {
    const name_array = [];
    const id_array = [];
    $('input[type=checkbox]:checked').each(function () {
      name_array.push($(this).attr('data-name'));
      id_array.push($(this).attr('data-id'));
    });
    if (name_array.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(name_array.join(', '));
    }
    console.log(id_array);
  });
});

$(document).ready(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});

$.ajax({
  type: 'POST',
  url: 'http://0.0.0.0:5001/api/v1/places_search',
  dataType: 'json',
  data: '{}',
  contentType: 'application/json; charset=utf-8',
  success: function (places) {
    for (let i = 0; i < places.length; i++) {
      $('.places').append(`<article>
<div class="title_box">
<h2> ${places[i].name}</h2>
<div class="price_by_night"> ${places[i].price_by_night} </div>
</div>
<div class="information">
<div class="max_guest">${places[i].max_guest}
${places[i].max_guest > 1 ? 'Guests' : 'Guest'} </div>
<div class="number_rooms">${places[i].number_rooms}
${places[i].number_rooms > 1 ? 'Bedrooms' : 'Bedroom'}  </div>
<div class="number_bathrooms">${places[i].number_bathrooms}
${places[i].number_bathrooms > 1 ? 'Bathrooms' : 'Bathroom'}  </div>
</div>
<div class="user">
</div>
<div class="description">
${places[i].description}
</div>
</article>
`);
    }
  },
  error: function (xhr, status) {
    console.log('error ' + status);
  }
});
