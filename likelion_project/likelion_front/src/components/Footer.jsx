import React from "react";
import styled from "styled-components";
import { SiNotion } from "react-icons/si";
import "../icon.css";

const FooterContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;e
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <pre
          style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontSize: "18px",
            color: "#d3d3d3",
          }}
        >
          {" "}
          © 2022 SoftPower | visit our page!{" "}
        </pre>
        <a
          href="https://www.notion.so/1bfbeee3f1d646ea9b7da8f10b8878e8"
          target="_blank"
          className="githubIcon"
        >
          <SiNotion size="30" />
        </a>
      </FooterContainer>
    </>
  );
}

export default Footer;
