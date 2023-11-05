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
