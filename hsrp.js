document.getElementById("theme-toggle").addEventListener("change", function () {
    document.body.classList.toggle("dark");
    document.querySelector("header").classList.toggle("dark");
  });
  
  document.getElementById("plateChangeForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Input Validation
    const inputs = document.querySelectorAll("input[required]");
    let valid = true;
    
    // Check if all required fields are filled
    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.style.borderColor = "red";
        valid = false;
      } else {
        input.style.borderColor = "#ccc";
      }
    });
  
    // Validate Mobile Number
    const mobile = document.getElementById("mobile").value;
    const mobilePattern = /^[0-9]{10}$/; // Ensures it's a 10-digit number
    if (!mobilePattern.test(mobile)) {
      document.getElementById("confirmationMsg").innerText = "Please enter a valid 10-digit mobile number.";
      document.getElementById("confirmationMsg").style.color = "red";
      valid = false;
    }
  
    // If form is valid, submit
    if (valid) {
      document.getElementById("confirmationMsg").innerText = "Your request has been submitted successfully. Our team will contact you shortly.";
      document.getElementById("confirmationMsg").style.color = "green";
      this.reset();
    } else {
      document.getElementById("confirmationMsg").innerText = "Please fill in all the fields correctly.";
      document.getElementById("confirmationMsg").style.color = "red";
    }
  });
  
  // Function to validate mobile number input
  function validateMobile() {
    const mobile = document.getElementById("mobile").value;
    const mobilePattern = /^[0-9]{10}$/;
  
    if (!mobilePattern.test(mobile)) {
      document.getElementById("mobile").style.borderColor = "red";
    } else {
      document.getElementById("mobile").style.borderColor = "#ccc";
    }
  }
  