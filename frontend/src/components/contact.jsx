import { useState } from "react";
import React from "react";
import emailjs from "@emailjs/browser";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    console.log("Enviando:", name, email, message);

    emailjs
      .send(
        "service_ljeg04q", // Seu Service ID
        "template_yhap68q", // Seu Template ID
        {
          name: name,
          email: email,
          message: message,
        },
        "5MJBzeBkPw_RCT4Qr" // Sua Public Key
      )
      .then(
        (result) => {
          console.log("Email enviado com sucesso:", result.text);
          alert("Mensagem enviada com sucesso!");
          clearState();
        },
        (error) => {
          console.log("Erro ao enviar:", error);
          alert("Erro ao enviar a mensagem. Verifique o console para mais detalhes.");
        }
      );
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row context-content">
          <div className="new-class">
            <div className="section-title text-center">
              <h2>Entre em Contato</h2>
              <p>
                Por favor, preencha o formulário abaixo para entrar em contato conosco, responderemos o mais breve possível.
              </p>
            </div>
            <form name="sentMessage" noValidate onSubmit={handleSubmit} className="text-center">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Nome"
                  required
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Mensagem"
                  required
                  value={message}
                  onChange={handleChange}
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-custom btn-lg">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
            <div id="map-container" className="text-center">
              <iframe 
                width="100%" 
                height="300" 
                style={{ border: "0", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.317654851996!2d-49.249909524646625!3d-25.461066434121516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4fde860fb43%3A0xa59bdb32148a9686!2sAdam%20Robo%20-%20F%C3%A1brica!5e0!3m2!1sen!2sbr!4v1743527721711!5m2!1sen!2sbr">
              </iframe>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="contact-info">
                <h3>Informações de Contato</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i>
                    <span className="ml-2"> Endereço: </span>
                  </span>
                  <span className="ml-2">{props.data ? props.data.address : "Carregando..."}</span>
                </p>
                <p>
                  <span>
                    <i className="fa fa-phone"></i>
                    <span className="ml-2"> Telefone: </span>
                  </span>
                  <span className="ml-2">{props.data ? props.data.phone : "Carregando..."}</span>
                </p>
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i>
                    <span className="ml-2"> Email: </span>
                  </span>
                  <span className="ml-2">{props.data ? props.data.email : "Carregando..."}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
        <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 By{' '}
            <a href="http://www.a1.adamroboglobal.com" rel="nofollow" target="_blank">
              AdamRobo
            </a>
          </p>
        </div>
      </div>
          </div>
        </div>
      </div>
  );
};
