import React, { useState } from "react";
import SendUsMessage from "./SendUsMessage";

export default function ContactHeader() {
  const [closeWindow, setCloseWindow] = useState(false);
  return (
    <div className="header_top d-none d-lg-block bg-dark">
      <div>
        <div className="message-wrapper">
          <SendUsMessage closeEvent={(state) => setCloseWindow(state)} />
        </div>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <ul className="list-unstyled mb-0 pr-0">
              <li className="float-left">
                <a
                  className="text btn btn-dark"
                  href="tel:+44792-768-4797"
                  title="Phone"
                >
                  <i className="fas fa-phone-alt"></i> (44) 7927684797
                </a>
              </li>
              <li className="float-left">
                <a
                  className="text btn btn-dark"
                  href="https://wa.me/0447927684797"
                  title="Whatsapp"
                >
                  <i className="fab fa-whatsapp"></i> (44) 7927684797
                </a>
              </li>

              <li className="float-left" onClick={() => setCloseWindow(true)}>
                <a className="text btn btn-dark" href="#" title="E-mail">
                  <i className="far fa-envelope"></i> contact@allmotorsltd.co.uk
                </a>
              </li>
            </ul>

            <ul className="list-unstyled mb-0 pr-0">
              <li className="float-left">
                <a className="btn btn-dark" href="#" title="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="float-left">
                <a className="btn btn-dark" href="#" title="Youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="float-left">
                <a className="btn btn-dark" href="#" title="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="float-left">
                <a className="btn btn-dark" href="#" title="Twitter">
                  <i className=" fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <style jsx>
          {`
            .text {
              font-family: "Poppins", sans-serif !important;
              font-size: 14px;
              font-weight: 300 !important;
            }

            .message-wrapper {
              top: 0;
              width: 100%;
              height: 200%;
              padding-top: 70px;
              justify-content: center;
              z-index: 100;
              position: fixed;
              background-color: rgba(0, 0, 0, 0.9);
              display: ${closeWindow ? "flex" : "none"};
            }
          `}
        </style>
      </div>
    </div>
  );
}
