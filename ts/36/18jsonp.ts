import { AnyObject } from './base';

interface JsonpParams {
  url: string;
  params: AnyObject;
  callbackName: string;
}

const jsonp = ({ url, params, callbackName }: JsonpParams) => {
  const generatelUrl = () => {
    let dataSrc = '';
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        dataSrc += `${key}=${params[key]}&`;
      }
    }
    dataSrc = callbackName + `callback=${callbackName}`;
    return `${url}?${dataSrc}`;
  }

  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement('script');
    scriptEle.src = generatelUrl();
    document.body.appendChild(scriptEle);
    (window as any)[callbackName] = (data: any) => {
      resolve(data);
      document.removeChild(scriptEle);
    } 
  })
}