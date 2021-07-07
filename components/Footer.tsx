import {Localized} from '../contexts/LanguageContext';
import styled from 'styled-components';
const Wrapper = styled.div`
    background: lightblue;
`;

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <Localized lang={'en'}>
                <h3>Contact us</h3>
                <p>Mobile phone number: +48 505 218 927</p>
                <p>E-mail: biuro@effica.pl </p>
                <p>Address: Tatrzańska 3, 81-814, Sopot, Poland </p>
            </Localized>
            <Localized lang={'pl'}>
                <h3>Skontaktuj się z nami</h3>
                <p>Numer telefonu: +48 505 218 927</p>
                <p>E-mail: biuro@effica.pl </p>
                <p>Adres: Tatrzańska 3, 81-814, Sopot, Poland </p>
            </Localized>
        </Wrapper>
    );
};
export default Footer;
