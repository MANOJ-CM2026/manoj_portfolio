

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-1.5 items-center sm:items-start">

          <p className="text-secondary mx-auto mt-4 text-center sm:text-left font-medium">
            © {new Date().getFullYear()} Manoj A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
