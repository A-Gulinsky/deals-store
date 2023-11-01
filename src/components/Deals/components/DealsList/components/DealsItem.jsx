import { AmazonLogo, B, Button, Img, InfoContainer, NewPrice, Li, OldPrice, PhotoDiv, PriceContainer, PriceList, AmazonPicture } from "./DealsItem.styled"

import amazonPicture from 'assets/amazonLogo/amazonLogo.png'

export const DealsItem = ({ data, handleItemClick }) => {
  
  const picture = process.env.REACT_APP_PICTURE

  return (
    <>
      {data.map((item,idx) => (
        
        <Li key={item.name} onClick={() => handleItemClick(idx)}>
          <PhotoDiv>
            <Img src={`${picture}${item.pictures[0]}`} alt={item.name} />
          </PhotoDiv>
          <InfoContainer>
            <B>Save up to %x on x</B>
            <Button type="button">Get Stunned</Button>
            <PriceContainer>
              <AmazonLogo>
                <AmazonPicture src={amazonPicture} alt="amazon icon"/>
              </AmazonLogo>
              <PriceList>
                <li>
                  <NewPrice>${item.price}</NewPrice>
                </li>
                <li>
                  <OldPrice>$70.80</OldPrice>
                </li>
              </PriceList>
            </PriceContainer>
          </InfoContainer>
        </Li>
      ))}
    </>
  )
}