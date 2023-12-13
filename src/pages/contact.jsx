import { ThemeContext } from "../context/ThemeContext"
import React, { useContext } from "react"
import { Button } from "@mantine/core"

function Contact() {

  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div>
      <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
      <p>O tema atual é: {theme}</p>
      <Button onClick={toggleTheme}>Clique aqui para mudar o tema</Button>
    </div>
  )
}

export default Contact
