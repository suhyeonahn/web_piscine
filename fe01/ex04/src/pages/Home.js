import Menu from '../components/Menu'
import Body from '../components/Body'
import Header from '../components/Header'
import Container from '../components/Container';


function Home() {
      return (
        <>
        <Header />
        <Container>
          <Menu />
          <Body />
        </Container>
        </>
     );
 }

export default Home;