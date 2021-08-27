import JunCon from '../../components/JunCon';
import Senior from '../../components/Senior';
import SysAdmin from '../../components/SysAdmin';
import {Localized} from '../../contexts/LanguageContext';
import styled from 'styled-components';

const InnerWrapper = styled.div`
    padding: 0 15px;
    margin: 0 auto;
    max-width: 1500px;
    align-self: center;
`;

const CareerOpportunityPage: React.FC = () => {
    return (
        <div>
            <InnerWrapper>
                <SysAdmin />
                <JunCon />
                <Senior />
                <Localized lang={'pl'}>
                    <h4>
                        Wszystkie zainteresowane osoby prosimy o składanie
                        zgłoszeń zawierających list motywacyjny, zdjęcie, CV
                        (życiorys) i w przypadku Kandydatów na stanowisko Junior
                        Consultant skan ocen ze studiów na adres e-mail:
                    </h4>
                    <h3>biuro@effica.pl</h3>
                    <h6>
                        Prosimy o dopisanie na CV następującej klauzuli:
                        "Wyrażam zgodę na przetwarzanie moich danych osobowych
                        zawartych w mojej ofercie pracy dla potrzeb niezbędnych
                        do realizacji procesu rekrutacji /zgodnie z Ustawą z dn.
                        29.08.97 roku o Ochronie danych osobowych Dz.Ust.nr 133
                        poz.883"
                    </h6>
                </Localized>
                <Localized lang={'en'}>
                    <h4>
                        Please send your cover letter, CV, photo and a
                        documented average of grades from the course of studies
                        to the following e-mail address:
                    </h4>
                    <h3>biuro@effica.pl</h3>
                </Localized>
            </InnerWrapper>
        </div>
    );
};
export default CareerOpportunityPage;
