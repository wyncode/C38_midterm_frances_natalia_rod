import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'



const Nav = () => {

    return ( //creates eventual searchbar from React-bootstrap
    <Container>
        <div className="heading">
        <Badge variant="info">Modern Art Generator</Badge>
    <Form>
        <Form.Row>
            <Form.Control 
                id="searchbar" 
                size="200px" 
                type ="text" 
                placeholder="Search your art"
                ></Form.Control>
        </Form.Row>
    </Form>
    </div>
    </Container>
    )}

export default Nav;