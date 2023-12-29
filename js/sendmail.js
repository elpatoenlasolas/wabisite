function sendMail() {
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        company: document.getElementById("company").value ,
        message: document.getElementById("message").value
    }; 

const serviceID = "wabisabi_digital";
const templateID = "site_template";

emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("company").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Thank you for contacting us! We will get back to you soon.")

    })
    .catch(err=>console.log(err));
};