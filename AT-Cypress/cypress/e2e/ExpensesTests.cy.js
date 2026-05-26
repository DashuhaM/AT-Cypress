import GaragePage from "../helper/Page Objects/GaragePage"
import Header from "../helper/Page Objects/Header";
import LoginPage from "../helper/Page Objects/LoginPage";
import ExpensesPage from "../helper/Page Objects/ExpensesPage";

describe('GaragePage Testing', () => {
  const garagepage = new GaragePage();
  const header = new Header();
  const loginPage = new LoginPage();
  const expensesPage = new ExpensesPage();

beforeEach(() => {
    garagepage.navigate();
    header.signInBtn.click();
    loginPage.signInField.type('tenfdfleh961@ameady.com');
    loginPage.signInPassword.type('Daria@111', { sensitive: true })
    loginPage.loginBtn.click();
    loginPage.containUrlCheck('/garage');
  });


it('Add Expenses from the SideBar', () => {
      expensesPage.addExpenseBtnSidebar.click();
      expensesPage.addExpenseBtnMain.click();
      expensesPage.AddExpensesModal.should('be.visible');
      expensesPage.VehicleField.find('option:selected').should('have.text', 'Ford Mondeo');
      expensesPage.AddReportDate.type('11.05.2026')
      expensesPage.AddExpenseMileage.type('141');
      expensesPage.AddExpenseLiters.type('25');
      expensesPage.AddExpenseTotalCost.type('2500');
      expensesPage.AddExpensessBtn.click();
      expensesPage.FuelExpensesTbl.should('be.visible')
    });



})