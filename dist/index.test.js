import { throttle } from "./index";
import { id } from "./index";
import { delay } from "./index";
describe('myFunction throttled', () => {
    it('should throttle the function calls', async () => {
        const result = await throttle(id, delay);
        console.log(result);
        expect(result).toBe("David");
    });
});
//# sourceMappingURL=index.test.js.map