interface SectionHeaderProps {
  index: string
  title: string
  aside?: string
  subtitle?: string
}

export default function SectionHeader({ index, title, aside, subtitle }: SectionHeaderProps) {
  return (
    <header className="v2-section-header">
      <div className="v2-header-meta">
        <span className="v2-header-index">{`(${index})`}</span>
        <h2 className="v2-header-title">{title}</h2>
      </div>
      {aside && <span className="v2-header-aside">{aside}</span>}
      {subtitle && <p className="v2-header-sub">{subtitle}</p>}
    </header>
  )
}
