export const typeDefs = `#graphql

type Seat{
    value:String!
    booked:Boolean!
}

type Screen{
title:String!
screenId:Int!
seats:[Seat!]!
}


input createScreenArgs{
    title:String!
    screenId:Int!
    numberOfSeats:Int!
    numberOfRow:Int!
    numberOfColumn:Int!
    lastSeatNumberOfRow:Int
    lastSeatNumberOfColumn:Int
}

`;
