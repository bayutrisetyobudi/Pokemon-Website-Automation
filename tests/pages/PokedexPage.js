const { expect } = require('@playwright/test');

class PokedexPage {

  constructor(page) {

    this.page = page;

    // stable locator
    this.searchInput = page.locator('#searchInput');

    this.pikachuCard = page.locator(
      'a[href*="pikachu"]'
    ).first();

   this.pokemonTitle = page.locator('h5');
  }

    async navigateToWebsite() {

    await this.page.goto(
      'https://www.pokemon.com/us/pokedex',
      {
        waitUntil: 'domcontentloaded'
      }
    );
  }

  async validatePokemonName() {

    await expect(this.pokemonTitle).toHaveText('Pikachu');
  }

  async searchPokemon(name) {

    await this.searchInput.waitFor({
      state: 'visible',
      timeout: 25000
    });

    await this.searchInput.click();

    await this.searchInput.fill(name);
       await this.page.waitForTimeout(10000);

    await this.page.keyboard.press('Enter');
    await this.searchInput.press('Enter');
      // tunggu hasil search muncul
    await this.page.waitForTimeout(15000);

    // scroll ke bawah
    await this.page.mouse.wheel(0, 300);

    

  }

  async selectPokemon() {

    await this.pikachuCard.waitFor({
      state: 'visible',
      timeout: 25000
    });

    await this.pikachuCard.click();
  }




  pikachuDetailUrl() {

    return 'https://www.pokemon.com/us/pokedex/pikachu';
  }
}

module.exports = PokedexPage;