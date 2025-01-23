import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import MailchimpForm from "./Mailchimp";

export default function OnlyFoot() {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-4">
      <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 w-full flex justify-center">
          <MailchimpForm />
        </div>
        <div className="md:col-span-1 text-center flex flex-col gap-4">
          <h3 className="text-gray-900 dark:text-gray-300 text-lg font-inconsolata">
            Hours
          </h3>
          <p className="text-gray-900 dark:text-gray-300 text-sm font-inconsolata">
            Monday - Thursday | 4:00pm - 11:00pm
          </p>
          <p className="text-gray-900 dark:text-gray-300 text-sm font-inconsolata">
            Friday & Saturday | 4:00pm - 1:00am
          </p>
          <p className="text-gray-900 dark:text-gray-300 text-sm font-inconsolata">
            Sunday | Closed
          </p>

          <h3 className="text-gray-900 dark:text-gray-300 text-lg font-inconsolata">
            Contact Us
          </h3>
          <p className="text-gray-900 dark:text-gray-300 text-sm font-inconsolata">
            901-249-7594
          </p>
          <p className="text-gray-900 dark:text-gray-300 text-sm font-inconsolata">
            Cache42Mem@gmail.com
          </p>
        </div>
        <div className="md:col-span-1 flex flex-col items-center gap-4 text-center">
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/Cache42memphis/"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl text-black hover:text-primary transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/cache42memphis/"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl text-black hover:text-primary transition-colors duration-300" />
            </a>
          </div>

          <a
            href="https://maps.app.goo.gl/gGUVzajHR3FguP3L8"
            className="text-gray-900 dark:text-gray-300 text-sm font-inconsolata"
          >
            Urban Upscale Restaurant Located In 97 N. Main Street 38103
          </a>
        </div>
        <div className="md:col-span-3 text-center mt-6">
          <a
            href="#"
            className="text-xs animate-bounce text-black dark:text-gray-200 hover:text-gray-600"
          >
            BACK TO TOP
          </a>
        </div>
      </div>
    </div>
  );
}
