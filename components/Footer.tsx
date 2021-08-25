import {Localized} from '../contexts/LanguageContext';
import styled from 'styled-components';
import Image from 'next/image';
import {addProps} from '../utils/ComponentUtils';

const Wrapper = styled(addProps()(styled.div``))`
    background: #89c9f0;
`;

const LinksWrapper = styled(addProps()(styled.div``))`
    float: right;
`;

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <LinksWrapper>
                <Image src="/images/DarkLogo.png" width={400} height={130} />
            </LinksWrapper>
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
