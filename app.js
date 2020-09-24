const progress = document.querySelector('.progress-done');

setTimeout(() => {
  progress.style.width = progress.getAttribute('data-done') + '%';
  progress.style.opacity = 1;
}, 10);

// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.querySelector('span');
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + '%';
//       }
//     }
//   }
// }
