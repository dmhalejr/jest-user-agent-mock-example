test("simple test", () => {
    global.navigator.userAgent = 'iphone';
    expect(global.navigator.userAgent).toBe("iphone");
});

test("another simple test", () => {
    global.navigator.userAgent = 'firefox';
    expect(global.navigator.userAgent).toBe("firefox");
});