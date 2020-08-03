import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'
import { useHistory } from 'react-router-dom'



function Nav() {
    const [searchTerm, setSearchTerm] = useState("");
    const formEl = React.useRef(null);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    }
    console.log(searchTerm)
    
   let history = useHistory();
   const handleClickHome = () => {
     history.push('/');
    };
    return ( //creates eventual searchbar from React-bootstrap
    <Container>
        <div className="heading">
        <Badge variant="info" onClick={handleClickHome}>Modern Art Generator</Badge>
    <Form ref={formEl}>
        <Form.Row>
            <input
                id="searchbar" 
                size="200px" 
                type ="search" 
                placeholder="Search your art"
                value={searchTerm}
                onChange={handleChange}
                />
        </Form.Row>
    </Form>
    </div>
    </Container>
    )}
export default Nav;