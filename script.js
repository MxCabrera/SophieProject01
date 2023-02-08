const myForm = document.querySelector('.formBox');
const input = document.querySelector('input');
const email = document.querySelector('.email');
const message = document.querySelector('.message');
const submitInput = document.querySelector('.submit');

// console.log(input);

// ERROR HANDLING.

// user will add their email, if the input for their name/email/and message is not equal to an empty string, do proceed. else if it is, dont proceed with the submit

//

myForm.addEventListener('submit', function(e){
   console.log('yoooo');
   
   // if any of the fields are empty, send out alert. else, accept the information?
   if (input.value == '') {
      //prevents submission if any fields are empty strings
      e.preventDefault();
      alert('do not leave the name field empty');
      return false;
   } else if (email.value == '') {
      e.preventDefault();
      alert('do not leave the email empty');
      return false;
   } else if (message.value == '') {
      e.preventDefault();
      alert('do not leave the message field empty');
   } else {
      alert('accepted');
   }
});

// submitInput.addEventListener('click', function(e){
//    e.preventDefault()
//    console.log('i was able to submit somethings!');
// });


