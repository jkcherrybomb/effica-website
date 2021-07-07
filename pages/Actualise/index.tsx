import {Localized} from '../../contexts/LanguageContext';
const ActualisePage: React.FC = () => {
    return (
        <div>
            <Localized lang={'en'}>
                <h2>Update your SAP to SAP S/4 HANA</h2>
                <p>
                    The SAP S/4 HANA system is a new generation bsuiness tool,
                    which was built on a well-known in-memory database SAP HANA.
                    Adjust your software to the challanges of the modern world
                    of technology.
                </p>
                <h5>Report in real time</h5>
                <h5>Automate processes.</h5>
                <p>
                    Not only does the SAP HANA software make analytical work
                    easier, but also suggests optimal solution for specific
                    cases.
                </p>
                <h5>
                    Work with HANA using mobile devices and the internet from
                    any place in earth.
                </h5>
                <p>Ask as about more information on SAP HANA.</p>
            </Localized>
            <Localized lang={'pl'}>
                <h2>Zaktualizuj swój SAP do SAP S/4 HANA</h2>
                <p>
                    SAP S/4 HANA to nowej generacji narzędzie biznesowe, które
                    zbudowane zostało na znanej już zaawansowanej platformie
                    pamięciowej SAP HANA. Dostosuj oprogramowania do wyzwań
                    cyfrowego świata XXI wieku.
                </p>
                <p>Raportuj w czasie rzeczywistym.</p>
                <p>
                    Automatyzuj procesy. Oprogramowanie SAP HANA poza
                    ułatwieniem pracy analitycznej samo sugeruje optymalne
                    rozwiązania dla konkretnych przypadków.
                </p>
                <p>
                    Pracuj z HANA poprzez urządzenia mobilne i internet z
                    dowolnego miejsca na ziemi.
                </p>
                <p>Zapytaj nas o więcej na temat SAP HANA.</p>
            </Localized>
        </div>
    );
};
export default ActualisePage;
