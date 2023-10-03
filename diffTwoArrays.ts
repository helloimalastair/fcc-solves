function diffArray<ItemType = unknown>(arr1: ItemType[], arr2: ItemType[]) {
  const interSet = new Set(arr1);
  for(const item of arr2) {
    if(interSet.has(item)) {
      interSet.delete(item);
    } else {
      interSet.add(item);
    }
  }
  return Array.from(interSet.keys());
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);