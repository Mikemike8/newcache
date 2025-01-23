import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import MailchimpForm from "./Mailchimp";
import roomcash from '../assets/roomcash.png';

export default function OnlyFoot() {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-4">
    <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-8">
      <div className="md:col-span-1 w-full flex flex-col items-center justify-center">
        {/* Mailchimp Form */}
        <MailchimpForm />
  
        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4">  {/* Added mt-4 for spacing between the form and icons */}
          <a href="https://www.facebook.com/Cache42memphis/" aria-label="Facebook">
            <FaFacebook className="text-2xl text-black hover:text-primary transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com/cache42memphis/" aria-label="Instagram">
            <FaInstagram className="text-2xl text-black hover:text-primary transition-colors duration-300" />
          </a>
        </div>
      </div>
    
  
        <div className="md:col-span-1 text-center flex flex-col gap-4">
          <h3 className="text-gray-900 dark:text-gray-300 text-lg font-inconsolata">
            Hours
          </h3>
          <p className="text-gray-900 dark:text-gray-300 text-sm font-inconsolata">
          Tuesday - Thursday | Lunch: 11:00am - 3:00pm | Dinner: 5:00pm - 10:00pm
          </p>
          <p className="text-gray-900 dark:text-gray-300 text-sm font-inconsolata">
          Saturday | Brunch: 11:00am - 3:00pm | Dinner: 5:00pm - 12:00am
          </p>
          <p className="text-gray-900 dark:text-gray-300 text-sm font-inconsolata">
          Sunday | Brunch: 11:00am - 3:00pm | Dinner: 5:00pm - 10:00pm 
          </p>
          <p className="text-gray-900 dark:text-gray-300 text-sm font-inconsolata">
          Monday | Closed
          </p>
          <h3 className="text-gray-900 dark:text-gray-300 text-lg font-inconsolata">
            Contact Us
          </h3>
          <p className="text-gray-900 dark:text-gray-300 text-sm font-inconsolata">
            901-632-1428
          </p>
          <p className="text-gray-900 dark:text-gray-300 text-sm font-inconsolata">
            Cache42Mem@gmail.com
          </p>
        </div>
        <div className="md:col-span-1  flex flex-col items-center gap-4 text-center">
  {/* Image Above Address */}
  <div className="mt-8">
    <img
      src={roomcash} // Replace with your actual image path
      alt="Urban Upscale Restaurant"
      className="w-full max-w-xs mx-auto rounded-lg  h-32 md:h-40 lg:h-48 shadow-md"
    />
  </div>

  {/* Address Link */}
  <a
    href="https://maps.app.goo.gl/gGUVzajHR3FguP3L8"
    className="text-gray-900 dark:text-gray-300 text-sm font-inconsolata mt-4 block"
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
