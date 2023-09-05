import logo from './logo.svg';
import './styles.js';
import { GlobalStyle } from './styles.js';
import { AppRoutes } from './routes';
import styled,{createGlobalStyle} from 'styled-components';
// const GlobalStyle =createGlobalStyle `
// * {
//    margin: 0;
//    padding: 0;
//    box-sizing: border-box;
//  }
 
//  *:before,
//  *:after {
//    box-sizing: border-box;
//  }
 
//  a,
//  a:visited {
//    text-decoration: none;
//    font-family: 'StratosSkyeng', sans-serif;
//    cursor: pointer;
//  }
 
//  button,
//  ._btn {
//    cursor: pointer;
//  }
 
//  ul li {
//    list-style: none;
//  }
 

 
//  html,
//  body {
//    width: 100%;
//    height: 100%;
//    font-family: 'StratosSkyeng', sans-serif;
//    color: #FFFFFF;
//  }
// `
const Wrapper = styled.div`
   width: 100%;
   min-height: 100vh;
   background-color: #0c1317;
 }`
function App() {
  return (
    <Wrapper>
      <GlobalStyle/>
      <AppRoutes  />
    </Wrapper>
  );
}

export default App;
