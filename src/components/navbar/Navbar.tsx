import Link from "next/link";

import MaxWidthWrapper from "@/components/maxwidthwrapper/MaxWidthWrapper";
import { Icons } from "@/components/icons/Icons";
import NavItems from "@/components/navitems/NavItems";

const NavBar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-gray-50 border-b border-gray-200"> 
        <MaxWidthWrapper>
          <div className="">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>
              <div className="hidden z-50 lg:block lg:self-stretch">
                <NavItems /> 
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default NavBar;
