import React from "react";

function Personal(){
    return <div className="person">
        <h2 className="name">Teklit Gebrerufeal</h2>
        <h4 className="title">Frontend Developer</h4>
        <a href="#" className="web">teklitgh.com</a>
        <div className="contact">
            <button className="email"><i class="fa-solid fa-envelope"></i><a href="">Email</a></button>
            <button className="linkdin"><i class="fa-brands fa-linkedin"></i><a href="">Linkdin</a></button>
        </div>
        <h3>About</h3>
        <p>
            I am a fronend developer with a particalar
            interest in making things simpler and automating daily
            tasks. I try to keep up with security and best practices,
            and am always looking for new thing to learn
        </p>
        <h3>Interests</h3>
        <p>
            Food expert, Music scholar. Internet fanatic. Bacon buff
            . Entrepreneur. Travel geek. Pop culture.Coffee fanatic.
        </p>
    </div>
}

export default Personal