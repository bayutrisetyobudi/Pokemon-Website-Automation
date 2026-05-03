import { expect } from '@playwright/test';
 
export class HomePage { constructor(page) {
     this.page = page; this.pokedexMenu = page.locator('text=Pokédex'); 
    }
    
    async goto() { 
        await this.page.goto('https://www.pokemon.com/us'); 
    } 
    
    async clickPokedex() { 
        
        await expect(this.pokedexMenu).toBeVisible(); 
        await this.pokedexMenu.click(); } 
    
    }