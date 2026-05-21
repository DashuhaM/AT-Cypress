import BasePage from "./BasePage";

const url = "/";

export default class extends BasePage {
    constructor(){
        super(url);
    }

get RegistrationBtn(){
    return cy.contains('button', 'Registration')
}


get RegModalTitle(){
    return cy.contains('Registration')
}

get SignupNameField(){
    return cy.get('#signupName')
}

get LastNameField(){
    return cy.get('#signupLastName')
}

get signupEmailField(){
    return cy.get('#signupEmail')
}

get signupPasswordField(){
    return cy.get('#signupPassword')
}

get signupRepeatPasswordField(){
    return cy.get('#signupRepeatPassword')
}

get RegisterBtn(){
    return cy.contains('button', 'Register')
}


get ErrEmptyField(){
    return cy.get('.invalid-feedback')
}
}


