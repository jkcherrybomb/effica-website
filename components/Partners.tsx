import Link from 'next/link';
import {Localized} from '../contexts/LanguageContext';
import styled from 'styled-components';
const Partnersdiv = styled.div`
    text-align: center;
`;
const Pics = styled.img`
    text-align: center;
    width: 200px;
`;

const Partners: React.FC = () => {
    return (
        <Partnersdiv>
            <Pics src="/images/sg.png" />
            <p>Saint gobain</p>
            <Pics src="/images/oerlikon.png" />
            <p>Oerlikon</p>
            <Pics src="/images/eurogas-1.svg" />
            <p>Eurogaz</p>
            <Pics src="/images/moog.png" />
            <p>Moog</p>
            <Pics src="/images/cargotec-logo.png" />
            <p>Cargotech</p>
            <Pics src="/images/energa.jpg" />
            <p>Energa</p>
            <Pics src="/images/alstom.png" />
            <p>Alstom</p>
            <Pics src="/images/accenture.png" />
            <p>Accenture</p>
            <Pics src="/images/ibm.png" />
            <p>IBM</p>
        </Partnersdiv>
    );
};
export default Partners;
