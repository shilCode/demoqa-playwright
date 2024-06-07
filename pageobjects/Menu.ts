import { Locator, Page, expect } from "@playwright/test";

export class Menu{
    constructor(
        public readonly page:Page=page,
        public readonly flatWhite:Locator=page.locator('[data-test="Flat_White"]'),
        public readonly checkout:Locator=page.locator('[data-test="checkout"]'),
        public readonly hoverText:Locator=page.locator('[class="unit-desc"]'),
        public readonly previewText:Locator=page.locator('[class="cart-preview show"]')

    ){}
    async cartPreviewAssertion():Promise<void>{
    await expect(this.hoverText).toBeVisible()
    await expect(this.hoverText).toContainText(' x 1')
    await expect(this.previewText).toContainText('Flat White')
    }
}