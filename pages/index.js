import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import { withApollo } from '../lib/apollo';
import { useQuery, gql } from '@apollo/client';
import { initApolloClient } from '../lib/apollo';
import HabitList from '../components/HabitList';
import HabitForm from '../components/HabitForm';

const HELLO_QUERY = gql`
  query {
    sayHello
  }
`;

export async function getServerSideProps(context) {
  const data = await initApolloClient().query({
    query: HELLO_QUERY,
  });

  return {
    props: { data }, // will be passed to the page component as props
  };
}

function Home({ data }) {
  const [habits, setHabits] = useState(['Do the dishes']);
  return (
    <Layout>
      <h1 className={styles.title}>{data.data.sayHello}</h1>
      <p>Level up your life</p>
      <HabitForm setHabits={setHabits} />
      <HabitList habits={habits} />
    </Layout>
  );
}

export default withApollo(Home);
