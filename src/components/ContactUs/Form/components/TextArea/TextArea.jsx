
// emotion
import { TextAreaContainer, TextAreaStyled, TextAreaTitle } from "./TextArea.styled"

export const TextArea = ({register , errors}) => {
  
  return (
    <TextAreaContainer>
      <TextAreaTitle>Your Message</TextAreaTitle>
      <TextAreaStyled
        {...register("message")}
        placeholder="Your message"
      />
    </TextAreaContainer>
  )
}