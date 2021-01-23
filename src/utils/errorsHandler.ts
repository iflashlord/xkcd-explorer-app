import { AxiosError } from 'axios';

/**
 * handling error for response by status code / request only log / and messages 
 *
 * @export
 * @param {AxiosError} error
 * @param {*} dispatch
 */
export function errorHandler(error: AxiosError): string { 
    let errorMessage = '';
    
    if (error.response) {
      // The request was made and the server responded with a status code
      
      switch (error.response.status) {
        case 403:
          errorMessage = 'Your client does not have permission to get data from the server.';
          break;
  
        case 404:
          errorMessage = 'URL not found!';
          break;
  
        case 429:
          errorMessage = 'CROS Domain Error!'
          break
  
        case 400:
          errorMessage = 'Validation Error!'
          break
  
        case 500:
          errorMessage = 'Server error, try again!'
          break
  
        default:
          errorMessage = 'Something went wrong!'
          break
      }
  
      console.log('Response Error', errorMessage);
  
    } else if (error.request) {
      // it needs for requests 
      console.log(error.request);
      errorMessage = 'Something went wrong!'
    } else {
      // Something happened in setting up the request that triggered an Error
      errorMessage = error.message
    }
  
    console.log(error.config);

    return errorMessage;
  
  }