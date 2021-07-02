import gql from "graphql-tag";

/*TODO URI: https://api.mocki.io/v2/c4d7a195/graphql */

export const UPDATE_TODO = gql`
    mutation UPDATE_TODO($id: String!, $done: Boolean) {
        updateTodo(id: $id, done: $done) {
            id
            done
        }
    }
`;