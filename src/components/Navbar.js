import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  height: 3rem;
  background-color: black;
  color: white;
  display: flex;
  z-index: 1000;
  margin-bottom: 2rem;
`;

const NavList = styled.ul`
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  width: 100%;
`;

const NavItem = styled.li`
  display: flex;
`;

function Navbar(props) {
  return (
    <Nav>
      {!props.filtered && (
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Foo</NavItem>
          <NavItem>Bar</NavItem>
          <NavItem>AnotherItem</NavItem>
          <NavItem>Contact</NavItem>
        </NavList>
      )}
    </Nav>
  );

  //   <Nav>
  //   {(function() {if(props.filtered) {return (
  //     <NavList>
  //       <NavItem>Home</NavItem>
  //       <NavItem>About</NavItem>
  //       <NavItem>Foo</NavItem>
  //       <NavItem>Bar</NavItem>
  //       <NavItem>AnotherItem</NavItem>
  //       <NavItem>Contact</NavItem>
  //     </NavList>
  //   )} else {
  //     return <Hamburger />
  //   }
  // </Nav>
}

export default Navbar;
