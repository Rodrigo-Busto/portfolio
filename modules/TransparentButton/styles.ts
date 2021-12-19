import styled from "styled-components";
import { StyledProps } from "./types";

const StyledDiv = styled.div<StyledProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    justify-content: space-around;
`;

const StyledButton = styled.button`
    border-left: 1px solid #3762FA;
    border-right: 1px solid #3762FA;
    border-top: none;
    border-bottom: none;
    width: 100%;
    height: 100%;
    font-size: 2em;
    background: transparent;
    padding: 0;
    margin: 0;

    &:hover {
        transition: background 0.3s;
        background-color: ${props => props.theme.colors.primaryDark};
    }
`;

export { StyledButton, StyledDiv };