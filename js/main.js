$(document).ready(function () {
    var currentFloor = 2; // переменная где хранится текущий этаж
    var counterUp = $(".counter-up") /*кнопка увеличения этажа */
    var counterDown = $(".counter-down") /*кнопка уменьшение этажа */
    var floorPath = $(".home-image path") // каждый отдельный этаж в SVG
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
    });

    // функция при наведении мышью на этаж
    counterUp.on("click", function () {        // отслеживаем клик по кнопке вверх 
        if (currentFloor < 18) { // проверяем значение этажа, что бы не было больше 18
            currentFloor++; // прибавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false });
            $(".counter").text(usCurrentFloor); // форматируем переменную с этажом, что бы было 01 а не 1
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor") // подсвечиваем текущий этаж при переключении счетчика
        }
    })
    counterDown.on("click", function () {           // отслеживаем клик по кнопке вниз     
        if (currentFloor > 2) { // проверяем значение этажа, что бы не было меньше 2
            currentFloor--; // вычитаем один этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false });
            $(".counter").text(usCurrentFloor); // форматируем переменную с этажом, что бы было 01 а не 1
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor") // подсвечиваем текущий этаж при переключении счетчика
        }
    })
});