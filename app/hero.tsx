export default function HeroSpotLight() {
    return (
        <main className="hero-shell">
            <nav className="hero-nav" aria-label="Main navigation">
                <a className="brand-mark" href="#top" aria-label="Deweesa home">
                    <span className="brand-mark__dot" aria-hidden="true" />
                    ASADEWEESE<span className="brand-mark__suffix">.DEV</span>
                </a>
                <div className="hero-nav__links">
                    <a href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
                </div>
            </nav>

            <section className="hero-content" id="top" aria-labelledby="hero-title">
                <div className="hero-copy">
                    <p className="eyebrow">Software Engineer · Seattle / Anywhere</p>
                    <p className="hero-preamble">Hi, I&apos;m</p>
                    {/*<h1 id="hero-title">Software with a point of <em>view.</em></h1>*/}
                    <h1 id="hero-title">Asa DeWeese</h1>
                    <p className="hero-intro">
                        I&apos;m Asa DeWeese, a product-minded developer turning complex ideas into
                        calm, useful digital experiences.
                    </p>
                    <div className="hero-actions">
                        <a className="button button--dark" href="#contact">Let&apos;s work together <span aria-hidden="true">↗</span></a>
                        <a className="text-link" href="#contact">More about me <span aria-hidden="true">↗</span></a>
                    </div>
                </div>
            </section>
        </main>
    );
}