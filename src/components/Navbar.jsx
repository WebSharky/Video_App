import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import demoData from "../demoData";
import { useState } from "react";


const AppNavbar = () => {
    const { demoContent, clearContent, moviesByViews, moviesByLikes, moviesOldest, moviesMostRecent, setType, setLayout} = useContext(GlobalContext);
    const [isOpen, setIsOpen] = useState(false);


    return (
  
        <Navbar
        color="primary"
        expand="sm"
        dark
      >
        <NavbarBrand href="/">
          Video-App.
         
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)}/>

        <Collapse isOpen={isOpen} navbar>
    
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink onClick={() => setType('movies')} className="pointer">
                Wszystkie
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              onClick={() => setType('favourites')}
              className="pointer">
                Ulubione
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Layout
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem
                onClick={() => setLayout('list')}>
                  Lista
                </DropdownItem>
                <DropdownItem
                onClick={() => setLayout('tiles')}>
                  Kafelki
                </DropdownItem>
               
              </DropdownMenu>
            </UncontrolledDropdown>
      
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Sortuj
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem
                onClick={() => moviesOldest()}>
                  Najstarsze
                </DropdownItem>
                <DropdownItem
                onClick={() => moviesMostRecent()}>
                  Ostatnio dodane
                </DropdownItem>
                <DropdownItem
                 onClick={() => moviesByLikes()}>
                  Najwięcej polubień
                </DropdownItem>
                <DropdownItem
                onClick={() => moviesByViews()}>
                  Najwięcej odtworzeń
                </DropdownItem>
               
              </DropdownMenu>
            </UncontrolledDropdown>
      
      
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Zarządzaj listą
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem 
                onClick={() => demoContent(demoData)}
                >
            
                  Wgraj content demo
                </DropdownItem>
               
                <DropdownItem 
                 onClick={() => clearContent([])}>
                  Wyczyść listę filmów
                </DropdownItem>
               
              </DropdownMenu>
            </UncontrolledDropdown>
      
           
              <NavLink href="/about" >
                About
              </NavLink>

          </Nav>

        </Collapse>
      </Navbar>
          )
}

export default AppNavbar