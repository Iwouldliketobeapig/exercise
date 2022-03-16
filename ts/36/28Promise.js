class _Promise {
  PromiseState = 'pending';
  result = undefined;
  thenFun = [];
  catchFun = [];

  constructor(fn) {
    const resolve = (data) => {
      this.PromiseState = 'fulfilled';
      this.result = data;
      setTimeout(() => {
        if (this.thenFun.length > 0) {
          this.thenFun.forEach(ele => {
            try {
              const res = ele(data);
              if (res instanceof _Promise) {
                return res;
              }
              return _Promise.resolve(res);
            } catch (error) {
              return _Promise.reject(error);
            }
          })
        }
      }, 0);
    }

    const reject = (error) => {
      this.PromiseState = 'rejected';
      this.result = error;
      setTimeout(() => {
        if (this.catchFun.length > 0) {
          this.catch.forEach(ele => {
            try {
              const res = ele(data);
              if (res instanceof _Promise) {
                return res;
              }
              return _Promise.resolve(res);
            } catch (error) {
              console.log(error);
              return _Promise.reject(error);
            }
          })
        }
      }, 0);
    }

    fn(resolve, reject);
  }

  then(thenFun, catchFun) {
    if (this.PromiseState === 'pending') {
      if (thenFun) this.thenFun.push(thenFun);
      if (catchFun) this.catchFun.push(catchFun);
    } else if (this.PromiseState === 'fulfilled') {
      return thenFun(this.result);
    } else if (catchFun) {
      return catchFun(this.result)
    }
    return this;
  }

  catch(catchFun) {
    this.then(null, catchFun);
    return this;
  }
}

_Promise.resolve = function (data) {
  return new _Promise((res) => {
    res(data);
  });
}

_Promise.reject = function (data) {
  return new _Promise((res, rej) => {
    rej(data);
  })
}

_Promise.all = function (all) {
  const dealAll = all.map(ele => {
    if (ele instanceof _Promise) {
      return ele;
    } else {
      return _Promise.resolve(ele);
    }
  })
  return new _Promise((resolve, reject) => {
    let result = new Array(all.length).fill(null);
    for (let index in dealAll) {
      try {
        dealAll[index].then(res => {
          result.splice(index, 1, res);
          if (!result.includes(null)) {
            resolve(result);
          }
        }).catch(err => reject(err));
        console.log(dealAll)
      } catch (err) {
        return reject(err);
      }
    }
  })
}

function _Then() {
  return new _Promise((res, rej) => {
    setTimeout(() => res(1234), 3000);
  })
}

function _Then2() {
  return new _Promise((res, rej) => {
    setTimeout(() => res(12412), 5000);
  })
}

// test = _Then().then(res => console.log(res));

// _Promise.resolve(12354).then((res) => console.log(res));

_Promise.all([_Then(), _Then2()]).then(res => console.log(res)).catch(err => console.log(err))
