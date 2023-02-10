// store specific classes/elements into a variable using querySelector. 
const myForm = document.querySelector('.formBox');
const input = document.querySelector('input');
const email = document.querySelector('.email');
const message = document.querySelector('.message');

// ERROR HANDLING.

// user will add their email, if the input for their name/email/and message is not equal to an empty string, do proceed. else if it is, dont proceed with the submit

myForm.addEventListener('submit', function(e){
   console.log('yoooo');
   
   // if any of the fields are empty, send out alert. else, accept the information.
   if (input.value == '') {
      //prevents submission if any fields are empty strings
      e.preventDefault();
      alert('do not leave the name field empty');
   } else if (email.value == '') {
      e.preventDefault();
      alert('do not leave the email empty');
   } else if (message.value == '') {
      e.preventDefault();
      alert('do not leave the message field empty');
   } else {
      console.log('accepted!');
   }
});

// creating a character counter for the message limit of 200 characters. 

// storing id tags into variables using getElementById.
let textArea = document.getElementById('message');
let characterCount = document.getElementById('charCount');
const maxCharacters = 200;

// function that is called when a user inputs a character
const countCharacters = function () {
   
   let characterUserEntered = textArea.value.length;
   let counter = maxCharacters - characterUserEntered;
   characterCount.textContent = counter + "/200";

   // if statement that says if user reaches a certain character count, the entire span will change color. 
   if (counter <= 0) {
      characterCount.style.color = 'red';
   } else if (counter < 40) {
      characterCount.style.color = 'orange';
   } else {
      characterCount.style.color = 'black';
   };
};

// event listener that is looking for a user input, which will then call countCharacter function. 
textArea.addEventListener('input', countCharacters);
