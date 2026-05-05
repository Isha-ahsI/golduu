import React from "react";


// Philosophy section 
export default () => {
  return (
    <>
      <section className="sm:my-25 my-18.5 flex lg:flex-row flex-col justify-center lg:items-start items-center mx-12">
        <h1 className="text-primary text-2xl font-semibold text-center block lg:hidden">
          OUR PHILOSOPHY
        </h1>
        <div className="lg:me-12 flex flex-col lg:items-end items-center order-2 lg:order-1 lg:mt-0 mt-8">
          <div className="lg:flex items-center justify-center">
            <p className="lg:[writing-mode:vertical-lr] lg:rotate-180 tracking-[6px] leading-10 text-xl [text-shadow:0_0_10px_rgba(var(--color-primary-rgb),0.8)] lg:block hidden">
              “Crafted with Intention”
            </p>
            <div className="bg-primary text-gold-300 p-8 rounded-lg lg:max-w-100 text-center border-gold-300 border-8 border-double">
              <h1 className="text-3xl mb-6">Designs That Tell a Story</h1>
              <p className="mb-4 text-gold-300/75 ">
                Every piece we create is guided by a story—of craftsmanship,
                care, and timeless beauty. From the first sketch to the final
                polish, our jewelry is thoughtfully designed to celebrate
                individuality and meaningful moments. We believe true elegance
                lies not in excess, but in detail, balance, and purpose.
              </p>
              <p className="text-gold-300/75">
                Using carefully selected materials and refined techniques, we
                create designs that feel personal yet enduring. Our collections
                are made to move effortlessly from everyday moments to life’s
                most memorable occasions, becoming part of your story over time.
              </p>
            </div>
          </div>
          <div className="lg:relative lg:z-10 lg:block hidden">
            <div className="max-w-142.5 max-h-92.75 overflow-hidden mt-12 rounded-lg hidden lg:flex justify-center items-center shadow-lg">
              <img
                src="/images/philosophy/philosophy2.jpg"
                alt="philosophy image"
                className="max-w-full max-h-full" />
            </div>
            <div className="lg:absolute bg-primary px-12 py-4 rounded-lg lg:top-1/2 lg:-right-1/2 shadow-xl lg:z-20">
              <h1 className="text-gold-500 text-3xl font-semibold">
                OUR PHILOSOPHY
              </h1>
            </div>
          </div>
        </div>
        <div className="border-2 border-primary/25 border-dashed lg:mt-20 mt-8 p-2 rounded-lg order-1 lg:order-2">
          <div className="max-w-100 max-h-125 overflow-hidden rounded-lg">
            <img
              src="/images/philosophy/philosophy1.jpg"
              alt="philosophy image"
              className="w-full h-full object-center" />
          </div>
        </div>
      </section>
    </>
  );
};
