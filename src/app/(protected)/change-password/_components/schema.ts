import * as yup from 'yup';

export const schema = yup.object().shape({
  currentPassword: yup
    .string()
    .required('Current password is required')
    .min(8, 'Current password must be at least 8 characters long')
    .test(
      'has-letter',
      'Current password must include at least one letter (A-Z or a-z)',
      (val) => /[A-Za-z]/.test(val || '')
    )
    .test(
      'has-number',
      'Current password must include at least one number (0-9)',
      (val) => /\d/.test(val || '')
    )
    .test(
      'has-special',
      'Current password must include at least one special character (@$!%*#?&^)',
      (val) => /[@$!%*#?&^]/.test(val || '')
    )
    .test(
      "no-spaces",
      "Password must not contain spaces",
      (value) => !/\s/.test(value || "")
    ),

  newPassword: yup
    .string()
    .required('New password is required')
    .min(8, 'New password must be at least 8 characters long')
    .test(
      'has-letter',
      'New password must include at least one letter (A-Z or a-z)',
      (val) => /[A-Za-z]/.test(val || '')
    )
    .test(
      'has-number',
      'New password must include at least one number (0-9)',
      (val) => /\d/.test(val || '')
    )
    .test(
      'has-special',
      'New password must include at least one special character (@$!%*#?&^)',
      (val) => /[@$!%*#?&^]/.test(val || '')
    )
    .test(
      "no-spaces",
      "Password must not contain spaces",
      (value) => !/\s/.test(value || "")
    ),

  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('newPassword')], 'Passwords do not match'),
});
