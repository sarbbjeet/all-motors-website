import React from "react";
import AppHead from "../components/Head";
import Header from "../components/Header";
import AppFooter from "../components/AppFooter";
import { colors } from "../utils/constants";
import styled from "styled-components";

const Div = styled.div`
  background-color: ${(props) => props.color};
  padding: 100px;
  @media (max-width: 768px) {
    background-color: #ff0000;
  }
`;

const Input = styled.input.attrs((props) => ({
  placeholder: "email address",
}))``;

export default function Layout({ children }) {
  return (
    <div>
      <AppHead />
      <Header />
      {children}
      <AppFooter />
    </div>
  );
}
