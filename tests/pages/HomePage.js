
const { expect } = require('@playwright/test');

class HomePage {

  constructor(page) {

    this.page = page;

    // stable locator
    this.pokedexMenu = page.locator(
      'a[href="/us/pokedex/"]'
    );

    
  }

  async navigateToWebsite() {

    await this.page.goto(
      'https://www.pokemon.com/us',
      {
        waitUntil: 'domcontentloaded'
      }
    );

     await this.page.waitForTimeout(15000);
  }

  async clickPokedex() {

   await this.pokedexMenu.waitFor({ state: 'visible', timeout: 35000 });
   await this.pokedexMenu.click();
   //await this.page.goto( 'https://www.pokemon.com/us/' + "pokedex");
   
  }

  pokedexUrl() {

    return 'https://www.pokemon.com/us/pokedex';
  }
}

module.exports = HomePage;
