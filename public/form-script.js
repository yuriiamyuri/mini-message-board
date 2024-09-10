const textarea = document.getElementById("message");
const submitMessageBtn = document.querySelector("form button");


textarea.addEventListener("input", function() {
    // Reset the height to prevent infinite growing
    this.style.height = 'auto';

    // Set the height according to the scrollHeight
    this.style.height = (this.scrollHeight) + 'px';
});


// submitMessageBtn.addEventListener("click", (e) => {
//     const form = document.querySelector("form");

//     if (!form.checkValidity()) {
//         // If the form is invalid, let the browser handle the validation
//         return;
//     }

//     // If the form is valid, prevent submission and handle custom logic
    
//     console.log("Form is valid and submitted!");
// });
