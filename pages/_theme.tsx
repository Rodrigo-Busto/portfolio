import React from "react";
import { ThemeProvider } from "styled-components";

const theme: ThemeOptions = {
    colors: {
        primary: "#3762FA",
        bg: "#282430",
        primaryDark: "rgba(55, 98, 250, 0.3)"
    }
}

const Theme = (props: Props) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

interface Props {
    children: React.ReactNode
}

interface ThemeOptions {
    colors: {
        primary: string,
        primaryDark: string
        bg: string
    }
}

export default Theme;
export type { ThemeOptions }