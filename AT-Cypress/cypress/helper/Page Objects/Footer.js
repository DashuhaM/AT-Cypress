import BasePage from "./BasePage";

const url = "/";

export default class extends BasePage {
    constructor(){
        super(url);
    }
get facebookIcn(){
    return cy.get('.icon-facebook')
}

get telegramIcn(){
    return cy.get('.icon-telegram')
}

get youtubeIcn(){
    return cy.get('.icon-youtube')
}

get instagramIcn(){
    return cy.get('.icon-instagram')
}

get linkedInIcn(){
    return cy.get('.icon-linkedin')
}

get ithillelWebsite(){
    return cy.get('a[href="https://ithillel.ua"]')
}

get ithilleSupport(){
    return cy.get('a[href="mailto:developer@ithillel.ua"]')
}

}