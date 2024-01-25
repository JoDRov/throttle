import { throttle } from "./index";
import { delay } from "./index"
import "regenerator-runtime/runtime" 

let id = 1;

describe('myFunction throttled', () => {

  /*beforeEach(() => {
    return new Promise<void>((resolve) => {
      resolve()
    })
  })*/

  it('should throttle the function calls', async () => {
    throttle(id, delay).then((data) => expect(data).toBe('David'))
  })
  it('should throttle the function calls', async () => {
    id = 0;
    throttle(id, delay).then((data) => expect(data).toBe('Jose'))
  })
  it('should throttle the function calls', async () => {
    id = 2;
    throttle(id, delay).then((data) => expect(data).toBe('Juan'))
  })
});