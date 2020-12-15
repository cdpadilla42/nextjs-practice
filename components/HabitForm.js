import { Formik, Field, Form } from 'formik';
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
    <Formik
      initialValues={{
        habbit: '',
      }}
      onSubmit={async (values) => {
        console.log(values.habbit);
        values.habbit = '';
      }}
    >
      <Form>
        <label htmlFor="habbit">New Habbit:</label>
        <Field id="habbit" name="habbit" placeholder="" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default HabitForm;
