import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <Menu />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout