import './Home.css';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div id='home'>
            <div className="bg-img">
                <div className="container">
                    <Navbar />
                    <div className='intro-start'>Didn't found your <br />
                        medicine ??</div>
                    <div className='intro-end'>Search and <br />
                        find here...</div>
                </div>
            </div>
        </div>
    )
}

export default Home;