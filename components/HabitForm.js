import { Form, Field } from '@leveluptuts/Fresh';
import { useMutation, gql } from '@apollo/client';

const ADD_HABBIT = gql`
  mutation AddHabbit($habit: HabitInput) {
    addHabit(habit: $habit) {
      name
      _id
    }
  }
`;

const HabitForm = ({ setHabits }) => {
  const [addHabit, { error, data }] = useMutation(ADD_HABBIT, {
    refetchQueries: ['getHabits'],
  });

  return (
    <Form
      onSubmit={(inputs) => {
        console.log(inputs);
        addHabit({ variables: { habit: { name: inputs.habit } } });
        console.log(data);
      }}
    >
      <Field>Habit</Field>
    </Form>
  );
};

export default HabitForm;
