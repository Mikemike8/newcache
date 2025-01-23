import React, { useEffect } from 'react';

const MailchimpForm = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
    
  }, []);
  
  return (
    <div id="mc_embed_shell">
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <style type="text/css">
        {`
          #mc_embed_signup {
            background: #fff; /* Form Background */
            clear: left;
            font: 14px inconsolata;
            width: 100%; /* Adjusted width to fit container */
            max-width: 600px; /* Ensure it doesn’t exceed a certain width */
            margin: 0 auto; /* Center the form */
          }
          #mc_embed_signup h2 {
            color: #333; /* Adjust header color */
          }
          #mc_embed_signup input {
            background: #fff; /* Form Background */
            color: #000000;
            border: 1px solid #DC2626; /* Add border to input fields */
            padding: 10px; /* Add padding for better appearance */
            margin-bottom: 10px; /* Space between inputs */
            width: 100%; /* Make input fields responsive */
          }
          #mc_embed_signup .button {
            background: #DC2626; /* Change button background color */
            color: #fff; /* Button text color */
            border: none; /* Remove border */
            cursor: pointer; /* Change cursor to pointer */
          }
          #mc_embed_signup .button:hover {
            background: #DC2626; /* Change button color on hover */
          }
        `}
      </style>
      <div id="mc_embed_signup">
        <form
          action="https://onrender.us17.list-manage.com/subscribe/post?u=41ba915328c4f27b533b15454&amp;id=17443abf12&amp;f_id=00aec2e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe to our Newsletter!</h2>
            <div className="indicates-required">
              <span className="asterisk"></span> 
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk"></span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
              />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input
                type="text"
                name="b_41ba915328c4f27b533b15454_17443abf12"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function($) {
              window.fnames = new Array(); 
              window.ftypes = new Array();
              fnames[0]='EMAIL'; ftypes[0]='email'; 
              fnames[1]='FNAME'; ftypes[1]='text'; 
              fnames[2]='LNAME'; ftypes[2]='text'; 
              fnames[3]='ADDRESS'; ftypes[3]='address'; 
              fnames[4]='PHONE'; ftypes[4]='phone'; 
              fnames[5]='BIRTHDAY'; ftypes[5]='birthday'; 
              fnames[6]='COMPANY'; ftypes[6]='text';
            }(jQuery)); 
            var $mcj = jQuery.noConflict(true);
          `,
        }}
      />
    </div>
  );
};

export default MailchimpForm;
