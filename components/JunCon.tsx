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
                <p>Zakres obowi??zk??w:</p>
                <ul>
                    <li>
                        ??wiadczenie us??ug konsultacyjnych w kraju i zagranic??,
                    </li>
                    <li>sta??e podnoszenie poziomu w??asnych umiej??tno??ci </li>
                </ul>
                <p>Od Kandydat??w oczekujemy: </p>
                <ul>
                    <li>
                        wykszta??cenie wy??sze - kierunki ekonomiczne lub
                        informatyczne,
                    </li>
                    <li>
                        bieg??a znajomo???? j??zyka angielskiego lub niemieckiego w
                        mowie i pi??mie,
                    </li>
                    <li>wysoka ??rednia ocen ze studi??w, </li>
                    <li>sta?? lub stypendium za granic??, </li>
                    <li>znajomo???? j??zka zapyta?? SQL, </li>
                    <li>
                        znajomo???? systemu SAP R/3 lub umiej??tno???? programowania
                        w j??zyku ABAP,
                    </li>
                    <li>odporno???? na stres,</li>
                    <li>kreatywno????, </li>
                    <li>zdolnosci analityczne, </li>
                    <li>komunikatywno????, </li>
                    <li>bieg??a obs??uga pakietu Office, </li>
                    <li>znajomo???? j??zyka programowania Java mile widziana, </li>
                </ul>
                <p>W zamian wybranym kandydatom oferujemy: </p>
                <ul>
                    <li>profesjonalne szkolenia,</li>
                    <li>
                        mo??liwo???? rozwoju zawodowego pod okiem do??wiadczonych
                        konsultant??w,
                    </li>
                    <li>atrakcyjny system wynagradzania </li>
                </ul>
            </Localized>
        </div>
    );
};
export default JunCon;
