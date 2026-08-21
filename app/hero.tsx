export default function HeroSpotLight() {
    return (
        <main className="hero-shell">
            <nav className="hero-nav" aria-label="Main navigation">
                <a className="brand-mark" href="#top" aria-label="Deweesa home">
                    <span className="brand-mark__dot" aria-hidden="true" />
                    DEWEESA<span className="brand-mark__suffix">.DEV</span>
                </a>
                <div className="hero-nav__links">
                    <a href="#work">Selected work</a>
                    <a href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
                </div>
            </nav>

            <section className="hero-content" id="top" aria-labelledby="hero-title">
                <div className="hero-copy">
                    <p className="eyebrow"><span /> Independent developer · New York / Anywhere</p>
                    <h1 id="hero-title">Software with a point of <em>view.</em></h1>
                    <p className="hero-intro">
                        I&apos;m Deweesa, a product-minded developer turning complex ideas into
                        calm, useful digital experiences.
                    </p>
                    <div className="hero-actions">
                        <a className="button button--dark" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
                        <a className="text-link" href="#contact">More about me <span aria-hidden="true">↗</span></a>
                    </div>
                </div>

                <div className="spotlight" id="work" aria-label="Featured project: Fieldnotes">
                    <div className="spotlight__topbar">
                        <span className="spotlight__label">01 / Featured project</span>
                        <span className="spotlight__status"><span /> Live case study</span>
                    </div>
                    <div className="project-preview">
                        <div className="project-preview__header">
                            <span className="project-preview__logo">fieldnotes<span>°</span></span>
                            <span className="project-preview__date">Issue 04 — 2024</span>
                        </div>
                        <div className="project-preview__body">
                            <div>
                                <p className="project-preview__kicker">A slower kind of social</p>
                                <h2>Make space<br />for <i>good</i> ideas.</h2>
                                <p className="project-preview__description">A thoughtful reading room for curious people.</p>
                            </div>
                            <div className="project-preview__shape" aria-hidden="true">
                                <span className="shape-ring shape-ring--one" />
                                <span className="shape-ring shape-ring--two" />
                                <span className="shape-core" />
                                <span className="shape-caption">read / reflect / return</span>
                            </div>
                        </div>
                        <div className="project-preview__footer">
                            <span>Product design + development</span>
                            <span>↗</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="hero-footer" id="contact">
                <span>Scroll to wander <span aria-hidden="true">↓</span></span>
                <span>Available for select collaborations <span className="hero-footer__line" aria-hidden="true" /></span>
            </footer>
        </main>
    );
}