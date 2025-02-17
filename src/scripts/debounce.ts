function debounce1(func: (...args: any[]) => void, wait: number) {
    let timeout: ReturnType<typeof setTimeout>;
  
    return function(...args: any[]) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }
  

  export function debounce<T extends (...args: any[]) => any>(
      callback: T,
    ms: number
  ): (...args: Parameters<T>) => Promise<ReturnType<T>> {
    let timer: ReturnType<typeof setTimeout>;
  
    return (...args: Parameters<T>) => {
      if (timer) {
        clearTimeout(timer);
      }
      return new Promise<ReturnType<T>>((resolve) => {
        timer = setTimeout(() => {
          const returnValue = callback(...args) as ReturnType<T>;
          resolve(returnValue);
        }, ms);
      })
    };
  }