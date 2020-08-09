const { getExpression } = require('../../lib/calculate-what-is-owed')

test('I can get the expression to calculate from the String', () => {
    const input = '£100.00/2 for electricity'
    const output = getExpression(input)
    expect(output).toBe('100.00/2')
})
