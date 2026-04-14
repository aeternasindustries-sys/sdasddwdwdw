import Link from 'next/link';

const columns = [
  {
    title: 'Empresa',
    links: ['Sobre', 'Contato', 'Press Kit']
  },
  {
    title: 'Social',
    links: ['Twitter', 'Discord', 'YouTube']
  },
  {
    title: 'Legal',
    links: ['Privacidade', 'Termos', 'Cookies']
  }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <div className="brand brand-footer">
            <span className="brand-logo">A</span>
            <span>Aeterna Industries</span>
          </div>
          <p className="muted">Criadores de experiencias de jogo inesqueciveis.</p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="footer-title">{column.title}</p>
            {column.links.map((item) => (
              <Link key={item} href="#" className="footer-link">
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p className="muted">&copy; 2026 Aeterna Industries. Todos os direitos reservados.</p>
        <div className="footer-icons" aria-hidden="true">
          <span>X</span>
          <span>◌</span>
          <span>▢</span>
        </div>
      </div>
    </footer>
  );
}
