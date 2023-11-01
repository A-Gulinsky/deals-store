
// svg
import { FaViber } from "react-icons/fa6"

// emotion
import { Input, Label, P } from "./FormViber.styled"

// anim
import { errorAnim } from "../../errorAnim"

export const FormViber = ({register, errors}) => {

  return (
    <Label>

      <FaViber style={{ width: 30, height: 30, paddingRight: '10px', fill: '#ffffffd0',filter: 'drop-shadow(0px 0px 8px #7500ebd2)' }} />

      <Input
        autoComplete="nope"
        {...register("viber", {
          required: 'Required field',
          pattern: {
            value: /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            message: `Incorrect format`
          },
          maxLength: {
            value: 12,
            message: 'Max 12 length'
          }
        })}
        style={{ borderColor: errors.phone ? 'red' : 'initial' }}
        placeholder="Viber"
        type="number"
      />
      {errors.viber && <P variants={errorAnim} initial='hidden' animate='visible' transition={{duration: 0.2}}>{errors.viber.message}</P>}
    </Label>
  )
}