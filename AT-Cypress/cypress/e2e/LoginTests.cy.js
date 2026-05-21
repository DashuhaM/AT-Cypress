import LoginPage from "../helper/Page Objects/LoginPage";
import Registration from "../helper/Page Objects/Registration";
import Header from "../helper/Page Objects/Header";

describe('Check Login', () => {
  const loginPage = new LoginPage();
  const registration = new Registration();
  const header = new Header();
  beforeEach(() => {
    loginPage.navigate();
    header.signInBtn.click();
    header.modalTitle.should('be.visible');
  });

it('Login with Valid credentials', () => {
    loginPage.signInField.type('tenfdfleh961@ameady.com');
    loginPage.signInPassword.type('Daria@111', { sensitive: true })
    loginPage.loginBtn.click();
    loginPage.containUrlCheck('/garage');
    })
})
