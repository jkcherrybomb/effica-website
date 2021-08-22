import {DefaultTheme} from 'styled-components';

type Color = string;

export interface ITheme {
    colors: {
        primary: Color;
        primaryStrong: Color;
        secondary: Color;
        white: Color;
        gray: Color;
        black: Color;
    };
    breakpoint: {
        mobile: string;
        tablet: string;
    };
    up: (bp: string, vert?: boolean) => string;
    down: (bp: string, vert?: boolean) => string;
    between: (low: string, high: string, vert?: boolean) => string;
}

declare module 'styled-components' {
    interface DefaultTheme {
        breakpoint: {
            mobile: string;
            tablet: string;
        };
        up: (bp: string, vert?: boolean) => string;
        down: (bp: string, vert?: boolean) => string;
        between: (low: string, high: string, vert?: boolean) => string;
    }
}

export interface IStyleArgument {
    theme: DefaultTheme;
}
const EfficaTheme: DefaultTheme = {
    breakpoint: {
        mobile: '576px',
        tablet: '1200px',
    },
    up: (breakpoint, vertical = false) =>
        `@media (min-${
            vertical ? 'height' : 'width'
        }: calc(${breakpoint} + 0.02px))`,
    down: (breakpoint, vertical = false) =>
        `@media (max-${vertical ? 'height' : 'width'}: ${breakpoint})`,
    between: (breakpointMin, breakpointMax, vertical = false) =>
        `@media (max-${
            vertical ? 'height' : 'width'
        }: ${breakpointMax}) and (min-${
            vertical ? 'height' : 'width'
        }: calc(${breakpointMin} + 0.02px))`,
};

export default EfficaTheme;
