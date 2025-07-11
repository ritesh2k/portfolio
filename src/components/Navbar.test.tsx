import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
import Navbar from "./Navbar"

test('renders navigation bar', () => {
    const { getByRole} = render(<Navbar />)
    expect(getByRole('navigation')).toBeInTheDocument()
})