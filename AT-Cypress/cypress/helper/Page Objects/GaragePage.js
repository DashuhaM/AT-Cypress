import BasePage from "./BasePage";

const url = "/";

export default class extends BasePage {
    constructor(){
        super(url);
    }
get AddCarBtn(){
    return cy.contains('button', 'Add car')
}

get AddCarModal(){
    return cy.get('.modal-header')
}


get BrandField(){
    return cy.get('#addCarBrand')
}

get ModelField(){
    return cy.get('#addCarModel')
}

get MileageField(){
    return cy.get('#addCarMileage')
}

get AddBtn(){
    return cy.contains('button', /^Add$/)
}

get CancelBtn(){
    return cy.contains('button', 'Cancel')
}

get CarName(){
    return cy.get('.car_name')
}

get CloseBtn(){
    return cy.get('.close')
}





}

