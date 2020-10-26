import 'antd/dist/antd.css'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');
  #root {
    height: 100%;
      @media (max-width: 100%) {
      overflow-x:hidden;
      } 
  }
`
