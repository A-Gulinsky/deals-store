import { HomeContainer } from "./Shop.styled"
import { ShopElements } from "./ShopElements/ShopElements"
import { ShopList } from "./ShopList/ShopList"

export const Shop = () => {

  return (
    <HomeContainer>
      <ShopElements />
      <ShopList />
    </HomeContainer>
  )
}