$(function(){
  $('.menu-trigger').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('nav').slideUp();
    } else {
      $(this).addClass('active');
      $('nav').slideDown();
    }
  });
});