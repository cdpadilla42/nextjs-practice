import Habit from './habits';

export const habitsMutations = {
  Mutation: {
    async addHabit(_, { habit }) {
      console.log('add habit', habit);
      const newHabit = new Habit(habit);
      newHabit.save((err, newHabit) => {
        if (err) return console.error(err);
        console.log('saved', newHabit);
      });
    },
  },
};
