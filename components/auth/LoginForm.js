import axios from "axios";
import api from "../../services/api";
import React, { useState } from "react";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useAuth } from "./auth";
import {
  f2 as ff,
  primary,
  primaryLight,
  secondary,
} from "../../styles/variables.module.scss";
import Layout from "../Layout";
const url = "/api/user/login";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    error: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    // used fetch or axios to send request
    try {
      //clear error
      setCredentials({ ...credentials, error: "" });

      await login(credentials?.email, credentials?.password);
      //successfully Login
      //return router.back();
    } catch (err) {
      //console.log(err);
      setCredentials({
        ...credentials,
        error: err?.response?.data?.error || "unknown error",
      });
    }
  };

  const onChangeEvent = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <Layout>
      <div className="form-window m-0 p-0  mt-4 row d-flex flex-column align-items-center px-4 px-sm-0">
        {!credentials?.error == "" && (
          <div className="alert alert-danger col-lg-4 col-sm-6 notify">
            <p>{credentials?.error}</p>
          </div>
        )}
        <header className="col-lg-4 col-sm-6 text-center mb-4">
          <h4>Login</h4>
        </header>
        <form method="post" className="p-0 m-0 form-group col-lg-4 col-sm-6">
          <input
            required
            name="email"
            value={credentials?.email}
            type="email"
            className="p-2 form-control w-100"
            placeholder="Email"
            onChange={onChangeEvent}
          />
          <input
            required
            min={6}
            max={20}
            name="password"
            type="password"
            value={credentials?.password}
            className="form-control p-2 w-100"
            placeholder="Password"
            onChange={onChangeEvent}
          />
          <button
            onClick={submitForm}
            type="submit"
            className="btn btn-primary col-12 mt-2"
          >
            Login
          </button>
        </form>

        <style jsx>
          {`
            .form-window {
              padding-top: 100px !important;
              min-height: 550px;
            }
            header {
              border: 0;
              padding: 0;
              margin: 0;
              text-align: left !important;
              border-bottom: 1px solid #ccc;
            }

            input {
              margin: 10px 0;
              border-radius: 5px !important;
            }
            button {
              padding: 10px 0 !important;
              border-radius: 5px !important;
            }

            input,
            button,
            h4 {
              font-family: ${ff}!important;
              font-size: 18px !important;
            }
            h4 {
              font-size: 1.8rem !important;
            }
            button {
              font-size: 18px !important;
              font-weight: 600 !important;
              outline: none !important;
              border: none !important;
              background-color: ${primary} !important;
            }

            button:hover {
              background-color: ${primaryLight} !important;
            }
            .notify {
              // margin-top: 50px !important;
            }
            .notify p {
              padding: 0 !important;
              margin: 0 !important;
            }
          `}
        </style>
      </div>
    </Layout>
  );
}
