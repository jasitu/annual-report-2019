$(function() {
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('.nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('.nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
// close dropdown menu when clicking on main nav list
    $('.nav-list li').on('click', function(){
        $('.nav-list').hide();
        $('.nav-toggle').removeClass('active');
    });
});