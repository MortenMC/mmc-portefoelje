import React from 'react';
import './App.css';
import Layout from './Layout';


import {StartPage, StartPageCards} from './styled'

function App() {
  return (
    <div style={{backgroundColor: "#222222", height: "100vh"}}>
      <Layout>
        <StartPage>
          <StartPageCards>Siden skal være så clean som muligt. Lav en StartPage component, hvor du kan lave "Kortene"</StartPageCards>
        </StartPage>
      </Layout>
    </div>
  );
}

export default App;
