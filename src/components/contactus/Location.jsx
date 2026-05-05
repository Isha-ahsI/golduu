import React from "react";

// location map
export const Location = () => {
  return (
    <>
      <section className="w-full overflow-hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.424332473456!2d-74.08909782346129!3d40.642575741862075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24e2fb727c375%3A0x4e0d6dde2c9af7ba!2s214%20Crescent%20Ave%20%23305%2C%20Staten%20Island%2C%20NY%2010301%2C%20USA!5e0!3m2!1sen!2sin!4v1776321095735!5m2!1sen!2sin" className="w-full h-100 border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="google-maps-contact-location" />
      </section>
    </>
  );
};
