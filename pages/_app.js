// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';


function App({ Component, pageProps }) {
  
  return(
    <Component {...pageProps} />

    )
}

export default App;
