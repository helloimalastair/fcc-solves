// Uses array arg black magic to determine whether an arg is undefined or "undefined"
function addTogether(a: unknown, ...b: unknown[]) {
  if(typeof a !== "number") {
    return undefined;
  }
  if(b.length > 0) {
    const secondArg = b[0];
    if(typeof secondArg !== "number") {
      return undefined;
    }
    return a + secondArg;
  }
  return (c: unknown) => typeof c === "number" ? a + c : undefined;
}
console.log(addTogether(5))