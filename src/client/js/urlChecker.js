
import isURL from 'validator/lib/isURL';


function checkForUrl (url){

return isURL(url);
}

export { checkForUrl }
