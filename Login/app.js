const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const doctorBtn = document.getElementById('doctor-btn');
const patientBtn = document.getElementById('patient-btn');


sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

// sign_in_btn.addEventListener('click', () =>{
//     container.classList.remove("sign-up-mode");
// });

// Add click event listeners to redirect
doctorBtn.addEventListener('click', () => {
  window.location.href = 'http://localhost:5173/'; // Redirect to doctor page
});

patientBtn.addEventListener('click', () => {
  window.location.href = '../Patient/index.html'; // Redirect to patient page
});