import Habit from './IndividualHabit';
import { useQuery, gql } from '@apollo/client';

const GET_HABITS = gql`
  query {
    habits {
      name
      _id
    }
  }
`;

const HabitList = ({ habits }) => {
  const { loading, error, data } = useQuery(GET_HABITS);

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
