import { useState } from "react"

// components
import { MobileButton } from "./MobileButton/MobileButton"
import { ParentComponent } from "./MobileMenu/ParentComponent"

export const MobileMenuComponent = () => {

  const [mobMenuIsOpen, setMobMenuIsOpen] = useState(false)
  const [animIsOpen, setAnimIsOpen] = useState(false)

  // open menu + anim
  const MenuIsOpen = () => {
    setMobMenuIsOpen(true)
    setAnimIsOpen(true)
  }

  // close menu + anim
  const MenuIsClose = () => {

    setAnimIsOpen(false)

    setTimeout(() => {
      setMobMenuIsOpen(false)
    }, 400)
  }
  
  return (
    <>
      <MobileButton handleMobileMenuClick={MenuIsOpen} />
      {mobMenuIsOpen && <ParentComponent isOpen={animIsOpen} onClose={MenuIsClose} />}
    </>
  )
}