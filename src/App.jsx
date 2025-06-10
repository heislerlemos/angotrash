import './assets/css/App.css'
import 'bulma/css/bulma.css';
import Navbar from './Navbar';
import Cards from './Cards';


function App() {

    return (
        <>
            <Navbar />
            <br />
            <div class="title">
            Choose Your Skip Size
            </div>
            <div class="subtitle">
            Select the skip size that best suits your needs
            </div>
            <br />
            <br />
            <Cards />
        </>
    )
}

export default App;
