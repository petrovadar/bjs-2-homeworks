//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    const objectFromCache = cache.find((item) => item.hash === hash);

    if (objectFromCache) {
      console.log(`Из кеша: ${objectFromCache.value}`);
      return `Из кеша: ${objectFromCache.value}`;
    }

    const result = func(...args);
    cache.push({ hash: hash, value: result });

    if (cache.length > 5) {
      cache.shift();
    }

    console.log(`Вычисляем: ${result}`);
    return `Вычисляем: ${result}`;
  }

  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;

  function wrapper(...args) {
    wrapper.allCount += 1;

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        wrapper.count += 1;
        func(...args);
      }, delay);
    } else {
      wrapper.count += 1;
      func(...args);
      timeoutId = setTimeout(() => {}, delay);
    }
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}
