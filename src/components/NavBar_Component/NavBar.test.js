import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import MenuForApp from './NavBar'

describe('<MenoForApp/>', () => {
  it('this here should load', () => {
    render(<Router><MenuForApp/></Router>)
  })
})