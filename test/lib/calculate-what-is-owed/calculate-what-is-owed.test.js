const calculateWhatIsOwed = require('../../../lib/calculate-what-is-owed/calculate-what-is-owed')
const outdent = require('outdent')

test('I can find out the final amount that is owed given a list of things I owe', () => {
  const input = outdent`
    £100.00/2 for electricity
    £20 for groceries
  `

  const output = calculateWhatIsOwed(input)
  expect(output).toBe('£' + ((100 / 2) + 20))
})