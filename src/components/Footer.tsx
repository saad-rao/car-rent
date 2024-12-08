import Image from "next/image";

function Footer() {
  return (
    <footer className="container mx-auto px-4 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* Logo and Description Section */}
        <div className="lg:col-span-4">
          <Image
            src="/images/footer-logo.png"
            alt="footer logo"
            width={100}
            height={32}
            className="mb-4"
          />
          <p className="text-[16px] text-gray-700 leading-6 max-w-[300px]">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* Navigation Sections */}
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:col-span-8 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-[20px] font-semibold mb-6">About</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-[16px] text-gray-700 hover:text-blue-600"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[16px] text-gray-700 hover:text-blue-600"
                >
                  Featured
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[16px] text-gray-700 hover:text-blue-600"
                >
                  Partnership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[16px] text-gray-700 hover:text-blue-600"
                >
                  Business Relation
                </a>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h2 className="text-[20px] font-semibold mb-6">Community</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-[16px] text-gray-700 hover:text-blue-600"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[16px] text-gray-700 hover:text-blue-600"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[16px] text-gray-700 hover:text-blue-600"
                >
                  Podcast
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[16px] text-gray-700 hover:text-blue-600"
                >
                  Invite a friend
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h2 className="text-[20px] font-semibold mb-6">Socials</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-[16px] text-gray-700 hover:text-blue-600"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[16px] text-gray-700 hover:text-blue-600"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[16px] text-gray-700 hover:text-blue-600"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[16px] text-gray-700 hover:text-blue-600"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-[16px] text-black-700">
          ©2022 MORENT. All rights reserved
        </p>
        <div className="flex space-x-8">
          <a href="#" className="text-[16px] text-black hover:text-blue-600">
            Privacy & Policy
          </a>
          <a href="#" className="text-[16px] text-black hover:text-blue-600">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
