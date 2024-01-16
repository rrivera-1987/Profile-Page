import { useRef } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import TechTransition from '../img/TechTransition.png';

const Homepage = () => {

    return (
        <Container style={{
            backgroundImage: `url(${TechTransition})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh'
        }}>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-lg-12 text-center">
                        <hr style={{ marginBottom: '3rem' }} />
                        <h1 className="font-weight-bold mb-3" 
                            style={{ fontFamily: 'Bungee Spice', color: '#cc5500' }}>Ramon A. Rivera</h1>
                        <h1 className="font-weight-bold" 
                            style={{ fontFamily: 'Bungee Spice', color: '#cc5500' }}>Tech Apprentice</h1>
                        <hr className="divider divider-light" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Homepage;