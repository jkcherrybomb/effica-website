import {Localized} from '../contexts/LanguageContext';
import styled from 'styled-components';
import {addProps} from '../utils/ComponentUtils';

const Wrapper = styled(addProps()(styled.div``))`
    background: #c5cfd8;
    height: 250px;
    font-size: 20px;
    padding: 25px 75px 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url('/images/DarkLogo.png');
    background-repeat: no-repeat;
    background-size: 350px;
    background-position: bottom 50px right 100px;
`;

const P = styled.p`
    margin: 0.2em 0;
`;

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <Localized lang={'en'}>
                <h1>Contact us</h1>
                <P>
                    <b>Mobile phone number:</b> +48 505 218 927
                </P>
                <P>
                    <b>E-mail:</b> biuro@effica.pl{' '}
                </P>
                <P>
                    <b>Address:</b> Tatrzańska 3, 81-814, Sopot, Poland{' '}
                </P>
            </Localized>
            <Localized lang={'pl'}>
                <h1>Skontaktuj się z nami</h1>
                <P>
                    <b>Numer telefonu:</b> +48 505 218 927
                </P>
                <P>
                    <b>E-mail:</b> biuro@effica.pl{' '}
                </P>
                <P>
                    <b>Adres:</b> Tatrzańska 3, 81-814, Sopot, Polska{' '}
                </P>
            </Localized>
        </Wrapper>
    );
};
export default Footer;
