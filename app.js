$(function () {
   $('[data-scroll]').on('click', function (event) {
      event.preventDefault();
      const blockId = $(this).data('scroll'),
         blockOffset = $(blockId).offset().top;

      $('html, body').animate({
         scrollTop: blockOffset
      }, 500)
   })

   /* menu nav bar */
   $('#nav__toggle').on('click', function () {

      $(this).toggleClass('active')
      $('#nav__inner').toggleClass('active');
})










})