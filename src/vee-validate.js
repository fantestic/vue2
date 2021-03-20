import { extend } from 'vee-validate'
import { required, alpha_spaces, alpha, alpha_dash } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'Only alphabetic characters and spaces are allowed'
})
extend('alpha', {
  ...alpha,
  message: 'Only alphabetic characters are allowed'
})
extend('alpha_dash', {
  ...alpha_dash,
  message: 'Only alphabetic characters and dashes are allowed'
})