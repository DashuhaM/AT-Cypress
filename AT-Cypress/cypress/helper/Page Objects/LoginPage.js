import BasePage from "./BasePage";

const url = "/";

export default class extends BasePage{
    constructor(){
        super(url);
    }
get signInField(){
    return cy.get('#signinEmail')
}

get signInPassword(){
    return cy.get('#signinPassword')
}

get loginBtn(){
    return cy.contains('button', 'Login')
}

login(email, password) {
    this.signInField.type(email);
    this.signInPassword.type(password, { sensitive: true });
    this.loginBtn.click();
}
}