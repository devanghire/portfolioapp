// https://dashboard.emailjs.com/admin/templates/i34r28t/content

function sendEmail() {

   let username = document.getElementById("full-name").value.trim();
   let email = document.getElementById("email").value.trim();
   let message = document.getElementById("message").value.trim();

   let errors = [];

   if (username === "") {
      errors.push("Name is required");
   }

   if (email === "") {
      errors.push("Email is required");
   }

   if (message === "") {
      errors.push("Message is required");
   }

   if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
   }


   let params = {
      name: username,
      email: email,
      subject: "Message From Your Website",
      message: message,
   };

   emailjs.send('service_alrp112', 'template_0dfmekl', params).then(function (response) {
      let msg = username + " mail has been sent successfully. We will connect with you shortly.";
      alert(msg);
      document.getElementById("full-name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("subject").value = "";
   }, function (error) {
      alert("Failed to send email. Please try again later.");
      console.error(error);
   });
}
