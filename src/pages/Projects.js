import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const ProjectsPage = () => {
    return (
        <Container>
            {/* Project 1 */}
            <Row className="align-items-center my-5">
                <Col md={6}>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Banking App</CardTitle>
                            <CardText>Project about a simple banking app using Python. You can deposit and withdraw money and
                                verify your balance.
                            </CardText>
                            <Button href="https://github.com/rrivera-1987/Python-Banking-App" target="_blank" color="primary">GitHub</Button>
                            <Button href="https://yourproject1host.com" target="_blank" color="secondary" className="ms-2">Live Demo</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    {/* Optional: Project image or additional content */}
                </Col>
            </Row>

            {/* Project 2 */}
            <Row className="align-items-center my-5">
                <Col md={{ size: 6, order: 2 }}>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Project 2</CardTitle>
                            <CardText>
                                {/* Project description here */}
                            </CardText>
                            <Button href="https://github.com/yourusername/project2" target="_blank" color="primary">GitHub</Button>
                            <Button href="https://yourproject2host.com" target="_blank" color="secondary" className="ms-2">Live Demo</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={{ size: 6, order: 1 }}>
                    {/* Optional: Project image or additional content */}
                </Col>
            </Row>

            {/* Project 3 */}
            <Row className="align-items-center my-5">
                <Col md={6}>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Project 3</CardTitle>
                            <CardText>
                                {/* Project description here */}
                            </CardText>
                            <Button href="https://github.com/yourusername/project3" target="_blank" color="primary">GitHub</Button>
                            <Button href="https://yourproject3host.com" target="_blank" color="secondary" className="ms-2">Live Demo</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    {/* Optional: Project image or additional content */}
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectsPage;
