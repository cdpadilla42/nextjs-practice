import Habit, { Event } from './habits';

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
      try {
        console.log('saving...');
        console.log(habitId);
        console.log(date);
        date.setHours(0, 0, 0, 0);
        // const oldHabit = Habit.findById(habitId);
        const habit = await Habit.findByIdAndUpdate(habitId, {
          $addToSet: {
            events: {
              date,
            },
          },
        });
        return habit;
      } catch (e) {
        console.log(e);
      }
    },

    async removeEvent(_, { habitId, eventId }) {
      console.log('remove event');
    },
  },
};
