import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe(`main`, () => {
  test('only this spec should be failed', async() => {
    const { findByTestId } = render(<App />)
    const test = await findByTestId('random-test-id')

    expect(test).toBeInTheDocument()
  })

  test('should be success', async() => {
    const { findByTestId } = render(<App />)
    const test = await findByTestId('learn-button')

    expect(test).toBeInTheDocument()
  })
})
