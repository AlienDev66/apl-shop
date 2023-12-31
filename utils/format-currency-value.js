export const formatCurrencyValue = ({ currency, value }) =>
  new Intl.NumberFormat('pt-AO', {
    style: 'currency',
    currency: currency.code
  }).format(value / 100)
