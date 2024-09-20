export const GET_PROJECTS = 'GET_PROJECTS'

export const getProjects = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3000/projects', {
        method: 'GET',
      })
      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: GET_PROJECTS,
          payload: data,
        })
      } else {
        throw new Error('Errore nel recupero delle case')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}
