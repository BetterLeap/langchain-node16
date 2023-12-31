import { expect } from "@jest/globals";
import { CacheGet, CacheSet, CreateCache, } from "@gomomento/sdk";
import { MomentoCache } from "../momento.js";
class MockClient {
    constructor() {
        Object.defineProperty(this, "cache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cache = new Map();
    }
    async get(_, key) {
        if (this.cache.has(key)) {
            return new CacheGet.Hit(new TextEncoder().encode(this.cache.get(key)));
        }
        else {
            return new CacheGet.Miss();
        }
    }
    async set(_, key, value) {
        this.cache.set(key, value);
        return new CacheSet.Success();
    }
    async createCache() {
        return new CreateCache.Success();
    }
    deleteCache() {
        throw new Error("Method not implemented.");
    }
    listCaches() {
        throw new Error("Method not implemented.");
    }
    flushCache() {
        throw new Error("Method not implemented.");
    }
    ping() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }
    increment() {
        throw new Error("Method not implemented.");
    }
    setIfNotExists() {
        throw new Error("Method not implemented.");
    }
    setFetch() {
        throw new Error("Method not implemented.");
    }
    setAddElement() {
        throw new Error("Method not implemented.");
    }
    setAddElements() {
        throw new Error("Method not implemented.");
    }
    setRemoveElement() {
        throw new Error("Method not implemented.");
    }
    setRemoveElements() {
        throw new Error("Method not implemented.");
    }
    listFetch() {
        throw new Error("Method not implemented.");
    }
    listLength() {
        throw new Error("Method not implemented.");
    }
    listPushFront() {
        throw new Error("Method not implemented.");
    }
    listPushBack() {
        throw new Error("Method not implemented.");
    }
    listConcatenateBack() {
        throw new Error("Method not implemented.");
    }
    listConcatenateFront() {
        throw new Error("Method not implemented.");
    }
    listPopBack() {
        throw new Error("Method not implemented.");
    }
    listPopFront() {
        throw new Error("Method not implemented.");
    }
    listRemoveValue() {
        throw new Error("Method not implemented.");
    }
    listRetain() {
        throw new Error("Method not implemented.");
    }
    dictionarySetField() {
        throw new Error("Method not implemented.");
    }
    dictionarySetFields() {
        throw new Error("Method not implemented.");
    }
    dictionaryGetField() {
        throw new Error("Method not implemented.");
    }
    dictionaryGetFields() {
        throw new Error("Method not implemented.");
    }
    dictionaryFetch() {
        throw new Error("Method not implemented.");
    }
    dictionaryIncrement() {
        throw new Error("Method not implemented.");
    }
    dictionaryRemoveField() {
        throw new Error("Method not implemented.");
    }
    dictionaryRemoveFields() {
        throw new Error("Method not implemented.");
    }
    sortedSetFetchByRank() {
        throw new Error("Method not implemented.");
    }
    sortedSetFetchByScore() {
        throw new Error("Method not implemented.");
    }
    sortedSetPutElement() {
        throw new Error("Method not implemented.");
    }
    sortedSetPutElements() {
        throw new Error("Method not implemented.");
    }
    sortedSetGetRank() {
        throw new Error("Method not implemented.");
    }
    sortedSetGetScore() {
        throw new Error("Method not implemented.");
    }
    sortedSetGetScores() {
        throw new Error("Method not implemented.");
    }
    sortedSetIncrementScore() {
        throw new Error("Method not implemented.");
    }
    sortedSetRemoveElement() {
        throw new Error("Method not implemented.");
    }
    sortedSetRemoveElements() {
        throw new Error("Method not implemented.");
    }
    itemGetType() {
        throw new Error("Method not implemented.");
    }
}
describe("MomentoCache", () => {
    it("should return null on a cache miss", async () => {
        const client = new MockClient();
        const cache = await MomentoCache.fromProps({
            client,
            cacheName: "test-cache",
        });
        expect(await cache.lookup("prompt", "llm-key")).toBeNull();
    });
    it("should get a stored value", async () => {
        const client = new MockClient();
        const cache = await MomentoCache.fromProps({
            client,
            cacheName: "test-cache",
        });
        const generations = [{ text: "foo" }];
        await cache.update("prompt", "llm-key", generations);
        expect(await cache.lookup("prompt", "llm-key")).toStrictEqual(generations);
    });
    it("should work with multiple generations", async () => {
        const client = new MockClient();
        const cache = await MomentoCache.fromProps({
            client,
            cacheName: "test-cache",
        });
        const generations = [
            { text: "foo" },
            { text: "bar" },
            { text: "baz" },
        ];
        await cache.update("prompt", "llm-key", generations);
        expect(await cache.lookup("prompt", "llm-key")).toStrictEqual(generations);
    });
});
