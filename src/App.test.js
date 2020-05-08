import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe(`main`, () => {
  test('only this spec should be failed', async done => {
    const { findByTestId } = render(<App />)
    const test = await findByTestId('learn-button')
    expect(test).toBeInTheDocument()

    done()
  })

  test('should be success', async done => {
    const { findByTestId } = render(<App />)
    const test = await findByTestId('learn-button')

    expect(test).toBeInTheDocument()
    done()
  })
})
