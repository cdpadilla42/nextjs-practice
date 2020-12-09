import { useMutation, gql } from '@apollo/client';

const ADD_EVENT = gql`
  mutation addEvent($habitId: ID, $date: Date) {
    addEvent(date: $date, habitId: $habitId) {
      name
      events {
        date
        _id
      }
      _id
    }
  }
`;

const REMOVE_EVENT = gql`
  mutation removeEvent($habitId: ID, $eventId: ID) {
    removeEvent(eventId: $eventId, habitId: $habitId) {
      name
      events {
        date
        _id
      }
      _id
    }
  }
`;

const HabitButton = ({ day, habitId, events }) => {
  const [month, date] = day.toLocaleDateString('en-US').split('/');
  console.log('day', day);
  console.log(events);
  const [addEvent] = useMutation(ADD_EVENT, {
    refetchQueries: ['getHabits'],
    // update(cache, { data: { addEvent } }) {
    //   cache.modify({
    //     fields: {
    //       habits(existingHabits = []) {
    //         const newHabitRef = cache.writeFragment({
    //           data: addEvent,
    //           fragment: gql`
    //             fragment NewHabit on Habit {
    //               events
    //             }
    //           `,
    //         });
    //         return [...existingHabits, newHabitRef];
    //       },
    //   },
    // });
    // },
  });
  const [removeEvent] = useMutation(REMOVE_EVENT, {
    refetchQueries: ['getHabits'],
  });
  const found = events.find((event) => {
    return event.date === day.getTime();
  });

  return (
    <span>
      {month + '/' + date}
      {!!found ? (
        <button
          onClick={() =>
            removeEvent({
              variables: {
                habitId,
                eventId: found._id,
              },
            })
          }
        >
          X
        </button>
      ) : (
        <button
          onClick={() =>
            addEvent({
              variables: {
                habitId,
                date: day.getTime(),
              },
            })
          }
        >
          0
        </button>
      )}

      <style jsx>{`
        span {
          display: flex;
          flex-direction: column;
        }
        span + span {
          margin-left: 10px;
        }

        button {
          border: none;
          margin-top: 1rem;
        }
      `}</style>
    </span>
  );
};

export default HabitButton;
