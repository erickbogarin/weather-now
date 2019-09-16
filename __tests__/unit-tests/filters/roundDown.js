import { roundDown } from '~/plugins/filters'

describe('roundDown filter', () => {
  test('should round to its lesser value', () => {
    const number = 2.7
    expect(roundDown(number)).toBe(2)
  })
})
