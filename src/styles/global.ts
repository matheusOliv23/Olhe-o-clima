import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: rgb(130,128,157);
    background: linear-gradient(90deg, rgba(130,128,157,1) 0%, rgba(9,9,65,1) 56%, rgba(2,2,20,1) 93%);
    //background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  a {
    color: ${(props) => props.theme.colors.background};
    text-decoration: none;
  }

  input {
    border: none;    
  }

  li{
    list-style: none;
  }
`;

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem;
  gap: 2rem;
`;
