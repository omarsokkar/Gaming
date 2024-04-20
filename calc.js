const display = document.getElementById('display');
function screenDisplay(input){
  display.value += input;
}

function clearInput(){
  display.value = "";
}
function calculate(){
  try {
    display.value = eval(display.value)
  } catch (error) {
    display.value = 'Error';
  }
}