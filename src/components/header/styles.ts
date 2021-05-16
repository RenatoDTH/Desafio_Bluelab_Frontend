import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  align-items: center;
`;

export const NavBar = styled.nav`
  width: 100%;
  background: #f8f8f8;
  position: sticky;
  margin-top: 20px;
  top: 0;
  span {
    font-weight: 700;
  }
  label,
  #hamburgerMenu {
    display: none;
  }
  #items {
    display: flex;
    justify-content: center;
  }
  #items a {
    width: 20%;
    padding: 10px;
    color: #00a0ef;
    text-decoration: none;
    text-align: center;
  }
  #items a:hover {
    border-bottom: 2px solid #00a0ef;
  }
  @media screen and (max-width: 768px) {
    label {
      display: inline-block;
      color: #00a0ef;
      background: transparent;
      font-size: 1.2rem;
      padding: 10px;
    }
    #items a {
      box-sizing: border-box;
      display: block;
      width: 100%;
      border-top: 1px solid #00a0ef;
    }
    #items {
      display: none;
    }
    input:checked ~ #items {
      display: block;
    }
  }
`;
