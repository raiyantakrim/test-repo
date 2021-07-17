const inputFields = document.querySelectorAll('.inputField');


inputFields.forEach(element => {
    element.onfocus = function(){
        element.previousElementSibling.classList.add('activeLabel');
        console.log(element.previousElementSibling);
        element.classList.add('activeInputField');
    }
});
inputFields.forEach(element => {
    element.onblur = function(){
        element.previousElementSibling.classList.remove('activeLabel');
        element.classList.remove('activeInputField');
    }
});