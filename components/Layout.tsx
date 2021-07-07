import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: white;
`;

const Layout: React.FC = ({children}) => {
    return (
        <Wrapper>
            <Navbar />
            {children}
            <Footer />
        </Wrapper>
    );
};

export default Layout;
