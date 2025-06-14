"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white mt-8">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Online Shopping Section */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">ONLINE SHOPPING</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/men" className="text-gray-600 hover:text-gray-900">
                  Men
                </Link>
              </li>
              <li>
                <Link
                  href="/women"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  href="/kids"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link
                  href="/home"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/beauty"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Beauty
                </Link>
              </li>
              <li>
                <Link
                  href="/genz"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Genz
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-cards"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/myntra-insider"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Myntra Insider
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/site-map"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Site Map
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate-info"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Corporate Information
                </Link>
              </li>
              <li>
                <Link
                  href="/whitehat"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Whitehat
                </Link>
              </li>
              <li>
                <Link
                  href="/cleartrip"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cleartrip
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Policies Section */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">CUSTOMER POLICIES</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/t&c" className="text-gray-600 hover:text-gray-900">
                  T&C
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/track-orders"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Track Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cancellation
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/grievance-redressal"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Grievance Redressal
                </Link>
              </li>
            </ul>
          </div>

          {/* Experience Myntra App Section */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">
              EXPERIENCE MYNTRA APP ON MOBILE
            </h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>
            <h3 className="font-bold text-gray-800 mb-4">KEEP IN TOUCH</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490e-9f9c-c72c85f73a491574604275455-twitter.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="https://constant.myntassets.com/web/assets/img/a7e6255d-8499-4a71-8383-bc5d7214e8b61574604275581-yt.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275503-insta.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Image
                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                alt="100% Original"
                width={24}
                height={24}
              />
              <span className="text-gray-600">
                100% ORIGINAL guarantee for all products at myntra.com
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Image
                src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
                alt="Return Policy"
                width={24}
                height={24}
              />
              <span className="text-gray-600">
                Return within 14days of receiving your order
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
