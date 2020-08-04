import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';
import { useHistory } from 'react-router-dom';

function Nav() {

    const handleClickDrawings = () => {
      history.push('/carousel1')
    };
    const handleClickPaintings = () => {
      history.push('/carousel2');
    };
    const handleClickSculpt = () => {
      history.push('/carousel3');
    };
    const handleClickWeapons = () => {
      history.push('/carousel4');
    };
    const handleClickPhoto = () => {
      history.push('/carousel5');
    }; 
  let history = useHistory();
   const handleClickHome = () => {
     history.push('/');
    };
    return (
    <Container>
        <div className="heading">
        <Badge variant="info" onClick={handleClickHome}>Modern Art Generator</Badge>
        <DropdownButton id="dropdown-item-button" title="Galleries">
          <Dropdown.ItemText>Navigate:</Dropdown.ItemText>
            <Dropdown.Item onClick={handleClickDrawings}>Drawings</Dropdown.Item>
            <Dropdown.Item onClick={handleClickPaintings}>Paintings</Dropdown.Item>
            <Dropdown.Item onClick={handleClickSculpt}>Sculpture</Dropdown.Item>
            <Dropdown.Item onClick={handleClickWeapons}>Weapons and Ammunition</Dropdown.Item>
            <Dropdown.Item onClick={handleClickPhoto}>Photographs</Dropdown.Item>
        </DropdownButton>
    </div>
    </Container>
    )}
export default Nav;
