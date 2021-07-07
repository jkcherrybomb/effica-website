import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
    interface DefaultTheme {
        myRed: string;
        breakpoint: {
            mobile: string;
            tablet: string;
        };
        up: (bp: string, vert?: boolean) => string;
        down: (bp: string, vert?: boolean) => string;
        between: (low: string, high: string, vert?: boolean) => string;
    }
}

const EfficaTheme: DefaultTheme = {
    myRed: '#fcc',
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
