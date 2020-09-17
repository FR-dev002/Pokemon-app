import gql from 'graphql-tag';

export const GET_POKEMON = gql `
  query pokemon($id: String!) {
    pokemon(id: $id) {
      id
      name,
      number,
      name,
      weight{
        minimum,
        maximum
      },
      height{
        minimum,
        maximum
      },
      classification,
      types,
      resistant,
      attacks{
        fast {
          name
          type
          damage
        },
        special {
          name
          type
          damage
        }
      },
      weaknesses,
      fleeRate,
      maxCP,
      image,
      evolutionRequirements{
        amount,
        name
      },
      maxHP,
      evolutions {
        id
        name
        image
        maxHP
        maxCP
        number
        classification
        attacks {
          special {
            name
            damage
          }
        }
      }
    }
  }
`