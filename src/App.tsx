import styled from 'styled-components';
import './App.css'
import { Header } from './components/Header';
import GlobalStyle from './utils/GlobalStyle';
import { softerPink } from './utils/colors';
import { View } from './components/View';
import { BPoints } from './components/ui';


const Outer = styled.div`
  position: relative;
  background: ${softerPink};
  max-width: 100vw;
  min-width: 400px;
  overflow:hidden;
  @media screen and (min-width:${BPoints[0]}px) and (max-width:${BPoints[1]}px){
      max-height: 100vh;
      overflow: hidden !important;
  }
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
