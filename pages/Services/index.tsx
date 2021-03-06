import {Localized} from '../../contexts/LanguageContext';
import styled from 'styled-components';

const InnerWrapper = styled.div`
    padding: 0 15px;
    margin: 0 auto;
    max-width: 1500px;
    align-self: center;
`;

const ServicesPage: React.FC = () => {
    return (
        <div>
            <InnerWrapper>
                <Localized lang={'en'}>
                    <p>
                        <b>EFFICA</b> is a Sopot, Poland based company since
                        2004. We offer a range of services in Project System,
                        Controlling, Plant Maintenance and Work Clearance
                        Management modules of the SAP R/3 business solution. We
                        are also in the business of integrating SAP with Web
                        portals based on SharePoint and DotNetNuke technology.
                    </p>
                    <p>
                        We cooperate and subcontract works with major Enterprise
                        Information Technology companies. Our consultants
                        participate in projects in entire Poland and in European
                        Union countries.
                    </p>
                    <p>
                        For a full life-cycle maintenance, we are also involved
                        with SAP system outsourcing.
                    </p>
                    <b>EFFICA offers its competences in the following scope:</b>
                    <ul>
                        <li>Preconfigured implementations </li>
                        <li>Data migration </li>
                        <li> Corporate solution rollout </li>
                        <li>ERP-class solutions integration </li>
                        <li>Inter-system integration</li>
                        <li>Implementation support </li>
                        <li>SAP Support - caretaking of productive systems </li>
                        <li>dotnetnuke - Sharepoint Portals</li>
                    </ul>
                    <b>Outsourcing</b>
                    <p>
                        In the area of outsourcing Effica provides support
                        services to mySAP system users, remote administration
                        services and services in bounds of Application Services
                        Provider. Support services for applications and
                        technology are concentrated in two dedicated service
                        centres - in Sopot and Warsaw.
                    </p>
                    <b>Nearshoring </b>
                    <p>
                        Nearshoring is a client's comfort of concentration on
                        the basic activity. The decisive factor for a successful
                        nearshoring cooperation is a competent partner. It
                        constitutes the IT security guarantee for the company
                        that uses nearshoring of their services or equipment.
                        Nearshoring is a cost-effective activity for companies.
                        It allows clients to receive high quality services at a
                        very attractive cost level.
                    </p>
                    <p>Client's benefits from nearshoring:</p>
                    <ul>
                        <li>Concentration on the main business activity</li>
                        <li>Access to the highest technology</li>
                        <li>Delegation of responsibility</li>
                        <li>Lack of problems with well-qualified staff</li>
                        <li>Decrease of capital expenditures</li>
                        <li>Decrease of number of Client's own fixed assets</li>
                        <li>
                            Easiness of costs' analysis - clear settlement
                            methods
                        </li>
                        <li>Possibility of exact cost planning</li>
                    </ul>
                    <b>Nearshoring services:</b>
                    <p>
                        IT infrastructure outsourcing (of systems other that
                        mySAP)
                    </p>
                    <ul>
                        <li>
                            IT infrastructure management (networks, access and
                            security systems)
                        </li>
                        <li>
                            Support applications' management (electronic mail,
                            operating systems, domain systems)
                        </li>
                        <li>
                            Local user's support (takeover of the IT
                            departments, Effica employees working stationary at
                            the Client's)
                        </li>
                    </ul>
                    <p>SAP systems outsourcing</p>
                    <ul>
                        <li>Remote SAP system administration</li>
                        <li>
                            Hosting, i.e. a lease of servers and Client's
                            systems administration
                        </li>
                        <li>
                            Competence Center - consulting services concerning
                            the remote (electronic and phone) development of the
                            systems used
                        </li>
                    </ul>
                    <p>Audits, pre-outsourcing analysis</p>
                    <p>
                        Effica renders nearshoring services providing its
                        Clients with professional factual service. Good language
                        skills of our staff allow to avoid communication
                        problems. Business and legal knowledge of particular
                        countries, as well as knowledge of particular sectors of
                        business activities guarantees that clients entrust
                        their processes into good hands.
                    </p>
                    <p>
                        Do not hesitate to contact us for more detailed and
                        relevant information.
                    </p>
                </Localized>

                <Localized lang={'pl'}>
                    <p>
                        Firma EFFICA istnieje od 2004 roku. ??wiadczymy us??ugi w
                        zakresie implementacji i aktualizacji systemu SAP a
                        tak??e optymalizacji funkcjonalno??ci SAP w zakresie
                        proces??w przemys??owych i organizacji projekt??w dla
                        klient??w (System projektowy SAP), Controllingu,
                        Gospodarki remontowej oraz Organizacja bezpiecznej pracy
                        (Work Clearance Management) systemu SAP S/4 Hana.
                        Zajmujemy sie te?? integracj?? SAP z serwisami webowymi w
                        technologiach SharePoint oraz DotNetNuke.
                    </p>
                    <p>
                        Regularnie wsp????pracujemy i ??wiadczymy podwykonawstwo
                        dla du??ych przedsi??biorstw informatycznych. Nasi
                        konsultanci pracuj?? przy projektach na terenie Polski i
                        Unii Europejskiej.
                    </p>
                    <p>
                        W ramach pe??nego cyklu ??ycia systemu zajmujemy si?? tak??e
                        outsourcingiem system??w SAP.
                    </p>
                    <b>
                        Firma Effica solidnie i kompetentnie ??wiadczy us??ugi w
                        zakresie:
                    </b>
                    <ul>
                        <li>Wdro??enia prekonfigurowane </li>
                        <li>Migracja danych </li>
                        <li>Rollout rozwi??za?? korporacyjnych </li>
                        <li>Integracja aplikacji klasy ERP </li>
                        <li>Integracja mi??dzysystemowa </li>
                        <li>Wsparcie w implementacji </li>
                        <li>
                            SAP Support - opieka nad dzia??aj??cymi systemami{' '}
                        </li>
                        <li>
                            Tworzenie portali w technologii dotnetnuke -
                            Sharepoint
                        </li>
                    </ul>
                    <b>Outsourcing</b>
                    <p>
                        W ramach us??ug outsourcingowych Effica ??wiadczy us??ugi
                        wsparcia dla u??ytkownik??w systemu mySAP, us??ugi zdalnej
                        administracji oraz us??ugi w ramach Application Services
                        Provider. Us??ugi wsparcia dla technologii i proces??w
                        biznesowych ??wiadczymy w dedykowanych centrach w dw??ch
                        lokalizacjach: w Sopocie oraz w Warszawie.
                    </p>
                    <b>Nearshoring </b>
                    <p>
                        Nearshoring zapewnia klientowi wygodne skupienie si?? na
                        podstawowej dzia??alno??ci. Decyduj??cym czynnikiem udanego
                        nearshoringu jest kompetentny partner. Zapewnia on
                        informacyjne bezpiecze??stwo firmy korzystaj??cej z
                        nearshoringu swoich us??ug lub aktyw??w. Nearshoring to
                        czynno???? korzystna z kosztowego punktu widzenia. Pozwala
                        Klientowi na uzyskanie wysokiego standardu us??ug na
                        bardzo korzystnym pu??apie koszt??w.
                    </p>
                    <p>Korzy??ci z nearshoringu dla klienta:</p>
                    <ul>
                        <li>
                            Skupienie si?? na g??ownym obszarze dzia??alnosci.{' '}
                        </li>
                        <li>Dost??p do najnowszych technologii</li>
                        <li>Delegowanie odpowiedzialno??ci</li>
                        <li>Brak problem??w z kwalifikacjami personelu</li>
                        <li>Obni??enie wydatk??w kapita??owych</li>
                        <li>
                            Zmniejszenie ilo??ci w??asnych ??rodk??w trwa??ych
                            Klienta
                        </li>
                        <li>
                            ??atwo???? analizy koszt??w - jasne metody rozlicze??
                        </li>
                        <li>Mo??liwo???? dok??adnego planowania koszt??w</li>
                    </ul>
                    <b>Nearshoring w us??ugach:</b>
                    <p>
                        Outsourcing infrastruktury IT (system??w innych ni??
                        mySAP)
                    </p>
                    <ul>
                        <li>
                            IT infrastructure management (networks, access and
                            security systems)
                        </li>
                        <li>
                            Support applications' management (electronic mail,
                            operating systems, domain systems)
                        </li>
                        <li>
                            Local user's support (takeover of the IT
                            departments, Effica employees working stationary at
                            the Client's)
                        </li>
                    </ul>
                    <p>Outsourcing system??w SAP</p>
                    <ul>
                        <li>Remote SAP system administration</li>
                        <li>
                            Hosting, i.e. a lease of servers and Client's
                            systems administration
                        </li>
                        <li>
                            Competence Center - consulting services concerning
                            the remote (electronic and phone) development of the
                            systems used
                        </li>
                    </ul>
                    <p>Audyty, analizy pre-outsourcingowe</p>
                    <p>
                        Effica dostarcza us??ugi nearshoringu, zapewniaj??c
                        Klientom profesjonaln?? obs??ug??. Dobre kompetencje
                        j??zykowe naszych konsultant??w pozwalaj?? unikn????
                        problem??w komunikacyjnych. Biznesowa i regulacyjna
                        znajomo???? poszczeg??lnych pa??stw, a tak??e znajomo????
                        specyfiki poszczeg??lnych bran?? dzia??alno??ci biznesowej
                        jest gwarancj??, ??e Klient powierza swoje procesy
                        gospodarcze w dobre r??ce.
                    </p>
                    <p>
                        W celu uzyskania szczeg????owych informacji skontaktuj si??
                        z nami.
                    </p>
                </Localized>
            </InnerWrapper>
        </div>
    );
};

export default ServicesPage;
