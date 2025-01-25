

   function Sendmail(){
      var params = {
         name: document.getElementById("name").value,
         email: document.getElementById("email").value,
         message: document.getElementById("message").value,
     }
   const serviceId = "service_tvi29js";
   const templateId = "template_e90b60c";

   emailjs.send(serviceId, templateId, params).then(
      (res) =>{
          document.getElementById("name").value ="";
          document.getElementById("email").value ="";
          document.getElementById("message").value ="";
          console.log(res);
          alert("Your Message Send Successfull");
  })
  .catch((err) => console.log(err));
}