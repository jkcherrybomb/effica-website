import {ComponentType, createElement, FunctionComponent} from 'react';
import ColumnLayoutElement from '../column-layout-element/ColumnLayoutElement';
import AspectImage from '../aspect-image/AspectImage';
import {H1, P, TextAlign} from '../text/TextComponents';
import ElevatedBox from '../elevated-box/ElevatedBox';
import styled from 'styled-components';

type FeatureProps = {
    image: string;
    title: ComponentType;
    text: ComponentType;
};

const ImgBox = styled(ElevatedBox)`
    margin: auto;
    width: 130px;
    max-width: 30vw;
`;

const FeatureWrapper = styled(ColumnLayoutElement)`
    padding: 40px;
`;

const Feature: FunctionComponent<FeatureProps> = (props) => {
    return (
        <FeatureWrapper
            normalColumns={3}
            tabletColumns={2}
            mobileColumns={1}
            vertAlign={'top'}>
            <ImgBox useGrayBackground={false}>
                <AspectImage src={props.image} aspect={1} />
            </ImgBox>
            <H1 align={TextAlign.Center}>{createElement(props.title)}</H1>
            <P align={TextAlign.Justify}>{createElement(props.text)}</P>
        </FeatureWrapper>
    );
};

export default Feature;
