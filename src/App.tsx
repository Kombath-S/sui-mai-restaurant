import styled from 'styled-components';
import './App.css'
import { Header } from './components/Header';
import GlobalStyle from './utils/GlobalStyle';
import { softerPink } from './utils/colors';
import { View } from './components/View';


const Outer = styled.div`
  background: ${softerPink};
  max-width: 100vw;
  /* overflow-x:hidden; */
`

const AppStyle = styled.div`
  min-height: 100vh;
  font-family: 'PortLligat';
  margin: 0 auto;
  padding:  10px;
  max-width: 1440px;
  
`


function App() {


  return (
    <Outer>
      <AppStyle>
        <GlobalStyle />
        <Header />
        <View />
      </AppStyle>
    </Outer>
  )
}

export default App
