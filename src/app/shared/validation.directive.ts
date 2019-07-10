import { ValidatorFn, AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

//custom validation for validating the input value
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}

//cross validation: firstName cannot equal with lastName
export const identityRevealedValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
    const firstName = formGroup.get('firstName');
    const lastName = formGroup.get('lastName');
    return firstName && lastName && firstName.value === lastName.value ? { 'identityRevealed': true } : null;
};

//error messages for reactive error handling from the component
export const validationMessages = {
    required: 'Please enter a value.',
    identityRevealed: 'Last Name cannot match First Name.',
    forbiddenName: 'This value is forbidden',
    minlength: 'Given value is too short'
}