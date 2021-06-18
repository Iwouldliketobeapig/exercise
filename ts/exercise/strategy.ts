function isEmpty<T>(value: string, errorMessag: T): boolean | T {
  if (value === undefined || value === '') {
    return errorMessag;
  }
  return false;
}

function minLength<T>(value: string, min: number ,errorMessage: T): boolean | T {
  if (!value || value.length < min) {
    return errorMessage;
  }
  return false;
}

class Strategy {
  cacheEvents: any[];
  constructor() {
    this.cacheEvents = [];
  }

  add (validate: any, value: string, errorMessag: string) {
    
  }
}