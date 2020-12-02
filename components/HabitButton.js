import { useState } from 'react';

const HabitButton = ({ day }) => {
  const [month, date] = day.toLocaleDateString('en-US').split('/');
  const [complete, setComplete] = useState(false);
  return (
    <span>
      {month + '/' + date}
      <button onClick={() => setComplete(!complete)}>
        {complete ? 'X' : 'O'}
      </button>
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
