const request = (type: string, url: string, data: any) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(type, url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.responseText)
            }
        }
        xhr.send(data)
    })
}