import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t w-full ">
      <div className="w-3/4 m-auto grid grid-cols-3 gap-x-8 text-cb_white py-8">
        <div>
          <h3 className="text-xl font-bold">Über uns</h3>
          <p>...</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Links</h3>
          <Link href="impressum">
            <a className="block text-cb_green hover:text-cb_white">Impressum</a>
          </Link>
          <Link href="datenschutz">
            <a className="block text-cb_green hover:text-cb_white">
              Datenschutzerklärung
            </a>
          </Link>
        </div>
        <div>
          <h3 className="text-xl font-bold">Test</h3>
          Test
        </div>
      </div>
    </div>
  );
};

export default Footer;
