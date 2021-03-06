$(document).ready(function () {
  var currentFloor = 2; //текущий этаж
  var counterUp = $(".counter-up"); //кнопка увеличения этажа
  var counterDown = $(".counter-down"); //кнопка увменьшения этажа
  var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
  // функция при наведении мышкой на этаж
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button"); 
  var ViewFlatsBotton = $(".view-flats")
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
    $(".counter").text(currentFloor); //запиысываем значение текущего этажа в счетчик
  }) 

  floorPath.on("click", toggleModal);  //при клике на жэтаж открыть окно
  modalCloseButton.on("click", toggleModal); //при клике на кнопку закрыть закрыть окно
  ViewFlatsBotton.on("click", toggleModal);
  //отслеживаем клик по кнопке вверх и вниз далее
  counterUp.on("click",function(){
    if(currentFloor < 18) {
      currentFloor++;
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    $(".counter").text(usCurrentFloor);
    floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  })
  counterDown.on("click", function(){
    if(currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor);   /*форматирование и подстановка значения в счетчик*/
      floorPath.removeClass("current-floor"); //удаляем активный класс у этажей  
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсветка текущего этажа
    }
  })
  
  function toggleModal(){ //функция-открыть-закрыть окно
    modal.toggleClass("is-open");}
});