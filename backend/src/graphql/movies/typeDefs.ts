export const typeDefs = `#graphql

enum ViewingTime {
   SEVENAM
   ELEVENAM
   THREEPM
   SEVENPM
}

type Movie{
title:String!
thumbnail:String!
genre:String!
description:String!
director:String!
cast:[String]!
released_date:String!
duration:String!
viewing_time:[ViewingTime!]!
}


input MovieArgs{
title:String!
thumbnail:String!
genre:String!
description:String!
director:String!
cast:[String]!
released_date:String!
duration:String!
viewing_time:[ViewingTime!]!
screenId:Int!
}


type createMovieResponse{
    code:Int!
    message:String!
    success:Boolean!
    movie:Movie
}

`;
