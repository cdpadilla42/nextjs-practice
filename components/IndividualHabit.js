import HabitButton from './HabitButton';

const colors = ['#718096', '#F56565', '#F6E05E', '#68D391', '#63B3ED'];

const IndividualHabit = ({ habit, index }) => {
  const dates = getLast5Days();
  console.log(habit);
  return (
    <article>
      <h3 style={{ borderColor: colors[index % 5] }}>{habit.name}</h3>
      <div className="buttons">
        {dates.map((date) => {
          return (
            <HabitButton
              day={date}
              key={date.getTime()}
              habitId={habit._id}
              events={habit.events}
            >
              0
            </HabitButton>
          );
        })}
      </div>
      <style jsx>
        {`
          article {
            padding: 20px;
            border-radius: 15px;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
          }

          h3 {
            margin-top: 0;
            border-bottom: solid 4px ${colors[index % 5]};
          }

          .buttons {
            display: flex;
          }
        `}
      </style>
    </article>
  );
};

const getLast5Days = () => {
  const dates = '01234'.split('').map((day) => {
    const tempDate = new Date();
    tempDate.setDate(tempDate.getDate() - day);
    tempDate.setHours(0, 0, 0, 0);
    return tempDate;
  });
  return dates;
};

export default IndividualHabit;
