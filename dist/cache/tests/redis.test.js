import { test, expect, jest } from "@jest/globals";
import hash from "object-hash";
import { RedisCache } from "../redis.js";
const sha256 = (str) => hash(str);
test("RedisCache", async () => {
    const redis = {
        get: jest.fn(async (key) => {
            if (key === sha256("foo_bar_0")) {
                return "baz";
            }
            return null;
        }),
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cache = new RedisCache(redis);
    expect(await cache.lookup("foo", "bar")).toEqual([{ text: "baz" }]);
});
