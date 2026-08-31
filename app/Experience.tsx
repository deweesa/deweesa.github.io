const companies = [
	{
		company: "Freelance / Collaborations",
		positions: [
			{
				period: "2022 — Present",
				role: "Independent Product Developer",
				description: "Partnering with teams to turn early ideas into clear, durable products from first sketch to shipped interface.",
				skills: "Product strategy · UI engineering · Prototyping",
			},
		],
	},
	{
		company: "Product & Platform Teams",
		positions: [
			{
				period: "2019 — 2022",
				role: "Software Engineer",
				description: "Built thoughtful web experiences across the stack, bringing a product perspective to systems, features, and everyday details.",
				skills: "Frontend architecture · Design systems · Collaboration",
			},
			{
				period: "2019 — 2022",
				role: "Software Engineer",
				description: "Built thoughtful web experiences across the stack, bringing a product perspective to systems, features, and everyday details.",
				skills: "Frontend architecture · Design systems · Collaboration",
			},
		],
	},
	{
		company: "Digital Products",
		positions: [
			{
				period: "2016 — 2019",
				role: "Software Developer",
				description: "Learned the craft by making complex tools more approachable, useful, and reliable for the people who depend on them.",
				skills: "Web development · Interaction design · Accessibility",
			},
		],
	},
];

export default function Experience() {
	let positionIndex = 0;

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
				{companies.map((companyData) => (
					<div key={companyData.company} className="experience-company">
						{companyData.positions.map((position) => {
							positionIndex++;
							return (
								<article className="experience-item" key={position.period}>
									<div className="experience-item__number">0{positionIndex}</div>
									<div className="experience-item__period">{position.period}</div>
									<div className="experience-item__details">
										<h3>{position.role}</h3>
										<p className="experience-item__company">{companyData.company}</p>
										<p className="experience-item__description">{position.description}</p>
										<p className="experience-item__skills">{position.skills}</p>
									</div>
								</article>
							);
						})}
					</div>
				))}
			</div>
		</section>
	);
}
