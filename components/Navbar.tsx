import Link from 'next/link';
import {Localized} from '../contexts/LanguageContext';
const Navbar: React.FC = () => {
    return (
        <nav>
            <Localized lang={'en'}>
                <Link href={'/'}>
                    <a> Main Page | </a>
                </Link>
                <Link href={'/Services'}>
                    <a> Our Services | </a>
                </Link>
                <Link href={'/CareerOpportunity'}>
                    <a> Career Opportunities | </a>
                </Link>
                <Link href={'/Actualise'}>
                    <a> SAP S/4 HANA | </a>
                </Link>
            </Localized>
            <Localized lang={'pl'}>
                <Link href={'/'}>
                    <a> Strona Główna | </a>
                </Link>
                <Link href={'/Services'}>
                    <a> Nasze Usługi | </a>
                </Link>
                <Link href={'/CareerOpportunity'}>
                    <a> Kariera | </a>
                </Link>
                <Link href={'/Actualise'}>
                    <a> SAP S/4 HANA | </a>
                </Link>
            </Localized>
        </nav>
    );
};
export default Navbar;
