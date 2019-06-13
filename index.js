
$(document).ready(function () {
    const mq = window.matchMedia( "(min-width: 800px)" );
let feature = document.getElementsByClassName('feature');
feature = feature[0];
let feature2 = document.getElementsByClassName('feature')[2];
let classname = ' active';

if (mq.matches) {
   
} else {
    feature.classList.add("active")
    feature2.classList.add("active")
}
    
     $('.open_menu').click(function () {
         if ($(this).hasClass('active')) {
             $(this).removeClass('active');
             $('.nav').removeClass('active');
              $('html').css('overflow', 'visible');
         }
         else {
             $(this).addClass('active');
             $('.nav').addClass('active');
              $('html').css('overflow', 'hidden');
          
         }
     });
});
