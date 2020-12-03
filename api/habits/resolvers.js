export const habitsResolvers = {
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
