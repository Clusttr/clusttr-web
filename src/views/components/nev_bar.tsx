import styled from "styled-components";

function NavBar() {
  return (
    <Navbar>
      <Logo>clusttr</Logo>

      <NavLinkGroup>
        <NavLink>WhitePaper</NavLink>
        <NavLink>Contact us</NavLink>
      </NavLinkGroup>
    </Navbar>
  );
}

export default NavBar;

const Navbar = styled.div`
  position: absolute;
  width: 100%;
  height: 90px;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 70px;
  padding-top: 30px;
  padding-bottom: 20px;
  /* background-color: red; */
  align-items: center;
`;

const Logo = styled.text`
  font-family: "Pacifico";
  font-size: 25px;
  font-weight: 600;
`;

const NavLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavLink = styled.div`
  margin: 0 10px;
  font-family: "Telex";
`;
