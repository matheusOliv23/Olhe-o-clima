import styled from "styled-components";

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.625rem;
  border: 2px solid #4361ee;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  background-color: #090941;
  font-size: 1.5rem;
  min-width: 400;

  &:focus {
    outline: none;
  }
`;

export const SearchList = styled.ul`
  top: calc(100% + 10px);
  width: 100%;
  padding: 5px 15px;
  margin: 0;
  list-style: none;
  border: 2px solid #4361ee;
  border-radius: 10px;
  z-index: 100;
  background-color: #090941;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-top: none;

  transition: all 0.3s ease;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

export const SearchListItem = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  a {
    display: block;
    text-decoration: none;
    color: white;
    font-weight: 600;
    transition: all 0.3s ease;
    width: 100%;
    padding: 10px 0;
    font-size: 1.25rem;

    &:hover {
      color: white;
    }
  }
`;
