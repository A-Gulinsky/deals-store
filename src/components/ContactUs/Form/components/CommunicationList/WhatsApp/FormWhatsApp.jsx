
// svg
import { AiOutlineWhatsApp } from 'react-icons/ai'

// emotion
import { Input, Label, P } from './FormWhatsApp.styled'

// anim
import { errorAnim } from '../../errorAnim'

export const WhatsApp = ({register, errors}) => {

  return (
    <Label>

      <AiOutlineWhatsApp style={{ width: 30, height: 30, paddingRight: '10px', fill: '#ffffffd0', filter: 'drop-shadow(0px 0px 8px #04e10bd2)' }} />

      <Input
        autoComplete="nope"
        {...register("whatsapp", {
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
        placeholder="WhatsApp"
        type="number"
      />
      {errors.whatsapp && <P variants={errorAnim} initial='hidden' animate='visible' transition={{duration: 0.2}}>{errors.whatsapp.message}</P>}
    </Label>
  )
}