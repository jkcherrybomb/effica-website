import {addProps} from '../../utils/ComponentUtils';
import styled from 'styled-components';

type AspectImageProps = {
    src: string;
    aspect?: number;
};

const AspectImage = styled(addProps<AspectImageProps>()(styled.div``))`
    padding-top: ${(p) => (p.aspect ?? 1) * 100}%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url('${(p) => p.src}');
    height: 0;
`;

export default AspectImage;
