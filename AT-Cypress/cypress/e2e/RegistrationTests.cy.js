import Header from "../helper/Page Objects/Header";
import Registration from "../helper/Page Objects/Registration";

describe('Check Registration', () => {
  const registration = new Registration();
  const header = new Header();
  beforeEach(() => {
    registration.navigate();
    header.signInBtn.click();
    registration.RegistrationBtn.click();
    registration.RegModalTitle.should('be.visible');
  });


describe('Name Field Validation', () => {

  it('Empty name - shows required error', () => {
      registration.SignupNameField.type(' ').clear().blur();
      registration.ErrEmptyField.should('contain', 'Name required');
      })

  it('Wrong data - shows invalid error', () => {
      registration.SignupNameField.type('Daria123').blur();
      registration.ErrEmptyField.should('contain', 'Name is invalid');
      })

  it('Too short name - shows length error', () => {
      registration.SignupNameField.type('R').blur();
      registration.ErrEmptyField.should('contain', 'Name has to be from 2 to 20 characters long', 'Name is invalid');
      })
      
   })


describe('LastName Field Validation', () => {
    it('Empty LastName - shows required error', () => {
      registration.LastNameField.type(' ').clear().blur();
      registration.ErrEmptyField.should('contain', 'Last name required');
      })

    it('Wrong LastName - shows invalid error', () => {
      registration.LastNameField.type('Vakula123').blur();
      registration.ErrEmptyField.should('contain', 'Last name is invalid');
      })

    it('Too short LastName - shows length error', () => {
      registration.LastNameField.type('V').blur();
      registration.ErrEmptyField.should('contain', 'Last name has to be from 2 to 20 characters long');
      })

})


describe('Email Field Validation', () => {
    it('Empty Emile - shows required error', () => {
      registration.signupEmailField.type(' ').clear().blur();
      registration.ErrEmptyField.should('contain', 'Email required');
      })

    it('Wrong Emile - shows invalid error', () => {
      registration.signupEmailField.type('Daria123').blur();
      registration.ErrEmptyField.should('contain', 'Email is incorrect');
      })

})

describe('Password Field Validation', () => {
    it('Empty Password - shows required error', () => {
      registration.signupPasswordField.type(' ').clear().blur();
      registration.ErrEmptyField.should('contain', 'Password required');
      })

    it('Wrong Password - shows invalid error', () => {
      registration.signupPasswordField.type('Daria13').blur();
      registration.ErrEmptyField.should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
      })

})


describe('Repeate Password Field Validation', () => {
    it('Empty RepeatePassword - shows required error', () => {
      registration.signupRepeatPasswordField.type(' ').clear().blur();
      registration.ErrEmptyField.should('contain', 'Re-enter password required');
      })

    it('RepeatePassword does not match Password - shows invalid error', () => {
      registration.signupPasswordField.type('Daria@113')
      registration.signupRepeatPasswordField.type('Daria@114').blur()
      registration.ErrEmptyField.should('contain', 'Passwords do not match');
      })

})


describe('New User SignUp', () => {
    it('User with Valid data', () => {
      registration.SignupNameField.type('Daria');
      registration.LastNameField.type('Vakula');
      registration.signupEmailField.type('tenfdfleh961@ameady.com');
      registration.signupPasswordField.type('Daria@111');
      registration.signupRepeatPasswordField.type('Daria@111');
      registration.RegisterBtn.click();
      registration.containUrlCheck('/garage');
    })

    
})

})


