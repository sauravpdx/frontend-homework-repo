document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");

  const handleSubmit = (event) => {
    event.preventDefault();

    const fullName = document.getElementById("full-name").value;
    const emailAddress = document.getElementById("email-address").value;
    const registrationStatus = document.getElementById(
      "registration-status"
    ).value;
    const additionalComments = document.getElementById(
      "additional-comments"
    ).value;

    const selectedCourses = [];

    if (document.getElementById("programming-languages").checked) {
      selectedCourses.push("Programming Languages");
    }
    if (document.getElementById("operating-systems").checked) {
      selectedCourses.push("Operating Systems");
    }
    if (document.getElementById("full-stack-web-development").checked) {
      selectedCourses.push("Full Stack Web Development");
    }

    console.log("Full Name:", fullName);
    console.log("Email Address:", emailAddress);
    console.log("Registration Status:", registrationStatus);
    console.log("Selected Courses:", selectedCourses);
    console.log("Additional Comments:", additionalComments);
  };

  form.addEventListener("submit", handleSubmit);
});
