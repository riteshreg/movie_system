import { User } from "./users/index.js";
import { Movie } from "./movies/index.js";
import { Screen } from "./screen/index.js";
import { Booking } from "./booking/index.js";

const typeDefs = `#graphql

${User.typeDefs}
${Movie.typeDefs}
${Screen.typeDefs}
${Booking.typeDefs}

type Query{
    ${User.Query}
    ${Movie.query}
    ${Screen.query}
    ${Booking.query}
}

type Mutation{
    ${User.mutations}
    ${Movie.mutation}
    ${Screen.mutation}
    ${Booking.mutation}
}

`;

const resolvers = {
  Query: {
    ...User.resolvers.query,
    ...Movie.resolver.query,
    ...Screen.resolvers.query,
    ...Booking.resolver.query,
  },
  Mutation: {
    ...User.resolvers.mutation,
    ...Movie.resolver.mutation,
    ...Screen.resolvers.mutation,
    ...Booking.resolver.mutation,
  },
};

export { typeDefs, resolvers };
