import React, { useState, useContext } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function Nav() {
  // The folliwng functions, using the history prop, route you to the respective galleries upon clicking their respective buttons in the dropdown menu

  let history = useHistory();

  const handleClickPaintings = () => {
    history.push('/Paintings');
  };
  const handleClickSculpt = () => {
    history.push('/Sculpture');
  };
  const handleClickWeapons = () => {
    history.push('/Weapons');
  };
  const handleClickPhoto = () => {
    history.push('/Photography');
  };

  return (
    <nav className="arNav">
      {/* link element is an easy way to route back to the home page */}

      <Link to="/" className="ARLOGO"></Link>

      {/* The following dropdown menu code allows for multiple different route activated by onClicking, with the functions above as arguements for each respective route */}
      {/* variant for dropdown button gives it a color */}

      <DropdownButton
        id="dropdown-item-button"
        variant="secondary"
        title="Galleries"
      >
        <Dropdown.Item onClick={handleClickPaintings}>Paintings</Dropdown.Item>
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
