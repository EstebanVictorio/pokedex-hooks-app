import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  html, body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Helvetica;
    font-weight: bold;
    color: cyan;
    background-color: #282C34;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`



const Main = ({children}) => <div>
<GlobalStyle/>
  {children}
</div>

export default Main
