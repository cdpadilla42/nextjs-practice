import Habit from './habits';

export const habitsMutations = {
  Mutation: {
    async addHabit(_, { habit }) {
      try {
        console.log('add habit', habit);
        const newHabit = new Habit(habit);
        const result = await newHabit.save((err, newHabit) => {
          if (err) return console.error(err);
          return newHabit;
        });
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    },

    async addEvent(_, { habitId, date }) {
      console.log('add event');
    },

    async removeEvent(_, { habitId, eventId }) {
      console.log('remove event');
    },
  },
};
