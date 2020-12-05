import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import Habit from './habits';

export const habitsResolvers = {
  Query: {
    async habits() {
      try {
        const results = await Habit.find({}).exec();
        return results;
      } catch (err) {
        console.error(err);
      }
    },
  },

  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // sent to the client
    },
    parseLiteral(ast) {
      if (ast.king === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    },
  }),
};
