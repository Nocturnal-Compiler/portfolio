import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Neuton:wght@400;700&family=Space+Grotesk:wght@400;700&family=Syne:wght@400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Syne', sans-serif;  // Use Syne for body text
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: 'Neuton', serif;  // Use Neuton for headings
  }

  p {
    margin: 0;
    font-family: 'Syne', sans-serif;  // Use Syne for paragraph text
  }
`;

export default GlobalStyle;
