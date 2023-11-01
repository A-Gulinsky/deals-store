import styled from "@emotion/styled";

export const Li = styled.li`
  padding: 10px 15px;
  border-radius: 20px;

  width: 246px;


  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  background-color: #e6e5e5;

  transition: 200ms;

  cursor: default;

  &:hover {
    transform: scale(1.05);
  }
`

export const PhotoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;
  background-color: #e6e5e5;
`

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`

export const B = styled.b`
  font-size: 12px;
  color: #17024F;
`

export const Button = styled.button`
  background-color: #549760;
  border: none;
  outline: transparent;

  padding: 6px 10px;
  border-radius: 100px;

  color: #ffffffed;
  cursor: pointer;
  font-size: 12px;
`

export const PriceContainer = styled.div`
  display: flex;
  gap: 30px;
`

export const AmazonLogo = styled.div`
  width: 45px;
  height: 16px;
`

export const AmazonPicture = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
`

export const PriceList = styled.ul`
  display: flex;
  gap: 10px;
`

export const NewPrice = styled.b`
  color: #252747;
  font-size: 12px;
`

export const OldPrice = styled.b`
  text-decoration: line-through;
  font-size: 12px;
  color: #7B7A9B;
`