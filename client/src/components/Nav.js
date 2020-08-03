import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import { useHistory } from 'react-router-dom';

const Nav = () => {
<<<<<<< HEAD
  let history = useHistory();
  const handleClickHome = () => {
    history.push('/');
  };
=======
    const [search, setSearch] = useState("");
    const formEl = React.useRef(null);

    const handleSubmitBar = (event) => {
        event.preventDefault();
        setSearch(event.target.elements.searchbar.value);
    
        event.target.elements.searchbar.value = "";
    }
>>>>>>> 4360a0d2a4983d20e3879cc98780f988254fc89e

  return (
    //creates eventual searchbar from React-bootstrap
    <Container>
<<<<<<< HEAD
      <div className="heading">
        <Badge variant="info" onClick={handleClickHome}>
          Modern Art Generator
        </Badge>
        <Form>
          <Form.Row>
            <Form.Control
              id="searchbar"
              size="200px"
              type="text"
              placeholder="Search your art"
            ></Form.Control>
          </Form.Row>
        </Form>
      </div>
=======
        <div className="heading">
        <Badge variant="info" onClick={handleClickHome}>Modern Art Generator</Badge>
    <Form ref={formEl} onSubmit={handleSubmitBar}>
        <Form.Row>
            <Form.Control 
                id="searchbar" 
                size="200px" 
                type ="text" 
                placeholder="Search your art"
                defaultValue={search}
                ></Form.Control>
        </Form.Row>
    </Form>
    </div>
>>>>>>> 4360a0d2a4983d20e3879cc98780f988254fc89e
    </Container>
  );
};

export default Nav;
