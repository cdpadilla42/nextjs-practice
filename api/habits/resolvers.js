export const habitsMutations = {
  Mutation: {
    async habits() {
      console.log('habits');
      return [
        {
          _id: 'somefunkyarray',
          name: 'Make my bed',
        },
      ];
    },
  },
};
