const page = require('../../page');
const helper = require('../../helper')


describe('Create an order', () => {
  
    it('should save the phone', async () => {
       await browser.url(`/`)
       await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
       const phoneNumber = helper.getPhoneNumber("+1");
       await page.submitPhoneNumber(phoneNumber);
       await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
   })
   it('should set the address', async () => {
    await browser.url(`/`)
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    })
    it('should select a supportive transport', async () => {
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportive()

    })
    it('should add a credit card', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.fillCreditCard('1234 0000 4321', '12');
        const linkedCardElement = '.checkbox-label #card-1';
        const linkedCard = await $(linkedCardElement);
        await expect(linkedCard).toBeExisting();
    });
    it('should write a message for the driver', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const messageField = await $(page.messageField);
        await messageField.waitForDisplayed();
        await messageField.setValue('Please be on time.');
        await expect(messageField).toHaveValue('Please be on time.');
    });
    it('should select blanket and handkerchiefs', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectBlanketAndHandkerchiefs();
        const blanketState = await $(page.blanketState);
        await expect(blanketState).toBeChecked();
     
    });
    it('should select 2 ice creams', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectTwoIceCreams();
        const iceCreamQty = 2;
        await expect($(`div=${iceCreamQty}`)).toBeExisting();
         
    });
    it('should display car search modal', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectBusiness();
        const submitOrderButton = await $(page.submitOrderButton); 
        await submitOrderButton.waitForDisplayed();
        await submitOrderButton.click();
        const carSearchModal = await $(page.carSearchModal);
        await carSearchModal.waitForDisplayed();
        await expect(carSearchModal).toBeDisplayed(); 
    });
    
    
    it('should display driver info in the car search modal', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectBusiness();
        const submitOrderButton = await $(page.submitOrderButton);
        await submitOrderButton.waitForDisplayed();
        await submitOrderButton.click();
        await browser.pause(40000);
        const driverInfo = await $(page.driverInfo);
        await driverInfo.waitForDisplayed();
        await expect(driverInfo).toBeDisplayed(); 
    });
    
});







