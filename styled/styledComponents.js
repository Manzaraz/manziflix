import styled from "styled-components";
import { InputBase } from "@material-ui/core";

export const FlixBtn = styled.button`
  background-color: red;
  z-index: 15;
  color: #fff;
  border-radius: 5px;
  text-transform: inherit;
  padding: 15px;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const FlixInput = styled(InputBase)`
  z-index: 30;
  background: #fff;
  padding: 25.5px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;
