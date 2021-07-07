import Link from 'next/link';
import {Localized} from '../contexts/LanguageContext';
const Navbar: React.FC = () => {
    return (
        <nav>
            <Localized lang={'en'}>
                <Link href={'/'}>
                    <b> Main Page | </b>
                </Link>
                <Link href={'/Services'}>
                    <b> Our Services | </b>
                </Link>
                <Link href={'/CareerOpportunity'}>
                    <b> Career Opportunities | </b>
                </Link>
                <Link href={'/Actualise'}>
                    <b> SAP S/4 HANA | </b>
                </Link>
            </Localized>
            <Localized lang={'pl'}>
                <Link href={'/Services'}>
                    <b> Nasze Usługi | </b>
                </Link>
                <Link href={'/CareerOpportunity'}>
                    <b> Kariera | </b>
                </Link>
                <Link href={'/Actualise'}>
                    <b> SAP S/4 HANA | </b>
                </Link>
            </Localized>
        </nav>
    );
};
export default Navbar;
