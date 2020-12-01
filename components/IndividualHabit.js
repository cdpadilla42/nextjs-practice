import HabitButton from './HabitButton';

const IndividualHabit = ({ habit }) => {
  return (
    <article>
      <h3>{habit}</h3>
      <dib>
        <HabitButton>0</HabitButton>
        <HabitButton>0</HabitButton>
        <HabitButton>X</HabitButton>
        <HabitButton>0</HabitButton>
        <HabitButton>0</HabitButton>
      </dib>
    </article>
  );
};

export default IndividualHabit;
