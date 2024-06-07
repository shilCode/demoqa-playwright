import { test, expect } from '@playwright/test';
import { Menu } from '../pageobjects/Menu';
import { Cart } from '../pageobjects/Cart';
import {MenuPageDetails, cartDetails} from '../enums/AssertionsDetails';

test('e2e flow - user navigates to a coffee shop and order a flat white',async ({page})=>{
    await page.goto('/')
    const menu = new Menu(page)
    await menu.flatWhite.click()
    await menu.checkout.hover()
    await menu.cartPreviewAssertion()
    const cart = new Cart(page)
    await cart.cartListBtn.click()
    await expect(cart.checkoutBtn).toContainText(MenuPageDetails.previewTotal)
    await cart.checkoutBtn.click()
    await expect(cart.paymentDetals).toContainText(cartDetails.paymentDetails)
    await cart.nameInput.fill(cartDetails.name)
    await cart.emailInput.fill(cartDetails.mail)
    await cart.submitBtn.click()
    await expect(cart.thankYouPurchaseText).toContainText(cartDetails.thankYouPurchaseText)

})