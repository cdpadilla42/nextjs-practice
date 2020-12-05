import Habit from './IndividualHabit';
import { useQuery, gql } from '@apollo/client';
import { addApolloState, initializeApollo } from '../lib/apollo';

export const GET_HABITS = gql`
  query getHabits {
    habits {
      name
      _id
      events {
        date
      }
    }
  }
`;

const HabitList = ({ habits }) => {
  const { loading, error, data } = useQuery(GET_HABITS, {
    notifyOnNetworkStatusChange: true,
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
