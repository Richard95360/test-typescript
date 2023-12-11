import cloneDeep from 'lodash.clonedeep';

const obj = {
  person: {
    name: {
      first: 'Bobby',
      last: 'Hadz',
    },
    address: {
      country: 'Chile',
      city: 'Santiago',
    },
  },
};

const copy = cloneDeep(obj);

console.log(copy)