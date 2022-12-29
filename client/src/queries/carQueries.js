import {gql} from '@apollo/client'

const GET_CARS = gql `
    query GetCars {
        cars {
            Nice_classification
            Number
            id
            Brand_name
            Designation
            Status
            Office
            IPR
            Owner
            __typename
        }
    }
`

export {GET_CARS}