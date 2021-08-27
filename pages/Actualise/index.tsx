import {Localized} from '../../contexts/LanguageContext';
import styled from 'styled-components';

const InnerWrapper = styled.div`
    padding: 0 15px;
    margin: 0 auto;
    max-width: 1500px;
    align-self: center;
`;

const ActualisePage: React.FC = () => {
    return (
        <div>
            <InnerWrapper>
                <Localized lang={'en'}>
                    <h2>Update your SAP to SAP S/4 HANA</h2>
                    <p>
                        The SAP S/4 HANA system is a new generation bsuiness
                        tool, which was built on a well-known in-memory database
                        SAP HANA. Adjust your software to the challanges of the
                        modern world of technology.
                    </p>
                    <p>
                        SAP S/4 HANA uses advanced technologies such as
                        artificial intelligence, machine learning and advanced
                        analysis. Thanks to the use of the SAP HANA in-memory
                        data model, all operations are performed in operating
                        memory, which significantly speeds up the generation of
                        all analyzes and forecasts, which in turn facilitates
                        and gives credibility to making the right business
                        decisions.
                    </p>
                    <p>
                        The SAP S/4 HANA ERP system is based on the SAP HANA
                        in-memory database. It is the best column database on
                        the market that offers a significantly simplified data
                        model and incredible speed of operation. Analytical and
                        transactional processes take place on the same database
                        – without separating OLTP and OLAP processing.
                    </p>
                    <h3>Report in real time.</h3>
                    <p>SAP HANA enables stable, flexible decision making.</p>
                    <h3>Automate processes.</h3>
                    <p>
                        Not only does the SAP HANA software make analytical work
                        easier, but also suggests optimal solution for specific
                        cases.
                    </p>
                    <h3>
                        Work with HANA using mobile devices and the internet
                        from any place in earth.
                    </h3>
                    <p>Ask as about more information on SAP HANA.</p>
                </Localized>
                <Localized lang={'pl'}>
                    <h2>Zaktualizuj swój SAP do SAP S/4 HANA</h2>
                    <p>
                        SAP S/4 HANA to nowej generacji narzędzie biznesowe,
                        które zbudowane zostało na znanej już zaawansowanej
                        platformie pamięciowej SAP HANA. Dostosuj oprogramowania
                        do wyzwań cyfrowego świata XXI wieku.
                    </p>
                    <p>
                        SAP S/4 HANA korzysta z zaawansowanych technologii jak
                        sztuczna inteligencja, uczenie maszynowe czy
                        zaawansowane analizy. Dzięki wykorzystaniu modelu danych
                        in-memory SAP HANA, wszelkie operacje wykonywane są w
                        pamięci operacyjnej, co znacznie przyspiesza generowanie
                        wszelkich analiz i prognoz, a to z kolei ułatwia i
                        uwiarygadnia podejmowanie trafnych decyzji biznesowych.
                    </p>
                    <p>
                        System ERP SAP S/4 HANA jest oparty na bazie danych
                        in-memory SAP HANA. To najlepsza na rynku kolumnowa baza
                        danych, która oferuje znacząco uproszczony model danych
                        i niewiarygodną szybkość działania. Procesy analityczne
                        i transakcyjne odbywają się na tej samej bazie danych —
                        bez rozdzielania przetwarzania OLTP i OLAP.
                    </p>
                    <h3>Raportuj w czasie rzeczywistym.</h3>
                    <p>
                        SAP HANA umożliwia stabilne i elastyczne podejmowanie
                        decyzji.
                    </p>
                    <h3>Automatyzuj procesy.</h3>
                    <p>
                        Oprogramowanie SAP HANA poza ułatwieniem pracy
                        analitycznej samo sugeruje optymalne rozwiązania dla
                        konkretnych przypadków.
                    </p>
                    <h3>
                        Pracuj z HANA poprzez urządzenia mobilne i internet z
                        dowolnego miejsca na ziemi.
                    </h3>
                    <p>Zapytaj nas o więcej na temat SAP HANA.</p>
                </Localized>
            </InnerWrapper>
        </div>
    );
};
export default ActualisePage;
