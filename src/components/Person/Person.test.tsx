import React from "react"
import { render, screen } from "@testing-library/react"
import Person from "./Person"

// 1 test:
test("renders a name", () => {
  render(<Person name="Lucas" />)

  const linkElement = screen.getByText(/The name is Lucas/i)
  expect(linkElement).toBeInTheDocument()

  const divElement = screen.getByRole("contentinfo")
  expect(divElement).toHaveTextContent("name is Lucas")
  expect(divElement).toHaveAttribute("role", "contentinfo")

  // cualquier expect()... que falle hará que el test no pase 
})