let HomePage=require ('../Pages/HomePage')


describe('democalculator tests',function(){

    it('Addition test',function(){

        HomePage.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(3000);
       HomePage.enterFirstNumber('2');
       HomePage.enterSecondNumber('3');
       HomePage.ClickGoButton();
       HomePage.VerifyResult('5');
       browser.sleep(3000);
         //browser.get('http://juliemr.github.io/protractor-demo/');
        // browser.sleep(3000);

        // c.sendKeys('2');
        // //expect(element(by.model('first')).getAttribute('value').tobe('2'));
        // element(by.model('second')).sendKeys('3');
        // element(by.css('[ng-click="doAddition()"]')).click();

        // let result=element(by.cssContainingText('.ng-binding','5'));
        // expect(result.getText()).toEqual('5');
        // browser.sleep(3000);
    });

    // it('Addition test fail',function(){

    //     HomePage.get('http://juliemr.github.io/protractor-demo/');
    //     browser.sleep(3000);
    //    HomePage.enterFirstNumber('2');
    //    HomePage.enterSecondNumber('3');
    //    HomePage.ClickGoButton();
    //    HomePage.VerifyResult('6');
    //    browser.sleep(3000);
        
    // });

    
});