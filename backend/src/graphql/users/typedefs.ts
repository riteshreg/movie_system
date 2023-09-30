export const typeDefs = `#graphql

type User{
_id:ID!
firstName:String!
lastName:String!
email:String
phone:String!
password:String!
}


type CreateAccountResponse{
    code:Int!
    message:String!
    success:Boolean!
    user:User
}

type LoginMutationResponse{
code:Int!
message:String!
success:Boolean!
token:String
}

`;
