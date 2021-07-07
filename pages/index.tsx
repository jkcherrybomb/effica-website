import Link from 'next/link';
import {Localized} from '../contexts/LanguageContext';
export default function Home() {
    return (
        <div>
            <Localized lang={'pl'}>
                <h1>EFFICA</h1>
                <i>wdrożenia, upgrade, utrzymanie systemów SAP</i>
                <h2>Zaktualizuj swój SAP do SAP S/4 HANA juz dziś</h2>
                <Link href={'/Actualise'}>
                    <a>Poznaj szczegóły</a>
                </Link>
                <h2>Konsultanci</h2>
                <p>
                    Dysponujemy zespołem konsultantów technicznych BASIS oraz
                    konsultantów funkcjonalnych:
                </p>
                <ul>
                    <li>logistyki (PP MM SD CRM PS CS PM),</li>
                    <li>finansów (FI CO TR),</li>
                    <li>hurtowni danych BW.</li>
                </ul>
                <p>Dołącz do naszego zepsołu</p>
                <Link href={'/CareerOpportunities'}>
                    <a>Oferty pracy</a>
                </Link>
                <h2>Partnerzy</h2>
                <p>Firmie EFFICA zaufali między innymi:</p>
                <p>Accenture Polska</p>
                <p>IBM Polska</p>
                <p>Prokom Software SA</p>
                <h5>(to będzie w jednym rzędzie z pod obrazkami jak coś)</h5>
            </Localized>
            <Localized lang={'en'}>
                <h1>EFFICA</h1>
                <i>Implementing, upgrading and maintaing SAP systems</i>
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
                <p>Accenture Polska</p>
                <p>IBM Polska</p>
                <p>Prokom Software SA</p>
                <h5>(to będzie w jednym rzędzie z pod obrazkami jak coś)</h5>
            </Localized>
        </div>
    );
}
