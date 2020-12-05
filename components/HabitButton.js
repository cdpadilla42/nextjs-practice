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
  mutation removeEvent($habitId: ID, eventId: ID) {
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

const HabitButton = ({ day }) => {
  const [month, date] = day.toLocaleDateString('en-US').split('/');
  const [addEvent] = useMutation(ADD_EVENT);
  return (
    <span>
      {month + '/' + date}
      {}

      <button onClick={() => console.log('do stuff')}>'X'</button>
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
