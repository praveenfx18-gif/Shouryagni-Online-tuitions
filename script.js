
/* PAGE LOADER */

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 700);
});

/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(element => {
  observer.observe(element);
});

/* WHATSAPP ADMISSION FORM */

const admissionForm = document.getElementById("admissionForm");

admissionForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const phone = document.getElementById("studentPhone").value.trim();
  const type = document.getElementById("studentType").value;
  const city = document.getElementById("studentCity").value.trim();
  const message = document.getElementById("studentMessage").value.trim();

  if (!/^[6-9][0-9]{9}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  if (!name || !type) {
    alert("Please fill all required details.");
    return;
  }

  const whatsappNumber = "916302177372";

  const whatsappMessage =
`🔥 SHAURYAGNI 1.0 - ADMISSION ENQUIRY

Student Name: ${name}
Mobile Number: ${phone}
Student Category: ${type}
City / Town: ${city || "Not provided"}

Message: ${message || "No additional message"}

I am interested in the NEET 150 DAYS FIVE MONTHS MISSION.

Please share the admission details.

Thank you!`;

  const whatsappURL =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(whatsappMessage);

  window.open(whatsappURL, "_blank");
});
