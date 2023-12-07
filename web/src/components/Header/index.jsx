import { Container, Content, Logo, SideBar } from "./style";
import { Search } from "../../components/Search";

import menu from "../../assets/icons/menu.svg";
import logo from "../../assets/icons/logo.svg";
import { useState } from "react";

export function Header() {
  const [searchValue, setSearchValue] = useState("");

  function clearSearch() {
    setSearchValue("");
  }

  function handleSearchInputChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <Container>
      <Content>
        <SideBar>
          <img src={menu} alt="Menu de opções" />
        </SideBar>
        <Logo to="/">
          <div>
            <img src={logo} alt="logo food page" />
          </div>
        </Logo>
        <Search
          type="text"
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => handleSearchInputChange(e)}
          onClick={clearSearch}
          value={searchValue}
        />
      </Content>
    </Container>
  );
}
