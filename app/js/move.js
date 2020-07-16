var move = document.querySelector(".move");
var pageBody = document.querySelector(".page-body");


move.addEventListener("mousedown", function (evt) {
    evt.preventDefault();
    console.log("on push down on me");

    var startCoords = {
        x: evt.clientX,
        y: evt.clientY
    }


    var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();

        var shift = {
            x: startCoords.x - moveEvt.clientX,
            y: startCoords.y - moveEvt.clientY
        }

        startCoords = {
            x: moveEvt.clientX,
            y: moveEvt.clientY
        }

        move.style.top = (move.offsetTop - shift.y) + "px";
        move.style.left = (move.offsetLeft -shift.x) + "px";


    };

    var onMouseUp = function (upEvt) {
        upEvt.preventDefault();
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    };




    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
});










// 'use strict';
// (function () {
//
//     var setupDialogElement = document.querySelector('.setup');
//     var dialogHandler = setupDialogElement.querySelector('.upload');
//
//     dialogHandler.addEventListener('mousedown', function (evt) {
//         evt.preventDefault();
//
//         var startCoords = {
//             x: evt.clientX,
//             y: evt.clientY
//         };
//
//         var dragged = false;
//
//         var onMouseMove = function (moveEvt) {
//             moveEvt.preventDefault();
//             dragged = true;
//
//             var shift = {
//                 x: startCoords.x - moveEvt.clientX,
//                 y: startCoords.y - moveEvt.clientY
//             };
//
//             startCoords = {
//                 x: moveEvt.clientX,
//                 y: moveEvt.clientY
//             };
//
//             setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
//             setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
//
//         };
//
//         var onMouseUp = function (upEvt) {
//             upEvt.preventDefault();
//
//             document.removeEventListener('mousemove', onMouseMove);
//             document.removeEventListener('mouseup', onMouseUp);
//
//             if (dragged) {
//                 var onClickPreventDefault = function (evt) {
//                     evt.preventDefault();
//                     dialogHandler.removeEventListener('click', onClickPreventDefault)
//                 };
//                 dialogHandler.addEventListener('click', onClickPreventDefault);
//             }
//
//         };
//
//         document.addEventListener('mousemove', onMouseMove);
//         document.addEventListener('mouseup', onMouseUp);
//     });
//
//
// })();


