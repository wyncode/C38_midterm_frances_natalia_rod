import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function Nav() {
  let history = useHistory();
  const handleClickDrawings = () => {
    history.push('/carousel1');
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

  return (
    <nav className="arNav">
      
      <Link to="/" className="ARLOGO"></Link>
      
       <DropdownButton id="dropdown-item-button" title="Galleries">
          <Dropdown.ItemText>Navigate:</Dropdown.ItemText>
          <Dropdown.Item onClick={handleClickPaintings}>
            Paintings
          </Dropdown.Item>
          <Dropdown.Item onClick={handleClickSculpt}>Sculpture</Dropdown.Item>
          <Dropdown.Item onClick={handleClickWeapons}>
            Weapons and Ammunition
          </Dropdown.Item>
          <Dropdown.Item onClick={handleClickPhoto}>Photographs</Dropdown.Item>
        </DropdownButton>

    
    </nav>
  );
}
export default Nav;
