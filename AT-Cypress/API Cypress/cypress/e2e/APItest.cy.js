import LoginPage from "../Page Objects/LoginPage";
import ExpensesPage from "../Page Objects/ExpensesPage";

describe('GaragePage Testing', () => {
  const loginPage = new LoginPage();
  const expensesPage = new ExpensesPage();


describe('template spec', () => {
  it('passes', () => {
    cy.intercept('POST', '/api/expenses').as('addExpense')
    cy.visit(' https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      }});
    cy.get(".header_signin").click();
    loginPage.signInField.type('vakula@gmail.com');
    loginPage.signInPassword.type('Vakula@01', { sensitive: true })
    loginPage.loginBtn.click();
    loginPage.containUrlCheck('/garage')
    expensesPage.addExpenseBtnSidebar.click();
    expensesPage.addExpenseBtnMain.click();
    expensesPage.AddExpenseMileage.clear().type('520');
    expensesPage.AddExpenseLiters.type('25');
    expensesPage.AddExpenseTotalCost.type('2500');
    expensesPage.AddExpensessBtn.click();
    
    //Додали зверху метод і аліас.Тут виводимо кар айді в консолі і вілідуємо статус:
    cy.wait('@addExpense').then(({response}) => {
      expect(response.body.status).to.equal('ok');
      const carId = response.body.data.carId;
      const expenseId = response.body.data.id;
      
      
      
      cy.request(
        "GET",
        'https://qauto.forstudy.space/api/expenses?carId=${carId}',
      ).then((response) => {
        let isExist;
        response.body.data.forEach((expense) => {
          if (expense.id === expenseId) {
            isExist = true;
          }
        });
        expect(isExist).to.equal(true);
              });
    });

  });
});
});