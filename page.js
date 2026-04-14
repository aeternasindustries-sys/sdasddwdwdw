import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="hero split">
      <div>
        <span className="brand-logo lg">A</span>
        <h1 className="display">Dark Carnifix</h1>
        <span className="line" />
        <p className="lead">
          Voce e um detetive investigando desaparecimentos misteriosos em uma floresta sombria.
          Descubra um culto sinistro, enfrente uma criatura desconhecida e revele a verdade.
        </p>

        <div className="row">
          <Link href="/support" className="btn btn-solid">Apoie-nos</Link>
          <Link href="/portfolio" className="btn btn-outline">Ver Trailer</Link>
        </div>
      </div>

      <article className="card spotlight">
        <p className="symbol">◆</p>
        <h2 className="section-title">Investigacao</h2>
        <p className="muted">Descubra segredos sombrios</p>
        <Link href="/portfolio" className="btn btn-outline">Assistir Trailer</Link>
      </article>
    </section>
  );
}
