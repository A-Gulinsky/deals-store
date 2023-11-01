// emotion
import { MobileButtonStyled, svgStyle } from "./MobileButton.styled"

// svg icon
import { HiMenu } from 'react-icons/hi'

export const MobileButton = ({handleMobileMenuClick}) => {

  return (
    <MobileButtonStyled type="button" onClick={handleMobileMenuClick}>

      <HiMenu style={svgStyle} />
      
    </MobileButtonStyled>
  )
}