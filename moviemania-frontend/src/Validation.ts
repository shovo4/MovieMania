import * as Yup from 'yup';

function configureValidation() {
  Yup.addMethod(Yup.string, 'firstLetterUppercase', function() {
    return this.test('first-letter-uppercase', 'The first letter must be uppercase', value => {
      if (value) {
        return value[0] === value[0].toUpperCase();
      }
      return true;
    });
  })
}

export default configureValidation;