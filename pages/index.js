import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import { useQuery, gql } from '@apollo/client';
import { initializeApollo, addApolloState } from '../lib/apollo';
import HabitList from '../components/HabitList';
import HabitForm from '../components/HabitForm';
import { GET_HABITS } from '../components/HabitList';

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_HABITS,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>{'Hey'}</h1>
      <p>Level up your life</p>
      <HabitForm />
      <HabitList />
    </Layout>
  );
}

export default Home;
