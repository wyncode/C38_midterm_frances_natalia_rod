import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Nav() {
  // The folliwng functions, using the history prop, route you to the respective galleries upon clicking their respective buttons in the dropdown menu
  let history = useHistory();
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
        <Dropdown.Item onClick={() => history.push('/Paintings')}>
          Paintings
        </Dropdown.Item>
        <Dropdown.Item onClick={() => history.push('/Sculpture')}>
          Sculpture
        </Dropdown.Item>
        <Dropdown.Item onClick={() => history.push('/Weapons')}>
          Weapons and Ammunition
        </Dropdown.Item>
        <Dropdown.Item onClick={() => history.push('/Photography')}>
          Photographs
        </Dropdown.Item>
      </DropdownButton>
    </nav>
  );
}
export default Nav;
