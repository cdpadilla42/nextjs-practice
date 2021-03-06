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
        // const oldHabit = Habit.findById(habitId);
        const habit = await Habit.findOneAndUpdate(
          {
            _id: habitId,
            'events.date': {
              $ne: date,
            },
          },
          {
            $addToSet: {
              events: {
                date,
              },
            },
          }
        );
        return habit;
      } catch (e) {
        console.log(e);
      }
    },

    async removeEvent(_, { habitId, eventId }) {
      try {
        const deletedHabit = Habit.findByIdAndUpdate(habitId, {
          $pull: {
            events: {
              _id: eventId,
            },
          },
        });
        return deletedHabit;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
