import Header from "../helper/Page Objects/Header";

describe('HeaderTesting', () => {
  const header = new Header();
  beforeEach(() => {
    header.navigate();
  });

//   it('VisitSite', () => {});


  it('Check redirection to Login Page', () => {
      header.signInBtn.click();
      header.modalTitle.should('be.visible');
      })

  it('Check redirection to Logo', () => {
      header.headerLogo.click();
      header.containUrlCheck("https://qauto.forstudy.space/");
      })

  it('Check redirection to Home Page', () => {
      header.homeBtn.click();
      header.containUrlCheck("https://qauto.forstudy.space/");
      })

  it('Check redirection to About Secton', () => {
      header.aboutBtn.click();
      cy.get ('#aboutSection').should('be.visible');
      })

  it('Check redirection to Contact Sction', () => {
      header.contactBtn.click();
      cy.get ('#contactsSection').should('be.visible');
      })

});