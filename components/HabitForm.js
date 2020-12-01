import { Form, Field } from '@leveluptuts/Fresh';

const HabitForm = ({ setHabits }) => {
  return (
    <Form
      onSubmit={(data) => {
        setHabits((prevState) => [...prevState, data.habit]);
        console.log(data);
      }}
    >
      <Field>Habit</Field>
    </Form>
  );
};

export default HabitForm;
