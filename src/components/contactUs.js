import React from "react";
import * as emailjs from "emailjs-com";

const SERVICE_ID = "service_qx8cewf";
const TEMPLATE_ID = "template_tg2a5xb";
const USER_ID = "user_i3DhlBthUvRHupWM205FJ";

function ContactUs() {
  const [email, setEmail] = React.useState("");

  function handleClick() {
    console.log(email)
    var data = {
      to_email:email,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      function (response) {
        console.log(response.status, response.text);
      },
      function (err) {
        console.log(err);
      }
    );
  }

  return (
    <div className="Contact">
        <form className="form-inline">
            <label class="my-1 mr-2" for="inlineFormCustomSelectPref" style={{fontSize:"2em"}}>¡Pon tu correo!</label>
            <input type="email" id="inlineFormCustomSelectPref" style={{fontSize:"2em"}} className="form-control bg-white border border-info" onChange={(event) => setEmail(event.target.value)} />
            <button type="submit" class="btn btn-primary mb-2"onClick={handleClick}>Notificar</button>
        </form>
      
    </div>
  );
}

export default ContactUs;