import { useRef } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
//import { Link } from 'react-router-dom';
import TechTransition from '../img/TechTransition.png';
import logos from '../components/logoImports';
import profilePic from '../img/Profile-Picture.jpg';

const Homepage = () => {
    const programmingSkillsRef = useRef(null);

    const scrollProgrammingSkills = () => {
        programmingSkillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const textStyle = {
        fontSize: '20px', // Adjust the font size as needed
        marginBottom: '10px'
    };

    const labelStyle = {
        fontWeight: 'bold', // Make labels bold
        fontSize: '25px', // Keep label font size consistent
        marginBottom: '5px'
    };

    const [aboutMeRef, aboutMeInView] = useInView({
        triggerOnce: true,
        threshold: 0.25,
    });

    const [programmingSkillsInViewRef, programmingSkillsInView] = useInView({
        triggerOnce: true,
        threshold: 0.25,
    });

    const slideUpAnimation = useSpring({
        from: { transform: 'translateY(30px)', opacity: 0 },
        to: aboutMeInView || programmingSkillsInView ? { transform: 'translateY(0px)', opacity: 1 } : {},
        config: { tension: 300, friction: 34 },
    });

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
                            <hr style={{ marginBottom: '4rem' }} />
                            <h1 className="font-weight-bold mb-3"
                                style={{ fontFamily: 'Bungee Spice', fontSize: '50px' }}>Ramon A. Rivera</h1>
                            <h1 className="font-weight-bold mb-3"
                                style={{ fontFamily: 'Bungee Spice', fontSize: '40px' }}>Tech Apprentice</h1>
                            <button
                                onClick={scrollProgrammingSkills}
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
                                    textDecoration: 'none',
                                    color: 'inherit'
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
            <animated.div style={slideUpAnimation} ref={aboutMeRef}>
                <Container fluid style={{ backgroundColor: '#003366', paddingTop: '50px', paddingBottom: '50px' }}>
                    <Card className='container text-center'
                        style={{ border: '2px solid white', backgroundColor: 'white', padding: '20px' }}>
                        <CardBody>
                            <h1 className='font-weight-bold mb-3'
                                style={{ fontFamily: 'Indie Flower', textDecoration: 'underline' }}>About Me</h1>
                            <Row className='align-items-center'>
                                <Col md={3} className='text-center'>
                                    <img src={profilePic} alt='Ramon A. Rivera'
                                        style={{ maxWidth: '40%', borderRadius: '50%', display: 'inline-block' }} />
                                </Col>
                                <Col md={3} style={{ borderRight: '2px solid #003366', paddingLeft: '2px' }}> 
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={labelStyle}>Name:</div>
                                        <div style={textStyle}>Ramon A. Rivera</div>
                                        <div style={labelStyle}>Email:</div>
                                        <div style={textStyle}>ramonrivera550@gmail.com</div>
                                        <div style={labelStyle}>Phone:</div>
                                        <div style={textStyle}>(787) 550-4572</div>
                                    </div>
                                </Col>
                                <Col md={1} className="d-flex justify-content-center" style={{ maxWidth: '2px', overflow: 'hidden' }}>
                                    <div style={{ width: '2px', backgroundColor: '#003366', minHeight: '100%' }}></div> 
                                </Col>
                                <Col md={5} style={{ paddingLeft: '50px' }}> 
                                    <p style={{ ...textStyle, textAlign: 'left' }}>
                                        I am an experienced Chef, transitioning to a rewarding tech career.
                                        Passionate about culinary excellence and now embracing the exciting world of technology.
                                        With a strong background in culinary arts, I bring attention to detail, creativity and problem-solving abilities to my work,
                                        thriving under pressure and delivering top-notch results to the best of my abilities.
                                        Fueled by my curiosity and deep interest in technology's transformative power, I am excited to start this new journey.
                                    </p>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Container>
            </animated.div>

            <animated.div style={slideUpAnimation} ref={programmingSkillsInViewRef}>
                <Container fluid id='programmingSkills'
                    style={{
                        backgroundColor: '#003366',
                        paddingTop: '50px',
                        paddingBottom: '50px'
                    }} ref={programmingSkillsRef} >
                    <Card className='container text-center'
                        style={{ border: '2px solid white', backgroundColor: 'white', padding: '20px' }}>
                        <CardBody>
                            <h1 className='font-weight-bold mb-3'
                                style={{
                                    fontFamily: 'Indie Flower',
                                    textDecoration: 'underline'
                                }}
                                ref={programmingSkillsRef}>Programming Skills</h1>
                            <div className='row justify-content-center'>
                                <div className='col-3'>
                                    <img src={logos.html} alt='HTML5'
                                        style={{
                                            width: '270px',
                                            height: '250px',
                                            borderRadius: '10px',
                                            marginBottom: '50px',
                                            boxShadow: 'gray 10px 5px 5px'
                                        }} />
                                </div>
                                <div className='col-3'>
                                    <img src={logos.css} alt='CSS3'
                                        style={{
                                            width: '255px',
                                            height: '245px',
                                            borderRadius: '10px',
                                            marginBottom: '50px',
                                            boxShadow: 'gray 10px 5px 5px'
                                        }} />
                                </div>
                                <div className='col-3'>
                                    <img src={logos.javascript} alt='JavaScript'
                                        style={{
                                            width: '255px',
                                            height: '250px',
                                            borderRadius: '10px',
                                            marginBottom: '50px',
                                            boxShadow: 'gray 10px 5px 5px'
                                        }} />
                                </div>
                                <div className='col-3'>
                                    <img src={logos.nodeJS} alt='NodeJS'
                                        style={{
                                            width: '260px',
                                            height: '245px',
                                            borderRadius: '10px',
                                            marginBottom: '50px',
                                            boxShadow: 'gray 10px 5px 5px'
                                        }} />
                                </div>
                            </div>

                            <div className='row justify-content-center'>
                                <div className='col-3'>
                                    <img src={logos.python} alt='Python'
                                        style={{
                                            width: '285px',
                                            height: '245px',
                                            borderRadius: '10px',
                                            marginBottom: '50px',
                                            boxShadow: 'gray 10px 5px 5px'
                                        }} />
                                </div>
                                <div className='col-3'>
                                    <img src={logos.react} alt='React'
                                        style={{
                                            width: '265px',
                                            height: '245px',
                                            borderRadius: '10px',
                                            marginBottom: '50px',
                                            boxShadow: 'gray 10px 5px 5px'
                                        }} />
                                </div>
                                <div className='col-3'>
                                    <img src={logos.reactNative} alt='React Native'
                                        style={{
                                            width: '255px',
                                            height: '245px',
                                            borderRadius: '10px',
                                            marginBottom: '50px',
                                            boxShadow: 'gray 10px 5px 5px'
                                        }} />
                                </div>
                                <div className='col-3'>
                                    <img src={logos.redux} alt='Redux'
                                        style={{
                                            width: '275px',
                                            height: '245px',
                                            borderRadius: '10px',
                                            marginBottom: '50px',
                                            boxShadow: 'gray 10px 5px 5px'
                                        }} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </animated.div>
        </>
    );
};

export default Homepage;