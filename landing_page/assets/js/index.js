$(document).ready(function() {
  (function($) {
    "use strict"; // Start of use strict

    $('#pageHeading').flowtype({
        minimum: 700,
        fontRatio: 8
    });

    $('#pageSubheading').flowtype({
        minimum: 700,
        fontRatio: 25
    });
  })($); // End of use strict

  // Smooth scrool
  $('.icon_angle').click(function(){
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });

  // Get the modal
  var modal = $('#modalImage');
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = $('.port_img');
  var modalImg = $('#img01');
  var captionText = $('#caption');

  img.each(function(index) {
    $(this).on('click', function(){
      modal.css('display', 'block');
      modalImg.attr('src', this.src)
      if ($(this).data('link') != undefined) {
        captionText.html('<a href=' + $(this).data("link") + ' target="_blank">' + this.alt);
      } else {
        captionText.html(this.alt);
      }
    });
  });

  // Get the <span> element that closes the modal
  var span = $('.close_modal')[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.css('display', 'none');
  };

  // Axios raw url
  var url_github = 'https://api.github.com/users/RuanAyram/repos?sort=pushed&page=1&per_page=6';

  axios.get(url_github).then(function (response) {
      var text_left = "";
      var text_right = "";
      text_left += "<tbody>"
      for (i = 0; i < 3; i++) {
        const language = response.data[i].language
        text_left += "<tr>"
        text_left += "    <th>"
        text_left += "        <a href='"+response.data[i].html_url+"'class='link_white' target='_blank'>"
        text_left += "            <div class='div_display'>"
        text_left += "                <span class='txt_under'>"+response.data[i].name+"</span>"
        switch (language) {
          case 'Ruby':
            text_left += "            <span class='label label-danger label_margin'>"+response.data[i].language+"</span>";
            break;
          case 'JavaScript':
            text_left += "            <span class='label label-warning label_margin'>"+response.data[i].language+"</span>"
            break;
          case 'HTML':
            text_left += "            <span class='label label-success label_margin'>"+response.data[i].language+"</span>"
            break;
          case 'TypeScript':
            text_left += "            <span class='label label-info label_margin'>"+response.data[i].language+"</span>"
            break;
          default:
            text_left += "            <span class='label label-primary label_margin'>"+response.data[i].language+"</span>"
        }
        text_left += "            </div>"
        text_left += "            <p><small> - "+response.data[i].description+"</small></p>"
        text_left += "        </a>";
        text_left += "    </th>"
        text_left += "</tr>"
      }
      text_left += "</tbody>"
      text_right += "<tbody>"
      for (j = 3; j < 6; j++) {
        const language = response.data[j].language
        text_right += "<tr>"
        text_right += "    <th>"
        text_right += "        <a href='"+response.data[j].html_url+"'class='link_white' target='_blank'>"
        text_right += "            <div class='div_display'>"
        text_right += "                <span class='txt_under'>"+response.data[j].name+"</span>"
        switch (language) {
          case 'Ruby':
            text_right += "            <span class='label label-danger label_margin'>"+response.data[j].language+"</span>";
            break;
          case 'JavaScript':
            text_right += "            <span class='label label-warning label_margin'>"+response.data[j].language+"</span>";
            break;
          case 'HTML':
            text_right += "            <span class='label label-success label_margin'>"+response.data[j].language+"</span>";
            break;
          case 'TypeScript':
            text_right += "            <span class='label label-info label_margin'>"+response.data[j].language+"</span>";
            break;
          default:
            text_right += "            <span class='label label-primary label_margin'>"+response.data[j].language+"</span>";
        }
        text_right += "            </div>"
        text_right += "            <p><small> - "+response.data[j].description+"</small></p>"
        text_right += "        </a>";
        text_right += "    </th>"
        text_right += "</tr>"
      }
      text_right += "</tbody>"
      $('.table_left_side').html(text_left);
      $('.table_right_side').html(text_right);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});
