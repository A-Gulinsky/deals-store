import { InfoContainer } from "./InfoBlock.styled"
import { JoinUs } from "./JoinUs/JoinUs"
import { Mailer } from "./Mailer/Mailer"

export const InfoBlock = () => {
  
  return (
    <InfoContainer>
      <Mailer />
      <JoinUs />
    </InfoContainer>
  )
}