document.addEventListener('DOMContentLoaded', function () {
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');
  const sidebarMore = document.querySelector('.sidebar-info_more');
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');

  sidebarBtn.addEventListener('click', () => {
    sidebarMore.classList.toggle('active');
  });
  
  const showContactBtn = document.querySelector('.info_more-btn');
  showContactBtn.addEventListener('click', () => {
    sidebarMore.classList.toggle('active');
  });


  

  document.getElementById("showPrescriptionForm").addEventListener("click", function() {
    var form = document.getElementById("prescriptionForm");
    if (form.style.display === "none" || form.style.display === "") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  });
  
  document.getElementById("prescriptionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Validate form inputs
    var doctorName = document.getElementById("doctorName").value.trim();
    var reason = document.getElementById("reason").value.trim();
    var findings = document.getElementById("findings").value.trim();
    var prescription = document.getElementById("prescription").value.trim();
    var visitDate = document.getElementById("visitDate").value.trim();
    var file = document.getElementById("file").value.trim();
  
    if (doctorName === "" || reason === "" || findings === "" || prescription === "" || visitDate === "" || file === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Display success message
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
  
    // Clear form inputs
    document.getElementById("doctorName").value = "";
    document.getElementById("reason").value = "";
    document.getElementById("findings").value = "";
    document.getElementById("prescription").value = "";
    document.getElementById("visitDate").value = "";
    document.getElementById("file").value = "";
  
    // Scroll to the success message
    successMessage.scrollIntoView({ behavior: "smooth" });
  });
  
  document.getElementById("goToHomePage").addEventListener("click", function() {
    // Redirect to the About page
    var aboutPage = document.querySelector('[data-page="about"]');
    aboutPage.classList.add('active');
  
    // Remove "active" class from other pages
    var pages = document.querySelectorAll('[data-page]');
    pages.forEach(page => {
      if (page !== aboutPage) {
        page.classList.remove('active');
      }
    });
  
    // Hide the success message
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "none";
  
    // Show the form
    var form = document.getElementById("prescriptionForm");
    form.style.display = "block";
  
    // Clear form inputs
    document.getElementById("doctorName").value = "";
    document.getElementById("reason").value = "";
    document.getElementById("findings").value = "";
    document.getElementById("prescription").value = "";
    document.getElementById("visitDate").value = "";
    document.getElementById("file").value = "";
  });
  
  
  
  

  navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      navLinks.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');

      pages.forEach(page => page.classList.remove('active'));
      pages[index].classList.add('active');
    });
  });
});
