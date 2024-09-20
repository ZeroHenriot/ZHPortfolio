// api/projects.js
import data from '../db.json' // Assicurati che il percorso sia corretto

export default function handler(req, res) {
  // Controlla se ci sono query params per filtrare i progetti
  const { id } = req.query

  if (id) {
    const project = data.projects.find((p) => p.id === parseInt(id))
    if (project) {
      return res.status(200).json(project)
    } else {
      return res.status(404).json({ error: 'Project not found' })
    }
  }

  // Restituisci tutti i progetti se non ci sono parametri di ricerca
  res.status(200).json(data.projects)
}
