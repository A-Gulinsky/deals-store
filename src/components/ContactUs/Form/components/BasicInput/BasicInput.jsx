
// emotion
import { svgStyle,BasicInputContainer, Input, InputTitle, Label, P } from "./BasicInput.styled"

// form input settings
import { NameOptions, EmailOptions } from "./InputField"

// react icons
import { BsPeople } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

// anim
import { errorAnim } from "../errorAnim"

export const BasicInput = ({register , errors}) => {

  return (
    <> 
      
      <BasicInputContainer>

        <InputTitle>Name</InputTitle>
        <Label>
        
          <BsPeople style={svgStyle} />

          <Input
            autoComplete="nope"
            {...register("name", NameOptions)}
            placeholder="Name"
          />
          {errors.name && <P variants={errorAnim} initial='hidden' animate='visible' transition={{duration: 0.2}}>{errors.name.message}</P>}
        </Label>
      </BasicInputContainer>
      
      <BasicInputContainer>
        <InputTitle>Email</InputTitle>
        <Label>

          <AiOutlineMail style={svgStyle} />

          <Input
            autoComplete="off"
            {...register("email", EmailOptions)}
            placeholder="Email"
            type="email"
          />
          {errors.email && <P variants={errorAnim} initial='hidden' animate='visible' transition={{duration: 0.2}}>{errors.email.message}</P>}
        </Label>
        
      </BasicInputContainer>
    </>
  )
}