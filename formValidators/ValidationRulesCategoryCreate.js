const ValidationRulesCategory = {
  name: {
    required: 'Name cannot be empty',
    maxLength: {
      value: 80,
      message: 'Max length 80 symbols'
    }
  }
}

export default ValidationRulesCategory;