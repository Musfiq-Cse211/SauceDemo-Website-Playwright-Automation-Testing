import { test } from '@playwright/test';

async function performActionWithDelay(action, delay = 2000) {
  await action; // Perform the action
  await new Promise(resolve => setTimeout(resolve, delay));
}

test('sauce demo test', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.saucedemo.com/');
  await performActionWithDelay(Promise.resolve(), 2000);

  await performActionWithDelay(
    page.locator('#user-name').fill('standard_user')
  );
  await performActionWithDelay(page.locator('#password').fill('secret_sauce'));
  await performActionWithDelay(page.locator('#login-button').click());

  await performActionWithDelay(
    page.locator('.product_sort_container').selectOption('lohi')
  );
  await performActionWithDelay(
    page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click()
  );
  await performActionWithDelay(
    page.locator('#add-to-cart-sauce-labs-bike-light').click()
  );
  await performActionWithDelay(
    page.locator('#add-to-cart-sauce-labs-fleece-jacket').click()
  );
  await performActionWithDelay(
    page.locator('#add-to-cart-sauce-labs-onesie').click()
  );

  await performActionWithDelay(
    page.locator('#remove-sauce-labs-bike-light').click()
  );

  await performActionWithDelay(page.click('#shopping_cart_container'));
  await performActionWithDelay(page.click('button[name="checkout"]'));

  await performActionWithDelay(page.locator('#first-name').fill('sauce'));
  await performActionWithDelay(page.locator('#last-name').fill('demo'));
  await performActionWithDelay(page.locator('#postal-code').fill('1212'));
  await performActionWithDelay(page.locator('#continue').click());
  await performActionWithDelay(page.locator('#finish').click());
  await performActionWithDelay(page.locator('#back-to-products').click());

  await performActionWithDelay(page.locator('#react-burger-menu-btn').click());
  await performActionWithDelay(page.locator('#logout_sidebar_link').click());

  await page.pause();
});





