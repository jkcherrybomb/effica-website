import Link from 'next/link';
import {Localized} from '../contexts/LanguageContext';
import styled from 'styled-components';
import Partners from '../components/Partners';
const Wrapperdiv = styled.div``;

const Panorama = styled.img`
    width: 100%;
`;

const InnerWrapper = styled.div`
    padding: 0 15px;
    margin: 0 auto;
    max-width: 1500px;
    align-self: center;
`;

const HeaderLink = styled.a`
    display: inline-block;
    line-height: 20px;
    min-width: 150px;
    font-size: 20px;
    font-weight: 500;
`;

export default function Home() {
    return (
        <Wrapperdiv>
            <Panorama src="/images/WawPink.jpg" />
            <InnerWrapper>
                <Localized lang={'pl'}>
                    <h1>EFFICA</h1>
                    <i>wdrożenia, upgrade, utrzymanie systemów SAP</i>
                    <h2>O nas</h2>
                    <p>
                        Firma EFFICA istnieje od 2004 roku. Świadczymy usługi w
                        zakresie implementacji i aktualizacji systemu SAP oraz
                        optymalizacji funkcjonalności SAP w zakresie procesów
                        przemysłowych i organizacji projektów dla klientów
                        (System projektowy SAP), Controllingu, Gospodarki
                        remontowej oraz Organizacja bezpiecznej pracy (Work
                        Clearance Management ) systemu SAP S/4 Hana. Zajmujemy
                        sie też integracją SAP z serwisami webowymi w
                        technologiach SharePoint oraz DotNetNuke. Regularnie
                        współpracujemy i świadczymy podwykonawstwo dla dużych
                        przedsiębiorstw informatycznych. Nasi konsultanci
                        pracują przy projektach na terenie Polski i Unii
                        Europejskiej. W ramach pełnego cyklu życia systemu
                        zajmujemy się także outsourcingiem systemów SAP.
                    </p>
                    <h3>Zaktualizuj swój SAP do SAP S/4 HANA juz dziś</h3>
                    <Link href={'/Actualise'}>
                        <HeaderLink>Poznaj szczegóły</HeaderLink>
                    </Link>
                    <h2>Konsultanci</h2>
                    <p>
                        Dysponujemy zespołem konsultantów technicznych BASIS
                        oraz konsultantów funkcjonalnych:
                    </p>
                    <ul>
                        <li>logistyki (PP MM SD CRM PS CS PM),</li>
                        <li>finansów (FI CO TR),</li>
                        <li>hurtowni danych BW.</li>
                    </ul>
                    <h2>Dołącz do naszego zepsołu</h2>
                    <Link href={'/CareerOpportunities'}>
                        <HeaderLink>Oferty pracy</HeaderLink>
                    </Link>
                    <h2>Partnerzy</h2>
                    <p>Firmie EFFICA zaufali między innymi:</p>
                </Localized>
                <Localized lang={'en'}>
                    <h1>EFFICA</h1>
                    <i>Implementing, upgrading and maintaing SAP systems</i>
                    <h2>About us</h2>
                    <p>
                        EFFICA is a Sopot, Poland based company since 2004. We
                        offer a range of services in Project System,
                        Controlling, Plant Maintenance and Work Clearance
                        Management modules of the SAP R/3 business solution. We
                        are also in the business of integrating SAP with Web
                        portals based on SharePoint and DotNetNuke technology.
                    </p>
                    <h2>Upgrade your system to SAP S/4 HANA today</h2>
                    <Link href={'/Actualise'}>
                        <HeaderLink>Find out more</HeaderLink>
                    </Link>
                    <h2>Our Consultants</h2>
                    <p>We have a team of ABAP and functional consultants:</p>
                    <ul>
                        <li>logistics (PP MM SD CRM PS CS PM),</li>
                        <li>finanses (FI CO TR),</li>
                        <li>BW data warehouses.</li>
                    </ul>
                    <h2>Join our team</h2>
                    <Link href={'/CareerOpportunities'}>
                        <HeaderLink>Career Opportunities</HeaderLink>
                    </Link>
                    <h2>Partners</h2>
                    <p>EFFICA has been trusted by:</p>
                </Localized>
            </InnerWrapper>
            <Partners />
        </Wrapperdiv>
    );
}
