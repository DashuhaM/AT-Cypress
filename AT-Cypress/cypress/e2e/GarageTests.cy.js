import GaragePage from "../helper/Page Objects/GaragePage"
import Header from "../helper/Page Objects/Header";
import LoginPage from "../helper/Page Objects/LoginPage";

describe('GaragePage Testing', () => {
  const garagepage = new GaragePage();
  const header = new Header();
  const loginPage = new LoginPage();


  beforeEach(() => {
    garagepage.navigate();
    header.signInBtn.click();
    loginPage.signInField.type('tenfdfleh961@ameady.com');
    loginPage.signInPassword.type('Daria@111', { sensitive: true })
    loginPage.loginBtn.click();
    loginPage.containUrlCheck('/garage');
  });


it('Add Car', () => {
      garagepage.AddCarBtn.click();
      garagepage.AddCarModal.should('be.visible');
      garagepage.BrandField.select('Ford');
      garagepage.ModelField.select('Mondeo');
      garagepage.MileageField.type('100');
      garagepage.AddBtn.click();
      garagepage.CarName.first().should('contain', 'Ford Mondeo')
    });

it('Cancel Adding Car', () => {
      garagepage.AddCarBtn.click();
      garagepage.AddCarModal.should('be.visible');
      garagepage.BrandField.select('Ford');
      garagepage.ModelField.select('Mondeo');
      garagepage.MileageField.type('100');
      garagepage.CancelBtn.click();
    });

it('Modal Closing', () => {
      garagepage.AddCarBtn.click();
      garagepage.AddCarModal.should('be.visible');
      garagepage.BrandField.select('Ford');
      garagepage.CloseBtn.click();
    });
})