const FormatPrice = ({price}) => {
  return (
    Intl.NumberFormat('en-RS', {
        style: 'currency',
        currency: 'PKR',
        maximumFractionDigits: 2,
    }).format(price / 100)
)};

// For pakistan (“en-PK”, currency:” PAK”)

export default FormatPrice;