const { getExpression, getEntries } = require('../../lib/calculate-what-is-owed')
const outdent = require('outdent')

test('I can get the expression to calculate from the entry', () => {
  const entry = '£100.00/2 for electricity'
  const output = getExpression(entry)
  expect(output).toBe('100.00/2')
})

test('I can get an array of entries from a String of entries', () => {
  const input = outdent`
    £100.00/2 for electricity
    £20 for groceries
  `
  const output = getEntries(input)
  expect(output).toStrictEqual(['£100.00/2 for electricity', '£20 for groceries'])
})