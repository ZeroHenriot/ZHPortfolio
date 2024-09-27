export const GET_PROJECTS = 'GET_PROJECTS'
export const GET_EXPERIENCES = 'GET_EXPERIENCES'

export const getProjects = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('https://portfolio-db-one.vercel.app/projects', {
        method: 'GET',
      })
      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: GET_PROJECTS,
          payload: data,
        })
      } else {
        throw new Error('Errore nel recupero dei progetti')
      }
    } catch (error) {
      console.log('errore pr', error)
    }
  }
}

export const getExperiences = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        'https://portfolio-db-one.vercel.app/experiences',
        {
          method: 'GET',
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: GET_EXPERIENCES,
          payload: data,
        })
      } else {
        throw new Error('Errore nel recupero delle esperienze')
      }
    } catch (error) {
      console.log('errore exp', error)
    }
  }
}
