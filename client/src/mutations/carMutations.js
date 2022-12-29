import { gql } from "@apollo/client";

const DELETE_CAR = gql`
    mutation DeleteCar($id: ID!) {
        deleteCar(id: $id) {
            id
            
        }
    }
`;

export { DELETE_CAR };