import BasePage from "./BasePage";

const url = "/";

export default class extends BasePage {
    constructor(){
        super(url);
    }



// ##якщо кнопка знаходиться в різних місцях, але поведінка її однакова, то можна зробити метод з параметрами
// // GaragePage.js
// addCarBtn(location = 'main') {
//   const contexts = {
//     main:    '.main-content',
//     sidebar: '.sidebar',
//   }
//   return cy.get(contexts[location]).contains('button', 'Add car')
// }
//  або окремі гетери:
    
get addExpenseBtnSidebar() {
  return cy.get('.icon-fuel')

}

get addExpenseBtnMain() {
  return cy.contains('button', 'Add an expense')
}

get AddExpensesModal(){
    return cy.get('.modal-title').contains('Add an expense')
}

get VehicleField() {
  return cy.get('#addExpenseCar')
}

get AddReportDate() {
  return cy.get('#addExpenseDate')
}

get AddExpenseMileage() {
  return cy.get('#addExpenseMileage')
}

get AddExpenseLiters() {
  return cy.get('#addExpenseLiters')
}

get AddExpenseTotalCost() {
  return cy.get('#addExpenseTotalCost')
}

get AddExpensessBtn(){
    return cy.contains('button', /^Add$/)
}

get CancelExpensessBtn(){
    return cy.contains('button', 'Cancel')
}

get CloseExpensessBtn(){
    return cy.get('.close')
}

get FuelExpensesTbl(){
    return cy.get('.expenses_table')
}




// get AddExpensessBtnSidebar() {
//   return cy.contains('button', 'Add fuel expense')
// }


}
