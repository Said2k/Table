import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';

const Footer = () => {
    
    return (
        <div>
            <Container>
                <Row>
                    <Col id='foot' className='text-center py-3'>
                        Footer &copy; SAID
                    </Col>
                </Row>
            </Container>
           
        </div>
    );
};

export default Footer;