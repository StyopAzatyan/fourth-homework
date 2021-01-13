import './App.css';
import Layout from './component/Layout/Layout';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
// import Form from './container/Form/Form'
import Autentication from "./container/Autentication/Autentication";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
      <main className="app-main-content">
      <Autentication />
      </main>
      <Footer />
      </Layout>
      
    </div>
  );
}

export default App;
