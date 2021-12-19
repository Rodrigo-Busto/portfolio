import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

const CenteredNavBar = styled(Navbar)`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    background-color: ${props => props.theme.colors.bg};
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
    * {
        color: white !important;
    }
    height: 20vh;
    width: 100vw;
    padding: 0;
`;

const NavBrand = styled(Navbar.Brand)`
    flex-grow: 1;
    margin: 0;
    padding: 0;
`;

const NavContent = styled(Nav)`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: stretch;
`;

const NavLink = styled(Nav.Link)`
    width: auto;
    height: auto;
    flex-grow: 1;
    padding: 0 !important;
`;

export { CenteredNavBar, NavContent, NavLink, NavBrand };