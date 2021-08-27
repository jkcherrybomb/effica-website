import {Localized} from '../contexts/LanguageContext';
const JunCon: React.FC = () => {
    return (
        <div>
            <Localized lang={'en'}>
                <h3>Position: Junior CO Consultant</h3>
                <p>City: Sopot</p>
                <p>Job description:</p>
                <ul>
                    <li>
                        performing consulting services country-wide and abroad,
                    </li>
                    <li>constant development of own skills </li>
                </ul>
                <p>Requirements: </p>
                <ul>
                    <li>
                        master's degree - economics or information technology,
                    </li>
                    <li>
                        proficiency in English or German, spoken and written,
                    </li>
                    <li>high grade point average in university, </li>
                    <li>internship or scholarship abroad, </li>
                    <li>knowledge of structured query language (SQL), </li>
                    <li>
                        knowledge of SAP R/3 system or ABAP programming skills,
                    </li>
                    <li>resiliance to stress, </li>
                    <li>creativity, </li>
                    <li>analytical thinking, </li>
                    <li>communicative skills, </li>
                    <li>good knowledge of Office suite, </li>
                    <li>
                        knowledge of the Java programming language will be a
                        bonus
                    </li>
                </ul>
                <p>Selected candidates will be offered: </p>
                <ul>
                    <li>
                        opportunity for professional development under the
                        guidance of experienced consultants,
                    </li>
                    <li>attractive system of remuneration,</li>
                    <li>professional training</li>
                </ul>
            </Localized>
            <Localized lang={'pl'}>
                <h3>Stanowisko: Junior Consultant</h3>
                <p>Miejsce: Sopot</p>
                <p>Zakres obowiązków:</p>
                <ul>
                    <li>
                        świadczenie usług konsultacyjnych w kraju i zagranicą,
                    </li>
                    <li>stałe podnoszenie poziomu własnych umiejętności </li>
                </ul>
                <p>Od Kandydatów oczekujemy: </p>
                <ul>
                    <li>
                        wykształcenie wyższe - kierunki ekonomiczne lub
                        informatyczne,
                    </li>
                    <li>
                        biegła znajomość języka angielskiego lub niemieckiego w
                        mowie i piśmie,
                    </li>
                    <li>wysoka średnia ocen ze studiów, </li>
                    <li>staż lub stypendium za granicą, </li>
                    <li>znajomość jęzka zapytań SQL, </li>
                    <li>
                        znajomość systemu SAP R/3 lub umiejętność programowania
                        w języku ABAP,
                    </li>
                    <li>odporność na stres,</li>
                    <li>kreatywność, </li>
                    <li>zdolnosci analityczne, </li>
                    <li>komunikatywność, </li>
                    <li>biegła obsługa pakietu Office, </li>
                    <li>znajomość języka programowania Java mile widziana, </li>
                </ul>
                <p>W zamian wybranym kandydatom oferujemy: </p>
                <ul>
                    <li>profesjonalne szkolenia,</li>
                    <li>
                        możliwość rozwoju zawodowego pod okiem doświadczonych
                        konsultantów,
                    </li>
                    <li>atrakcyjny system wynagradzania </li>
                </ul>
            </Localized>
        </div>
    );
};
export default JunCon;
