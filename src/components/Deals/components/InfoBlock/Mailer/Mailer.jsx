import { Button, Input, Label, MailerContainer, Title } from "./Mailer.styled"

export const Mailer = () => {

  return (
    <MailerContainer>
      <Title>Sign up for our daily newsletter for the latest news, deals, and tips</Title>
      
      <Label>
        <Input
          type="text"
          placeholder="youremail@gmail.com "
        />
        <Button type="button">
          Subscribe
        </Button>
      </Label>
    </MailerContainer>
  )
}