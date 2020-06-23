$(document).ready(function () {
  //Всплывающее меню
  jQuery('.burger').on('click', function () { 
    jQuery(this).toggleClass('burger-active');
    jQuery('.header-menu').toggleClass('header-menu-active');
   });
});