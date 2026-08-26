const experiences = [
	{
		period: "2022 — Present",
		role: "Independent Product Developer",
		company: "Freelance / Collaborations",
		description: "Partnering with teams to turn early ideas into clear, durable products from first sketch to shipped interface.",
		skills: "Product strategy · UI engineering · Prototyping",
	},
	{
		period: "2019 — 2022",
		role: "Software Engineer",
		company: "Product & Platform Teams",
		description: "Built thoughtful web experiences across the stack, bringing a product perspective to systems, features, and everyday details.",
		skills: "Frontend architecture · Design systems · Collaboration",
	},
	{
		period: "2016 — 2019",
		role: "Software Developer",
		company: "Digital Products",
		description: "Learned the craft by making complex tools more approachable, useful, and reliable for the people who depend on them.",
		skills: "Web development · Interaction design · Accessibility",
	},
];

export default function Experience() {
	return (
		<section className="experience-section" id="experience" aria-labelledby="experience-title">
			<div className="experience-intro">
				<p className="section-kicker">Experience</p>
				<h2 id="experience-title">A career spent<br /><em>making things clearer.</em></h2>
				<p className="experience-summary">
					I work across product, design, and engineering to help ambitious ideas find their shape.
				</p>
			</div>

			<div className="experience-list">
				{experiences.map((experience, index) => (
					<article className="experience-item" key={experience.period}>
						<div className="experience-item__number">0{index + 1}</div>
						<div className="experience-item__period">{experience.period}</div>
						<div className="experience-item__details">
							<h3>{experience.role}</h3>
							<p className="experience-item__company">{experience.company}</p>
							<p className="experience-item__description">{experience.description}</p>
							<p className="experience-item__skills">{experience.skills}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
