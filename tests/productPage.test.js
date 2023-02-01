import test from '../testFixtures/fixture'
import { expect } from '@playwright/test'
import {
	baseUrl,
	title,
	landingPageUrl
} from '../support/constants'

test.describe(
	() => {
		test('Переход на главную, проверка тайтла', async ({
			loginPage,
			productsPage
		}) => {
			await test.step('', async () => {
				await loginPage.openApp()
				await loginPage.loginPageLogo()
				expect(await loginPage.getTitle()).toBe(title)
				expect(await loginPage.getUrl()).toContain(baseUrl)
        	})

			await test.step('Выполняем авторизацию', async () => {
				await loginPage.loginAsStandardUser()
			})

			await test.step(
				'Проверяем успешную авторазицию',
				async () => {
					await productsPage.verifyProductsPageLogoVisible()
					await productsPage.verifyProductsPageTitleVisible()
					await productsPage.verifyPeekImage()
					expect(await productsPage.getUrl()).toContain(landingPageUrl)
				}
			)

			await test.step(
				'Проверяем отображение корзины и контента магазина',
				async () => {
					await productsPage.shoppingCartLink()
					await productsPage.productSortContainerVisible()
				}
			)

			await test.step(
				'Выполняем логаут и проверяем что оказались на странице входа',
				async () => {
					await productsPage.burgerButtonVisible()
					await productsPage.burgerButtonClick()
					await productsPage.clickLogoutSideBarLink()
					await loginPage.loginPageLogo()
					await loginPage.usernameFieldVisible()
					await loginPage.passwordFieldVisible()
					await loginPage.loginButtonIsEnabled()
					expect(await loginPage.getTitle()).toBe(title)
					expect(await loginPage.getUrl()).toContain(baseUrl)
				}
			)
		}
	)
})