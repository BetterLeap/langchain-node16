import { test, expect } from "@jest/globals";
import { AIChatMessage, HumanChatMessage, } from "../../schema/index.js";
import { EntityMemory } from "../entity_memory.js";
import { BaseLLM } from "../../llms/base.js";
import { ChatMessageHistory } from "../../stores/message/in_memory.js";
class FakeLLM extends BaseLLM {
    _llmType() {
        return "fake";
    }
    async _generate(_prompts) {
        const mockVal = { generations: [[{ text: "foo" }]] };
        return mockVal;
    }
}
test("Test entity memory", async () => {
    const model = new FakeLLM({});
    const memory = new EntityMemory({ llm: model });
    const result1 = await memory.loadMemoryVariables({ input: "foo" });
    const expectedResult1 = {
        history: "",
        entities: { foo: "No current information known." },
    };
    expect(result1).toStrictEqual(expectedResult1);
    await memory.saveContext({ foo: "bar" }, { bar: "foo" });
    const expectedString = "Human: bar\nAI: foo";
    const result2 = await memory.loadMemoryVariables({ input: "foo" });
    expect(result2).toStrictEqual({
        history: expectedString,
        entities: { foo: "foo" },
    });
});
test("Test entity memory with pre-loaded history", async () => {
    const model = new FakeLLM({});
    const pastMessages = [
        new HumanChatMessage("My name's foo"),
        new AIChatMessage("Nice to meet you, foo!"),
    ];
    const memory = new EntityMemory({
        returnMessages: true,
        chatHistory: new ChatMessageHistory(pastMessages),
        llm: model,
    });
    const result = await memory.loadMemoryVariables({ input: "foo" });
    expect(result).toStrictEqual({
        history: pastMessages,
        entities: { foo: "No current information known." },
    });
});
