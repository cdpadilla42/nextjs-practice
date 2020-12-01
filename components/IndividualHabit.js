import HabitButton from './HabitButton';

const IndividualHabit = ({ habit }) => {
  const dates = getLast5Days();
  console.log(dates);
  return (
    <article>
      <h3>{habit}</h3>
      <div>
        {dates.map((day) => {
          const [month, date] = day.toLocaleDateString('en-US').split('/');
          return (
            <>
              <span>{month + '/' + date}</span>
              <HabitButton>0</HabitButton>
            </>
          );
        })}
      </div>
    </article>
  );
};

const getLast5Days = () => {
  const dates = '01234'.split('').map((day) => {
    const tempDate = new Date();
    tempDate.setDate(tempDate.getDate() - day);
    return tempDate;
  });
  return dates;
};

export default IndividualHabit;
