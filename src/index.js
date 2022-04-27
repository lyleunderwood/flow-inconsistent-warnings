// @flow

// Warning: Suppression is missing a code. Please update this suppression to use an error code: $FlowFixMe[incompatible-type]
// $FlowFixMe
const a: number = true;

// Error: Cannot assign true to b because boolean [1] is incompatible with number [2]. [incompatible-type]
const b: number = true;

// $FlowFixMe[incompatible-type]
const c: number = 1;

const o = {
  get a() {
    return 4;
  }, // Warning: unsafe-getters-setters
  set b(x: number) {
    this.c = x;
  }, // Warning: unsafe-getters-setters
  c: 10,
};
