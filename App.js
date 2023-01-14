var str = "";
var inpt = document.querySelector('input');
var buttons = document.querySelectorAll('.btns');
var answer = document.querySelector('input');
var para = document.createElement('p');
var checkInput = 0;

buttons.forEach((items) => {

  items.addEventListener('click', (e) => {

    if (e.target.innerHTML == '=') {
      str = eval(str);
      answers = str;
      document.querySelector('input').value = str;

      if (checkInput == 1) {
        answer.style.color = 'red';
      } else {
        answer.style.color = 'rgb(6, 239, 122)';
      }
    }
    else if (e.target.innerHTML == "c") {
      str = " ";
      document.querySelector('input').value = str;
    }
    else {
      str = str + e.target.innerHTML;
      document.querySelector('input').value = str;

      if (checkInput == 1) {
        answer.style.color = 'black';
      } else {
        answer.style.color = '#fff';
      }
    }

  });

});

// Dark and Light  mode
var dark = document.querySelector('#dark');
var light = document.querySelector('#light');
var myBody = document.querySelector('body');
var mainName = document.querySelector('.header');
var OutCon = document.querySelector('.outer-container');

// Dark mode
dark.addEventListener('click', () => {
  light.style.display = 'block';
  dark.style.display = 'none';
  checkInput=0;

  myBody.style.backgroundColor = 'rgba(3, 2, 15, 0.826)';
  mainName.style.color = 'rgb(10, 165, 129)';
  mainName.style.backgroundColor = 'rgba(17, 17, 17, 0.658)'
  OutCon.style.backgroundColor = 'rgb(14, 0, 0)';
  OutCon.style.borderColor = '#fff';
  inpt.style.backgroundColor = 'rgb(56, 69, 65)';

  buttons.forEach((items) => {
    items.classList.remove('btnLight');
  });
});


// Light mode
light.addEventListener('click', () => {
  dark.style.display = 'block';
  light.style.display = 'none';
  checkInput = 1;


  myBody.style.backgroundColor = '#fff';
  mainName.style.color = 'rgb(10, 165, 129)';
  mainName.style.backgroundColor = 'rgb(224, 214, 214)'
  OutCon.style.backgroundColor = 'rgb(224, 214, 214)';
  OutCon.style.borderColor = '#111';
  inpt.style.backgroundColor = '#fff';

  buttons.forEach((items) => {
    items.classList.add('btnLight');
  });

});
