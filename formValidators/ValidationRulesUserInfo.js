const ValidationRulesUserInfo = {
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
    firstName: {
        required: 'Name cannot be empty',
        maxLength: {
            value: 125,
            message: 'Max length 125 symbols'
        },
        pattern: {
            value: /[A-Za-z]$/,
            message: 'Please enter a valid name'
        }
    },
    lastName: {
        required: 'Name cannot be empty',
        maxLength: {
            value: 125,
            message: 'Max length 125 symbols'
        },
        pattern: {
            value: /[A-Za-z]$/,
            message: 'Please enter a valid name'
        }
    },
  }
  
  export default ValidationRulesUserInfo;