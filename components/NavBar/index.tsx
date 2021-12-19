import { CenteredNavBar, NavContent, NavLink, NavBrand } from "./styles";
import { TransparentButton } from "../../modules";
// import Image from "next/image";
import Image from "react-bootstrap/Image";



const HomeNavbar = () => {
    return (
        <>
            <CenteredNavBar>
                <NavBrand>
                    <Image src="/Logo.png" fluid alt="Brand Logo"/>
                </NavBrand>
                <NavContent>
                    <NavLink>
                        <TransparentButton width="100%" height="100%">Projetos</TransparentButton>
                    </NavLink>
                    <NavLink>
                        <TransparentButton width="100%" height="100%">
                            Sobre
                        </TransparentButton>
                    </NavLink>
                    <NavLink>
                        <TransparentButton width="100%" height="100%">
                            Não sei
                        </TransparentButton>
                    </NavLink>
                </NavContent>
            </CenteredNavBar>
        </>
    );
}

export { HomeNavbar };