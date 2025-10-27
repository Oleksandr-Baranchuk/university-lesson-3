export default {
  mixed: {
    required: '{label} is required',
    oneOf: '{label} must be one of: {values}',
    notOneOf: '{label} must not be one of: {values}',
    defined: '{label} must be defined',
    notType: '{label} must be a {type}'
  },
  string: {
    min: '{label} must be at least {min} characters',
    max: '{label} must be at most {max} characters',
    length: '{label} must be exactly {length} characters',
    email: 'Invalid email in {label}',
    url: 'Invalid URL in {label}',
    uuid: 'Invalid UUID in {label}',
    matches: '{label} must match the pattern: {regex}',
    trim: '{label} must be a trimmed string',
    lowercase: '{label} must be lowercase',
    uppercase: '{label} must be uppercase'
  },
  number: {
    min: '{label} must be greater than or equal to {min}',
    max: '{label} must be less than or equal to {max}',
    lessThan: '{label} must be less than {less}',
    moreThan: '{label} must be greater than {more}',
    positive: '{label} must be a positive number',
    negative: '{label} must be a negative number',
    integer: '{label} must be an integer'
  },
  date: {
    min: '{label} must be later than or equal to {min}',
    max: '{label} must be earlier than or equal to {max}'
  },
  array: {
    min: '{label} must have at least {min} items',
    max: '{label} must have at most {max} items',
    length: '{label} must contain exactly {length} items'
  },
  object: {
    noUnknown: '{label} has unknown keys: {unknown}'
  }
};
