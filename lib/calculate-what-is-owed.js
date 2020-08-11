exports.getExpression = entry => {
  const expressionWithCurrency = entry.split(' for ')[0]
  return expressionWithCurrency.replace('£', '')
}

exports.getEntries = input => {
  return input.split(/\r?\n/)
}