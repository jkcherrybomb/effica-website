import styled from 'styled-components';
import ElevatedBox from '../elevated-box/ElevatedBox';
import {EfficaStyleArgument} from '../../styles/theme';

const Quad = styled(ElevatedBox)`
    top: 0;
    left: 0;
    z-index: -10;
    position: absolute;
    background-color: ${(p: EfficaStyleArgument) => p.theme.colors.primary};
    opacity: 0.5;
    box-sizing: border-box;
`;

export default Quad;
