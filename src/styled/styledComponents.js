import styled from "styled-components";
import { InputBase } from "@material-ui/core";

const WITH_SIZE = {
  fullWith: "100%",
  medium: "260px",
};
const WITH_DEFAULT = "160px";
const handleWidth = (wide) => WITH_SIZE[wide] || WITH_DEFAULT;

export const FlixBtn = styled.button`
  z-index: 15;
  background-color: ${({ color }) => (color === "gray" ? "lightgray" : "red")};
  color: #fff;
  border-radius: ${({ radius }) => (radius ? "5px" : null)};
  text-transform: inherit;
  padding: 15px;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;
  width: ${({ wide }) => handleWidth(wide)};
`;

export const FlixInput = styled(InputBase)`
  z-index: 30;
  background: #fff;
  padding: 25.5px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;
