const ValidationRulesLogin = {
  email: {
    required: 'E-mail cannot be empty',
    minLength: {
      value: 3,
      message: 'Min length 3 symbols'
    },
    maxLength: {
      value: 255,
      message: 'Max length 255 symbols'
    },
    pattern: {
      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: 'This field is not email'
    }
  },
  password: {
    required: 'Password cannot be empty',
    minLength: {
      value: 6,
      message: 'Min length 6 symbols'
    },
    maxLength: {
      value: 255,
      message: 'Max length 255 symbols'
    }
  }
}

export default ValidationRulesLogin;