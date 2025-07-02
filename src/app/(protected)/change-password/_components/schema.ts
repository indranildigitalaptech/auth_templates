import * as yup from 'yup';

export const schema = yup.object().shape({
    currentPassword: yup
        .string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,}$/,
            'Current password must include letters, numbers, and special characters'
        )
        .required('Current password is required'),
    newPassword: yup
        .string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,}$/,
            'New password must include letters, numbers, and special characters'
        )
        .required('New password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('newPassword')], 'Passwords do not match')
        .required('Confirm password is required'),
});
