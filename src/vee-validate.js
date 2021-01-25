import { extend } from 'vee-validate'
import { required, alpha_spaces } from 'vee-validate/dist/rules'

extend('required', {
    ...required,
    message: 'This field is required'
})

extend('alpha_spaces', {
    ...alpha_spaces,
    message: 'Only alphabetic characters and spaces are allowed'
})