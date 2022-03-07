import { AnyObject } from './base';

function ajax(url: string, type: 'get' | 'post', data: AnyObject): Promise<string> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(type as string, url);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText))
      }
    }
    xhr.send();
  })
}