import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#0078d4] to-[#8000ff] rounded-lg"></div>
              <span className="text-xl font-semibold text-gray-900">StudentTrend+</span>
            </div>
            <p className="text-gray-600 text-sm">
              Empowering college students with personalized skill development, trends, and mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/trending-skills" className="text-gray-600 hover:text-[#0078d4] text-sm transition-colors">
                  Trending Skills
                </Link>
              </li>
              <li>
                <Link to="/roadmaps" className="text-gray-600 hover:text-[#0078d4] text-sm transition-colors">
                  Roadmaps
                </Link>
              </li>
              <li>
                <Link to="/mentors" className="text-gray-600 hover:text-[#0078d4] text-sm transition-colors">
                  Mentors
                </Link>
              </li>
              <li>
                <Link to="/opportunities" className="text-gray-600 hover:text-[#0078d4] text-sm transition-colors">
                  Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0078d4] text-sm transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0078d4] text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0078d4] text-sm transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0078d4] text-sm transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0078d4] text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0078d4] text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0078d4] text-sm transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} StudentTrend+. Built for educational purposes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
