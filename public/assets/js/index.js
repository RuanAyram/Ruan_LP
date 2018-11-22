jQuery(document).ready(function() {

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
    })(jQuery); // End of use strict

    // Smooth scrool
    $('.icon_angle').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

    // Get the current year
    var a = jQuery('#year');
    a.text(new Date().getFullYear());

    // Get the modal
    var modal = document.getElementById("modalImage");
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = jQuery(".port_img");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img.each(function(index) {
        $(this).on("click", function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            if ($(this).data("link") != undefined) {
                captionText.innerHTML = '<a href=' + $(this).data("link") + ' target="_blank">' + this.alt;
            } else {
                captionText.innerHTML = this.alt;
            }
        });
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close_modal")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };
});
