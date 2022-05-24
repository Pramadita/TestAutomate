import { Selector, t } from "testcafe";

fixture `SignIn`
.page("https://www.amazon.com/")

test('Sign In valid email', async t=>{

    await t
    .click(Selector('span').withText('Hello, Sign in'))
    .click(Selector('span').withText('Sign in'))
    .typeText(Selector('input#ap_email'), 'pramaditasielda@gmail.com')
    .click(Selector('input').withText('Continue'))
    .expect(Selector('label').withExactText('Password').exists).ok();
});

test('Sign In invalid email', async t=>{

    await t
    .click(Selector('span').withText('Hello, Sign in'))
    .click(Selector('span').withText('Sign in'))
    .typeText(Selector('input#ap_email'), 'pramaditasieldagmailcom')
    .click(Selector('input').withText('Continue'))
    .expect(Selector('label').withExactText('Password').exists).notOk();
});



