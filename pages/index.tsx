import Link from 'next/link';
import {Localized} from '../contexts/LanguageContext';

export default function Home() {
    return (
        <div>
            <Localized lang={'pl'}>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter"
                    rel="stylesheet"
                />
                <h1>EFFICA</h1>
                <i>wdrożenia, upgrade, utrzymanie systemów SAP</i>
                <h2>O nas</h2>
                <p>
                    Firma EFFICA istnieje od 2004 roku. Świadczymy usługi w
                    zakresie implementacji i aktualizacji systemu SAP oraz
                    optymalizacji funkcjonalności SAP w zakresie procesów
                    przemysłowych i organizacji projektów dla klientów (System
                    projektowy SAP), Controllingu, Gospodarki remontowej oraz
                    Organizacja bezpiecznej pracy (Work Clearance Management )
                    systemu SAP S/4 Hana. Zajmujemy sie też integracją SAP z
                    serwisami webowymi w technologiach SharePoint oraz
                    DotNetNuke. Regularnie współpracujemy i świadczymy
                    podwykonawstwo dla dużych przedsiębiorstw informatycznych.
                    Nasi konsultanci pracują przy projektach na terenie Polski i
                    Unii Europejskiej. W ramach pełnego cyklu życia systemu
                    zajmujemy się także outsourcingiem systemów SAP.
                </p>
                <h3>Zaktualizuj swój SAP do SAP S/4 HANA juz dziś</h3>
                <Link href={'/Actualise'}>
                    <a>Poznaj szczegóły</a>
                </Link>
                <h2>Konsultanci</h2>
                <p>
                    Dysponujemy zespołem konsultantów technicznych BASIS oraz
                    konsultantów funkcjonalnych:
                </p>
                <ul>
                    <li>
                        logistyki P2P, P2S, O2C (PP, MM, SD, CRM, PS, CS, PM),
                    </li>
                    <li>finansów R2R (FI, CO),),</li>
                    <li>hurtowni danych BW.</li>
                </ul>
                <p>Dołącz do naszego zepsołu</p>
                <Link href={'/CareerOpportunities'}>
                    <a>Oferty pracy</a>
                </Link>
                <h2>Partnerzy</h2>
                <p>Firmie EFFICA zaufali między innymi:</p>
                <p>Saint gobain</p>
                <p>Oerlikon</p>
                <p>Eurogaz</p>
                <p>Moog</p>
                <p>Cargotech</p>
                <p>Energa</p>
                <p>Alstom</p>
                <p>Accenture Polska</p>
                <p>IBM Polska</p>
                <h5>(to będzie w jednym rzędzie z pod obrazkami jak coś)</h5>
            </Localized>
            <Localized lang={'en'}>
                <h1>EFFICA</h1>
                <i>Implementing, upgrading and maintaing SAP systems</i>
                <h2>About us</h2>
                <p>
                    EFFICA is a Sopot, Poland based company since 2004. We offer
                    a range of services in Project System, Controlling, Plant
                    Maintenance and Work Clearance Management modules of the SAP
                    R/3 business solution. We are also in the business of
                    integrating SAP with Web portals based on SharePoint and
                    DotNetNuke technology.
                </p>
                <h2>Upgrade your system to SAP S/4 HANA today</h2>
                <Link href={'/Actualise'}>
                    <a>Find out more</a>
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
                    <a>Career Opportunities</a>
                </Link>
                <h2>Partners</h2>
                <p>EFFICA has been trusted by:</p>
                <p>Saint gobain</p>
                <p>Oerlikon</p>
                <p>Eurogaz</p>
                <p>Moog</p>
                <p>Cargotech</p>
                <p>Energa</p>
                <p>Alstom</p>
                <p>Accenture Polska</p>
                <p>IBM Polska</p>
                <h5>(to będzie w jednym rzędzie z pod obrazkami jak coś)</h5>
            </Localized>
        </div>
    );
}
