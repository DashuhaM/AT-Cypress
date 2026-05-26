import Footer from "../helper/Page Objects/Footer";

describe('Footer Testing', () => {
  const footer = new Footer();
  beforeEach(() => {
    footer.navigate();
  });

  it('Check redirection to Facebook', () => {
    footer.facebookIcn.parent().invoke('removeAttr', 'target').click();
    footer.containUrlCheck("facebook");
      });

  it('Check redirection to Telegram', () => {
    footer.telegramIcn.parent().should('have.attr', 'href').and('include', 't.me');
      });

  it('Check redirection to Youtube', () => {
    footer.youtubeIcn.parent().should('have.attr', 'href').and('include', 'youtube');
      });

  it('Check redirection to Instagram', () => {
    footer.instagramIcn.parent().should('have.attr', 'href').and('include', 'instagram');
      });

  it('Check redirection to LinkedIn', () => {
    footer.linkedInIcn.parent().should('have.attr', 'href').and('include', 'linkedin');
      });

  it('Check redirection to ithillel Support', () => {
    footer.ithilleSupport.should('have.attr', 'href').and('include', 'mailto:developer@ithillel.ua');
      });


  it('Check redirection to ithillel Website', () => {
    footer.ithillelWebsite.invoke('removeAttr', 'target').click();
    footer.containUrlCheck("ithillel");
      });

    })