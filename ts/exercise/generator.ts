function* foo(a: number, b: number): any {
  console.log('begin', '----------------');
  const x = yield 345;
  const y = yield 123;
}

function runGen (gen: GeneratorFunction) {
  const it = gen();
  const next = () => {
    const res = it.next();
    if (!res.done) {
      next();
    }
    console.log(res.value);
  }

  next();
}

runGen(foo as GeneratorFunction);
