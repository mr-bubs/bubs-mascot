import { Mascot } from 'page-mascot'

export function App() {
  return (
    <main className="shell">
      <section className="panel">
        <div className="copy">
          <p className="eyebrow">Bubs Mascot · Mini Bubs v0.1</p>
          <h1>Meet Mr Bubs.</h1>
          <p className="lede">
            Move your pointer around him. He follows it with his head.
            Click or tap him and he reacts.
          </p>
          <div className="status">
            <span>9 directions</span>
            <span>9 reactions</span>
            <span>page-mascot engine</span>
          </div>
        </div>

        <div className="mascotStage">
          <div className="halo" aria-hidden="true" />
          <Mascot
            directions="/mascots/bubs-directions.webp"
            reactions="/mascots/bubs-reactions.webp"
            size={360}
            label="Mr Bubs"
            className="bubs"
          />
          <p className="hint">Move around · poke Bubs</p>
        </div>
      </section>
    </main>
  )
}
