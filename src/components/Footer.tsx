export default function Footer() {
  return (
    <footer className="border-t border-black px-6 md:px-12 py-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 text-[0.6875rem] uppercase tracking-[0.15em] text-stone-500">
        <span>Federico Giobergia &copy; 2026</span>
        <div className="flex gap-6">
          <a
            href="#"
            className="hover:text-[#1a1a1a] transition-colors"
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-[#1a1a1a] transition-colors"
          >
            Twitter
          </a>
          <a
            href="#"
            className="hover:text-[#1a1a1a] transition-colors"
          >
            Goodreads
          </a>
        </div>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  );
}
