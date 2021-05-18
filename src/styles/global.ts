import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0
}
body {
  background: #777777;
  color: #384052;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font-family: 'Roboto', serif;
  font-size: 16px;
}
`;
