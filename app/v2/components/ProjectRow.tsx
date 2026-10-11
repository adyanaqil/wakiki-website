import { ProjectEntry } from '../data'

interface ProjectRowProps {
  project: ProjectEntry
}

export default function ProjectRow({ project }: ProjectRowProps) {
  return (
    <article className="v2-project-row">
      <div className="v2-col-num">
        <span className="v2-entry-num">{project.number}</span>
      </div>

      <div className="v2-col-client">
        <h3 className="v2-client-name">{project.client}</h3>
        {project.meta && <span className="v2-client-meta">{project.meta}</span>}
      </div>

      <div className="v2-col-role">
        <span className="v2-role-text">{project.role}</span>
      </div>

      <div className="v2-col-desc">
        {project.description ? (
          <p className="v2-desc-text">{project.description}</p>
        ) : (
          <span className="v2-desc-empty" aria-hidden="true">—</span>
        )}
      </div>
    </article>
  )
}
