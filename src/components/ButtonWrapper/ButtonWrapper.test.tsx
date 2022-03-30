import { render, screen, fireEvent } from "@testing-library/react"
import { ButtonWrapper } from "./ButtonWrapper"

test("handles onClick", () => {
  const handleClick = jest.fn()
  render(<ButtonWrapper onClick={handleClick} title="Add Item" />)
  const buttonElement = screen.getByText("Add Item");
  fireEvent.click(buttonElement)
  expect(handleClick).toHaveBeenCalledTimes(1)
})