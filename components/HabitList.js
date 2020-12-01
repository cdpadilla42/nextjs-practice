import Habit from './IndividualHabit';

const HabitList = ({ habits }) => {
  return (
    <section>
      <h2>My Habits</h2>
      {habits.map((habit) => {
        return <Habit key={habit} habit={habit} />;
      })}
    </section>
  );
};

export default HabitList;
