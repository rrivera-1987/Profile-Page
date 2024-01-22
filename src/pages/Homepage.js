import { useRef } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import TechTransition from '../img/TechTransition.png';
import logos from '../components/logoImports';

const Homepage = () => {

    return (
        <>
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
                                style={{ fontFamily: 'Bungee Spice', fontSize: '50px' }}>Ramon A. Rivera</h1>
                            <h1 className="font-weight-bold mb-3"
                                style={{ fontFamily: 'Bungee Spice', fontSize: '40px' }}>Tech Apprentice</h1>
                            <button
                                style={{
                                    backgroundColor: 'transparent', // Clear background
                                    // color: '#cc5500', Text color
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
                        </div>
                    </div>
                </div>
            </Container>
            <Container fluid style={{ backgroundColor: '#003366', paddingTop: '50px', paddingBottom: '50px' }}>
                <div className='container text-center'
                    style={{ border: '2px round transparent', backgroundColor: 'white', padding: '20px' }}>
                    <h1 className='font-weight-bold mb-3'
                        style={{
                            fontFamily: 'Indie Flower',
                            textDecoration: 'underline'
                        }}>Programming Skills</h1>
                    <div className='row justify-content-center'>
                        <div className='col-3'>
                            <img src={logos.html} alt='HTML5' style={{ width: '215px', height: 'auto' }} />
                        </div>
                        <div className='col-3'>
                            <img src={logos.css} alt='CSS3' style={{ width: '250px', height: 'auto' }} />
                        </div>
                        <div className='col-3'>
                            <img src={logos.javascript} alt='JavaScript' style={{ width: '350px', height: 'auto' }} />
                        </div>
                        <div className='col-3'>
                            <img src={logos.nodeJS} alt='NodeJS' style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-3'>
                            <img src={logos.python} alt='Python' style={{ width: '350px', height: '250px' }} />
                        </div>
                        <div className='col-3'>
                            <img src={logos.react} alt='React' style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className='col-3'>
                            <img src={logos.reactNative} alt='React Native' style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className='col-3'>
                            <img src={logos.redux} alt='Redux' style={{ width: '330px', height: '330px' }} />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Homepage;