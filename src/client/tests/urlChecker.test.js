import { checkForUrl } from '../js/urlChecker'

test('this Url should return true', ()=>{

    expect(checkForUrl('https://www.youtube.com/')).toBeTruthy();
})

test('this Url should return false', ()=>{
    expect(checkForUrl('go ogle.com')).toBeFalsy();
})
