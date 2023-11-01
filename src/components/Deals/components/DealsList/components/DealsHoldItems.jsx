import { AmazonLogo, B, Button, Img, InfoContainer, Li, NewPrice, OldPrice, PhotoDiv, PriceContainer, PriceList } from "./DealsItem.styled"

export const DealsHoldItems = () => {

  const holdItems = [1,2,3,4]

  return (
    <>
      {holdItems.map(item => (
        <Li key={item} style={{filter: 'blur(1px)'}}>
          <PhotoDiv>
            <Img/>
          </PhotoDiv>
          <InfoContainer>
            <B>Save up to %x on x</B>
            <Button type="button">Get Stunned</Button>
            <PriceContainer>
              <AmazonLogo>amazon</AmazonLogo>
              <PriceList>
                <li>
                    <NewPrice>$50.99</NewPrice>
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