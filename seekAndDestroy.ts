function destroyer<ItemType = unknown>(arr: ItemType[], ...destructors: ItemType[]) {
  const returnable: ItemType[] = [];
  for(const item of arr) {
    let pass = true;
    for(const destructor of destructors) {
      if(item === destructor) {
        pass = false;
        break;
      }
    }
    if(pass) {
      returnable.push(item);
    }
  }
  return returnable;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));