import { FlexDiv, PhotoDiv, NewPrice, OldPrice, MainDealContainer, TimeB, TitleH3, DescriptionB, PriceList, GetStunnedButton, InfoPriceList, ExpiredButton, AmazonIcon, InfoPriceItem, MainInfoBlock, FollowUsB, Img, AmazonPicture } from "./MainDeal.styled"

import amazonPicture from 'assets/amazonLogo/amazonLogo.png'

export const MainDeal = ({item}) => {

  const holdItem = {
    name: 'LOADING....',
    price: '50.99',
  }

  const picture = process.env.REACT_APP_PICTURE

  return (
    <MainDealContainer item={item && true}>
      <FlexDiv>
        <PhotoDiv>
          <Img src={item && `${picture}${item.pictures[0]}`} alt={item && item.name} />
        </PhotoDiv>
        <MainInfoBlock>

          <div>
            <TimeB>S</TimeB>
            <TimeB>This offer will end in 17 hours</TimeB>
          </div>

          <TitleH3>{item ? item.name: holdItem.name}</TitleH3>

          <DescriptionB> Sundpey 148pcs homeowner portable travel tool
            seе. Include screwdriver bits,voltage tester, slotted
            screwdriver set, Phillips screwdriver set, 10ft Tape
            Measure
          </DescriptionB>

          <InfoPriceList>

            <InfoPriceItem>
              <PriceList>
                <li>
                  <NewPrice>${item ? item.price : holdItem.price}</NewPrice>
                </li>
                <li>
                  <OldPrice>$70.99</OldPrice>
                </li>
              </PriceList>
              <GetStunnedButton type="button">GET STUNNED</GetStunnedButton>
            </InfoPriceItem>

            <InfoPriceItem>
              <AmazonIcon>
                <AmazonPicture src={amazonPicture} alt="amazon icon"/>
              </AmazonIcon>
              <ExpiredButton type="button">EXPIRED?</ExpiredButton>
            </InfoPriceItem>

          </InfoPriceList>

        </MainInfoBlock>
      </FlexDiv>
      <FollowUsB>Follow us on Telegram and WhatsApp groups</FollowUsB>
    </MainDealContainer>
  )
}