const Footer = () => {
  return (
    <footer id="footer" className="w-full h-16 flex items-center justify-center border-t bg-foreground">
      <p className="text-sm text-background">
        &copy; {new Date().getFullYear()} Óptica Latina. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;