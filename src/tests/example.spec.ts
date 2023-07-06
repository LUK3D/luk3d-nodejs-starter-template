import { expect, test } from "vitest";

test('Sum two numbers', ()=>{
    expect(1+3).toEqual(4);
});
test('Sum two numbers that will fail', ()=>{
    expect(1+3).toEqual(5);
});