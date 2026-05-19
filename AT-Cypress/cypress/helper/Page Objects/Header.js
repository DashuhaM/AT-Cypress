import BasePage from "./BasePage";

const url = "/";

export default class extends BasePage {
    constructor(){
        super(url);
    }
get signInBtn(){
    return cy.get('.btn-outline-white')
}

get modalTitle(){
    return cy.get('.modal-title')
}

get headerLogo(){
    return cy.get('a.header_logo')
}

get homeBtn(){
    return cy.get('a.header-link')
}

get aboutBtn(){
    return cy.get('[appscrollto="aboutSection"]')
}

get contactBtn(){
    return cy.get('[appscrollto="contactsSection"]')
}
}