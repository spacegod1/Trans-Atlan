import Image from "next/image";
import Logo from "../../public/aldervault_logo.png";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "800",
  display: "swap",
}); 

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
}); 

export default function Footer() {
    return (
        <footer
        className={`bg-[#0F172A] text-white py-8 sm:py-16 ${poppins.className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-2">
          {/* Mobile Layout */}
          <div className="flex flex-col sm:grid sm:grid-cols-[12rem_1fr] sm:gap-20">
            {/* Logo Column */}
            <div className="mb-8 sm:mb-0 text-center sm:text-left">
              <Image
                src={Logo}
                alt="AlderVault"
                className="w-[15rem] h-[14rem] mx-auto sm:mx-0"
              />
            </div>

            {/* Other columns wrapper */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6">
        
              <div className="hidden md:block"></div>

              {/* Solutions Column */}
              {/* <div>
                <h4 className="font-semibold text-lg mb-4">Solutions</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Automation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Commerce
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Insights
                    </a>
                  </li>
                </ul>
              </div> */}

              {/* Company Column */}
              {/* <div>
                <h4 className="font-semibold text-lg mb-4">Company</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Press
                    </a>
                  </li>
                </ul>
              </div> */}

              {/* Legal Column */}
              {/* <div className="col-span-2 md:col-span-1">
                <h4 className="font-semibold text-lg mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      License
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    )
}
