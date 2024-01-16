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
                        <button 
                            style={{
                                backgroundColor: 'transparent', // Clear background
                                color: '#cc5500', // Text color
                                border: '2px solid #000000', // Black border
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontFamily: 'Bungee Spice',
                                fontSize: '1.6rem',
                                marginTop: '20px',
                                transition: 'all 0.3s ease' // Smooth transition for hover effect
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#003366'} // Navy blue background on hover
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'} // Transparent background off hover
                            onFocus={(e) => e.currentTarget.style.backgroundColor = '#003366'} // Navy blue background on focus
                            onBlur={(e) => e.currentTarget.style.backgroundColor = 'transparent'} // Transparent background off focus
                        >
                            Hire Me!
                        </button>
                        <hr className="divider divider-light" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Homepage;