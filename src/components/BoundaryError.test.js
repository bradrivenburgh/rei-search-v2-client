import { render } from '@testing-library/react';
import BoundaryError from './BoundaryError';


const Child = () => {
  throw new Error()
}

console.error = ""

describe('Error Boundary', () => {
  it(`should render error boundary`, () => {
    render(<BoundaryError><Child /></BoundaryError>)

    
  })
})