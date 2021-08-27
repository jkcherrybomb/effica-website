import styled from 'styled-components';
import {addProps} from '../../utils/ComponentUtils';
import {EfficaStyleArgument} from '../../styles/theme';

type ColumnLayoutElementProps = {
    normalColumns?: number;
    tabletColumns?: number;
    mobileColumns?: number;
    vertAlign?: 'middle' | 'top' | 'bottom';
};

const ColumnLayoutElement = styled(
    addProps<ColumnLayoutElementProps>()(styled.div``),
)`
    vertical-align: ${(p) => p.vertAlign ?? 'middle'};

    display: inline-block;

    ${(p: EfficaStyleArgument) => p.theme.up(p.theme.breakpoint.tablet)} {
        ${(p) =>
            p.normalColumns == undefined
                ? 'display: none'
                : `width: ${100 / p.normalColumns}%`};
    }

    ${(p: EfficaStyleArgument) =>
        p.theme.between(p.theme.breakpoint.mobile, p.theme.breakpoint.tablet)} {
        ${(p) =>
            p.tabletColumns == undefined
                ? 'display: none'
                : `width: ${100 / p.tabletColumns}%`};
    }

    ${(p: EfficaStyleArgument) => p.theme.down(p.theme.breakpoint.mobile)} {
        ${(p) =>
            p.mobileColumns == undefined
                ? 'display: none'
                : `width: ${100 / p.mobileColumns}%`};
    }
`;

export default ColumnLayoutElement;
