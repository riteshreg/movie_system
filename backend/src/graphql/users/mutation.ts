export const mutations = `#graphql
createAccount(firstName:String!, lastName:String!, email:String!, phone:String!, password:String!):CreateAccountResponse
login(email:String!, password:String!):LoginMutationResponse
`

