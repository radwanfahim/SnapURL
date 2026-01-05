const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-14 bg-zinc-100 py-8">
      <div className="container mx-auto custom-container text-center">
        <h1 className="text-gray-600">
          © {currentYear} SnapURL. Built with Next.js and Tailwind CSS.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
