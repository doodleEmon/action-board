import { gql } from '@apollo/client'

export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int) {
    launches(limit: $limit) {
      id
      mission_name
      launch_date_local
      launch_success
      rocket {
        rocket_name
      }
    }
  }
`

export const GET_ROCKETS = gql`
  query GetRockets {
    rockets {
      id
      name
      description
      active
    }
  }
`
