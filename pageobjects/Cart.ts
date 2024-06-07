import { Locator, Page } from "@playwright/test";

export class Cart{
    constructor(
        public readonly page:Page=page,
        public readonly cartListBtn:Locator = page.locator('li').filter({ hasText: 'cart' }),
        public readonly checkoutBtn:Locator = page.locator('[data-test="checkout"]'),
        public readonly paymentDetals:Locator = page.getByText('Payment details'),
        public readonly nameInput:Locator = page.getByLabel('Name'),
        public readonly emailInput:Locator = page.getByLabel('Email'),
        public readonly submitBtn:Locator = page.getByRole('button', { name: 'Submit' }),
        public readonly thankYouPurchaseText:Locator = page.getByRole('button', { name: 'Thanks for your purchase.' }),
    ){}

}