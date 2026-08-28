const projects = [
	{
		number: "01",
		title: "Fieldnotes",
		type: "Reading room / Product design",
		description: "A slower kind of social space for curious people to read, reflect, and return.",
		className: "project-card__art--fieldnotes",
		artLabel: "read / reflect / return",
	},
	{
		number: "02",
		title: "Common Ground",
		type: "Community platform / Engineering",
		description: "A clear, welcoming toolkit for bringing people together around shared work.",
		className: "project-card__art--ground",
		artLabel: "together, in practice",
	},
	{
		number: "03",
		title: "Afterlight",
		type: "Editorial system / Interface",
		description: "An editorial identity and digital home for ideas that stay with you.",
		className: "project-card__art--afterlight",
		artLabel: "notes for later",
	},
];

export default function Projects() {
	return (
		<section className="projects-section" id="projects" aria-labelledby="projects-title">
			<div className="projects-heading">
				<p className="section-kicker">Selected work</p>
				<h2 id="projects-title">Ideas, made<br /><em>tangible.</em></h2>
				<p className="projects-summary">
					A few things I&apos;ve helped shape across product, design, and engineering.
				</p>
			</div>

			<div className="projects-grid">
				{projects.map((project) => (
					<article className="project-card" key={project.title}>
						<div className={`project-card__art ${project.className}`} aria-hidden="true">
							<span className="project-card__art-label">{project.artLabel}</span>
						</div>
						<div className="project-card__meta">
							<span>{project.number}</span>
							<span>{project.type}</span>
						</div>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
					</article>
				))}
			</div>
		</section>
	);
}
