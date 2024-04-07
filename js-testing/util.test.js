const { generateText, checkAndGenerate } = require('./util')
const puppeteer = require('puppeteer')
// import { generateText } from './util'
// import puppeteer from 'puppeteer'

test('Adott name és adott age teszt', () => {
    let name = 'Max'
    let age = 29
    expect(generateText(name, age)).toBe('Max (29 years old)')
})

test('Másik name és másik age teszt', () => {
    expect(generateText('Anna', 28)).toBe('Anna (28 years old)')
})

test('Üres name és null age teszt', () => {
    expect(generateText('', null)).toBe(' (null years old)')
})

test('undefined name és undefined age teszt', () => {
    let name
    let age
    expect(generateText(name, age)).toBe('undefined (undefined years old)')
})

test('undefined name és undefined age teszt', () => {
    expect(generateText()).toBe('undefined (undefined years old)')
})

test('Valid szöveget kell generálnia', () => {
    const text = checkAndGenerate('Max', 29)
    expect(text).toBe('Max (29 years old)')
})

test('Name és age értékeket kell visszaadnia', () => {
    const text = checkAndGenerate('Anna', 28)
    expect(text).toBe('Anna (28 years old)')
})

test('A name null validálása hamis', () => {
    const text = checkAndGenerate(null, 28)
    expect(text).toBeFalsy()
})

test('A name undefined validálása hamis', () => {
    const text = checkAndGenerate(undefined, 28)
    expect(text).toBeFalsy()
})

test('Az üres name validálása hamis', () => {
    const text = checkAndGenerate('', 28)
    expect(text).toBeFalsy()
})

test('Az age null validálása hamis', () => {
    const text = checkAndGenerate('Max', null)
    expect(text).toEqual(false)
})

test('Az age null validálása hamis', () => {
    const text = checkAndGenerate('Max', null)
    expect(text).toEqual(false)
})

test('Az age undefined validálása hamis', () => {
    const text = checkAndGenerate('Max', undefined)
    expect(text).toEqual(false)
})

test('Az age "" validálása hamis', () => {
    const text = checkAndGenerate('Max', '')
    console.log(text)
    expect(text).toEqual(false)
})

test('Az age "bob" validálása hamis', () => {
    const text = checkAndGenerate('Max', 'bab')
    console.log(text)
    expect(text).toEqual(false)
})

test('egy elemet kell létrehoznia megfelelő stöveggel és class-szal', async () => {
    const browser = await puppeteer.launch({ headless: true /*false, slowMo: 40*/ })
    const page = await browser.pages().then(e => e[0])
    //await page.setViewport({width: 1080, height: 1024});
    await page.goto('C:///vp/web/js-testing-introduction-starting-setup/index.html')
    await page.click('input#name')
    await page.type('input#name', 'Max')
    await page.click('input#age')
    await page.type('input#age', '29')
    await page.click('#btnAddUser')
    const finalText = await page.$eval('.user-item', el => el.textContent)
    expect(finalText).toBe('Max (29 years old)')
    await page.close()
}, 10000)
