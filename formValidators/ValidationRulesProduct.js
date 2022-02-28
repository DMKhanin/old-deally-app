const ValidationRulesProduct = {
  name: {
    required: 'Name cannot be empty',
    maxLength: {
      value: 255,
      message: 'Max length 255 symbols'
    }
  },
  price: {
    maxLength: {
      value: 255,
      message: 'Max length 255 symbols'
    },
    pattern: {
      value: /^\d+(,\d{1,2})?$/,
      message: 'Current value not type price'
    }
  },
  description: {
    maxLength: {
      value: 255,
      message: 'Max length 255 symbols'
    }
  }
}

export default ValidationRulesProduct;