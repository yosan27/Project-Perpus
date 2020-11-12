const slider = document.querySelector('.body section .slider .slick-track');
slider.addEventListener('mouseenter', function(){
  const actived = slider.querySelector('.slick-active');
  actived.addEventListener('click', function(){
    open("detailpage.html", "_self");
  });
});