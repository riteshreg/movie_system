export const typeDefs = `#graphql


type Seat{
    value:String!
    booked:Boolean!
}

type Booking{
    viwingTime:String!
    movieId:String!
    seats:[Seat]
}

type secureTicketResponse{
    code:Int!
    message:String!
    success:Boolean!
}

`;
