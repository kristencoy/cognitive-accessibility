import styled from "styled-components";

function Navbar() {
  const Nav = styled.nav`
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    height: 3rem;
    background-color: black;
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

  return (
    <Nav>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Foo</NavItem>
        <NavItem>Bar</NavItem>
        <NavItem>AnotherItem</NavItem>
        <NavItem>Contact</NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
