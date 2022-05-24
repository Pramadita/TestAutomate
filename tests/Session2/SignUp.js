import { Selector, t } from "testcafe";

fixture `SignIn`
.page("https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&")


test.only('Sign Up valid', async t=>{

    await t
    .click(Selector('a').withExactText('Create your Amazon account'))
    .typeText(Selector('customerName'), 'cek')
    .typeText(Selector('email'), 'byorobun@gmail.com')
    .typeText(Selector('password'), '450123')
    .typeText(Selector('passwordCheck'), '450123')
    .click(Selector('.a-button-input'))
    .expect(Selector('span').withExactText('Hello, Cek').exists).ok();
});

test.only('Sign Up invalid data', async t=>{

    await t
    .click(Selector('a').withExactText('Create your Amazon account'))
    .typeText(Selector('customerName'), 'cek')
    .typeText(Selector('email'), 'byorobunmail.com')
    .typeText(Selector('password'), '450123')
    .typeText(Selector('passwordCheck'), '450123')
    .click(Selector('.a-button-input'))
    .expect(Selector('span').withExactText('Hello, Cek').exists).notOk();
});



