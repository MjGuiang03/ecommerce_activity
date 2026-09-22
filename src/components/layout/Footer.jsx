function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-900 font-semibold">
            <span className="text-sm font-medium">PawShop</span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PawShop. All rights reserved. Made with love for pets.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
