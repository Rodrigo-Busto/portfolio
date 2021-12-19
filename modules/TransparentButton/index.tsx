import { Props } from "./types";
import { StyledButton, StyledDiv } from "./styles";

export const TransparentButton = (props: Props) => {
    return (
        <>
            <StyledDiv width={props.width} height={props.height}>
                <StyledButton type="button">
                    {props.children}
                </StyledButton>
            </StyledDiv>
        </>
    );
}
