import { Contacts } from "./components/Contacts/Contacts";
import { Logo } from "./components/Logo";
import { MobileMenuComponent } from "./components/MobileMenuComponent/MobileMenuComponent";
import { SearchField } from "./components/SearchField/SearchField";
import { HeaderContainer, HeaderStyle } from "./Header.styled";

export const Header = () => {
  
  return (
    <HeaderStyle>
      <HeaderContainer>
        
        <Logo />
        <SearchField />
        <Contacts />
        
        <MobileMenuComponent/>

      </HeaderContainer>
    </HeaderStyle>
  )
}