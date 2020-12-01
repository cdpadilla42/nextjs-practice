import { useState } from 'react';

const HabitButton = ({ day }) => {
  const [month, date] = day.toLocaleDateString('en-US').split('/');
  const [complete, setComplete] = useState(false);
  return (
    <>
      <span>{month + '/' + date}</span>
      <button onClick={() => setComplete(!complete)}>
        {complete ? 'X' : 'O'}
      </button>
    </>
  );
};

export default HabitButton;
