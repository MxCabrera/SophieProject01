const myForm = document.querySelector('.formBox');
const input = document.querySelector('input');
const label = document.querySelector('label');
const submitInput = document.querySelector('.submit');

console.log(submitInput);

// ERROR HANDLING.

// user will add their email, if the input for their name/email/and message is not equal to an empty string, do proceed. else if it is, dont proceed with the submit

//

myForm.addEventListener('submit', function(e){
   e.preventDefault();
})

submitInput.addEventListener('click', function(e){
   e.preventDefault()
   console.log('i was able to submit something!');
});


