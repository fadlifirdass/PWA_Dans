import {Navbar, Nav, Container} from 'react-bootstrap'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import User from './components/User';

function App() {
  return (
     <div>
       <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/user">User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <BrowserRouter>
          <Routes>
            <Route path='/' element=''/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/user' element={<User/>}/>
          </Routes>
        </BrowserRouter>
     </div>
  );
}

export default App;
