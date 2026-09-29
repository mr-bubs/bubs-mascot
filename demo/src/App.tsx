import { Mascot } from 'page-mascot'

const base = import.meta.env.BASE_URL

export function App() {
  return (
    <main className="shell">
      <section className="panel">
        <div className="copy">
          <p className="eyebrow">Bubs Mascot · Mini Bubs v0.1</p>
          <h1>Meet Mr Bubs.</h1>
          <p className="lede">
            This is the real <strong>page-mascot</strong> interaction engine using
            the Bubs sprite sheets from this repository.
          </p>

          <div className="how">
            <div>
              <span className="step">01</span>
              <p><strong>Desktop:</strong> move your pointer around Bubs. His head follows it.</p>
            </div>
            <div>
              <span className="step">02</span>
              <p><strong>Desktop or mobile:</strong> click or tap Bubs to trigger a reaction.</p>
            </div>
          </div>

          <div className="status" aria-label="Demo features">
            <span>9 directions</span>
            <span>9 reactions</span>
            <span>page-mascot 0.1.0</span>
          </div>
        </div>

        <div className="mascotStage">
          <div className="orbit orbitOne" aria-hidden="true" />
          <div className="orbit orbitTwo" aria-hidden="true" />
          <div className="halo" aria-hidden="true" />

          <Mascot
            directions={`${base}mascots/bubs-directions.webp`}
            reactions={`${base}mascots/bubs-reactions.webp`}
            size={360}
            label="Mr Bubs"
            className="bubs"
          />

          <p className="hint">
            <span className="desktopHint">Move around · </span>poke Bubs
          </p>
        </div>
      </section>

      <footer>
        <span>mr-bubs / bubs-mascot</span>
        <span className="dot">•</span>
        <span>powered by nilbuild/page-mascot</span>
      </footer>
    </main>
  )
}
