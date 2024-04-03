import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';


function App() {

  const appName = `RND React APP`
  const version = process.env.REACT_APP_VERSION

  return (
    <>
      <Header appName={appName}/>
      <Content/>
      <Footer version={version}/>
    </>
  );
}

export default App;
