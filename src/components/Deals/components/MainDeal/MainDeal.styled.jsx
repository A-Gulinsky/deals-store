import styled from "@emotion/styled";

export const MainDealContainer = styled.div`
  width: 100%;

  background-color: #e6e5e5;
  border-radius: 50px;

  filter: ${props => !props.item && 'blur(2px)'};
`

export const MainInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 18px;
  border-bottom: 1px solid #707070;
`

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 40px 40px 0;
`

export const PhotoDiv = styled.div`
  min-width: 200px;
  height: 270px;
  background-color: #e6e5e5;

  display: flex;
  justify-content: center;
  align-items: center;

`

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
`

export const TimeB = styled.b`
  color: #e61414;
  display: none;
`

export const TitleH3 = styled.h3`
  font-size: 30px;
  color: #17024F;
  height: 69px;

  overflow: hidden;
`

export const DescriptionB = styled.b`
  color: #17024F;
  height: 55px;
`

export const InfoPriceList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InfoPriceItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
` 

export const PriceList = styled.ul`
  display: flex;
  align-items: center;
  gap: 7px;
`

export const NewPrice = styled.b`
  font-size: 30px;
  color: #2F3466;
`

export const OldPrice = styled.b`
  font-size: 20px;
  color: #887DA3;
  font-weight: 500;
  text-decoration: line-through;
`

export const GetStunnedButton = styled.button`
  width: 145px;
  border-radius: 20px;
  background-color: #549760;
  color: #ffffffda;
  border: none;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  padding: 15px 0;

  cursor: pointer;
`

export const AmazonIcon = styled.b`
  width: 140px;
  height: 50px;
`

export const AmazonPicture = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
`

export const ExpiredButton = styled.button`
  display: none;
  width: 120px;
  border-radius: 20px;
  background-color: transparent;
  color: #5711a6;
  border: 1px solid #5711a6;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  padding: 15px 0;
`

export const FollowUsB = styled.b`
  display: block;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 18px;
  color: #24144E;
  text-align: center;
  margin-left: 15%;
`