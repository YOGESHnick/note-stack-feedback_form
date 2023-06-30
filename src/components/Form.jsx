import React from 'react';

function Form(){
    return (
        <div className="form">
        <form action="https://formsubmit.co/heuristic.solaris21@gmail.com" method="POST">
            <h2>Grievance form !</h2>
            <h3>Help us improve our app by reporting the issues and bugs you found </h3>
            <input type="text" id="name" name="name" placeholder="Your Name" required /> 
            <input type="email" id="email" name="email" placeholder="Your Email" required />
            <input type="text" id="phone" name="phone" placeholder="Phone no." required />
            <textarea id="message" rows="4" name="Let us know what bothers you" placeholder="Let us know what bothers you"></textarea>
            <button type="submit"> <i class="fa-solid fa-shuttle-space fa-bounce fa-xl"></i> Send</button>
        </form>

        </div>
    )
}


export default Form;