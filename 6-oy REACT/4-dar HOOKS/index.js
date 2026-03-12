const obj = {
  k: 12,
  cons() {
    return this;
  },
};

console.log(obj.cons());
