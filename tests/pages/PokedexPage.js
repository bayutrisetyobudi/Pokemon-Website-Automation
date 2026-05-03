import { expect } from '@playwright/test'; 

export class PokedexPage { 
    constructor(page) { 
        this.page = page; 
        this.searchInput = page.locator('#searchInput'); 
        this.pikachuCard = page.locator('text=Pikachu').first(); 
    } 
    async searchPokemon(name) { 
        await expect(this.searchInput).toBeVisible(); 
        await this.searchInput.fill(name); 
        await this.page.keyboard.press('Enter');
     } 
     async selectPokemon() { 
        await expect(this.pikachuCard).toBeVisible(); 
        await this.pikachuCard.click(); 
    } 
}