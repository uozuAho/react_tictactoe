import { getStore } from "./store";

it('should give me the store in initial state', () => {
    const store = getStore();

    expect(store.getState().history.length).toBe(1);
    expect(store.getState().stepNumber).toBe(0);
    expect(store.getState().xIsNext).toBe(true);
});
