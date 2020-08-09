exports.getExpression = input => {
  const expressionWithCurrency = input.split(" for ")[0]
  return expressionWithCurrency.replace('£', '')
}