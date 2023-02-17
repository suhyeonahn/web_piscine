import Container from './Container'
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer'

const Layout = (props) => {
    return (
        <Container>
            <Header />
            <Navigation />
            <main>
                {props.children}
            </main>
        </Container>
    );
}

export default Layout