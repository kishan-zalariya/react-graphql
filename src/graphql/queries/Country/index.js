import gql from "graphql-tag";

export const LIST_COUNTRIES = gql`
{
    countries {
        code,
        name
    }
}`;

// export const GET_COUNTRY_BY_ID = gql`
// query GetCountry($id: ID!)  {
//     country(code:$id) {
//         code,
//         name,
//         phone,
//         currency,
//         capital,
//         native
//     }
// }`;