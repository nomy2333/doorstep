import Header from '../src/components/header';
import Footer from '../src/components/footer';
// import FormTable from '../src/components/formtable';
import FormPage from '../src/pages/formpage';
import ThanksPage from '../src/pages/thankspage';
import DisplayPage from '../src/pages/displaypage';
import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <Header />
      <main>
        <Container>
          <Router>
            <Routes>
              <Route path='/' element={<FormPage />} exact />
              <Route path='/thanks/:data' element={<ThanksPage />} exact />
              <Route path='/display' element={<DisplayPage />} exact />
            </Routes>
          </Router>

        </Container>

      </main>
      <Footer />
    </div>
  );
}

export default App;
