import Habit from './IndividualHabit';
import { useQuery, gql } from '@apollo/client';

export const GET_HABITS = gql`
  query getHabits {
    habits {
      name
      _id
      events {
        date
        _id
      }
    }
  }
`;

const HabitList = () => {
  const { loading, error, data } = useQuery(GET_HABITS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-only',
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  console.log(data.habits);
  return (
    <section>
      <h2>My Habits</h2>
      {data.habits.map((habit, index) => {
        return <Habit key={habit._id} habit={habit} index={index} />;
      })}
    </section>
  );
};

export default HabitList;
