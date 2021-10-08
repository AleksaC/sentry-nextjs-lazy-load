if (typeof window !== "undefined") {
  // If left without client check this breaks build, which is IMO the desired
  // behavior instead of passing and notifying with sentry
  const doAsyncWork = () => Promise.reject(new Error("Client Test 1"));
  doAsyncWork();
}

const Test1 = () => <h1>Client Test 1</h1>;

export default Test1;
