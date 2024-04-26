function ProductFeature() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join our community in creating a more sustainable future for
            everyone
          </h2>
          <p className="mt-4  text-gray-500">
            At Ecoyaan, we are more than just a platform. Our vision is to build
            an eco-conscious community for people and products. Consider us your
            partner for all things sustainable. To keep you motivated on the
            journey, we will provide you with engaging information about climate
            change, the latest updates on climate policies and lifestyle tips
            that you can adopt to reduce your impact on the environment.
          </p>
          <h2 className="text-3xl mt-4 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Carefully curated Eco-friendly products
          </h2>
          <p className="mt-6  text-gray-500">
            We believe that every purchase you make can have a positive impact
            on the planet and the future. Soon, we will be connecting you with
            eco-friendly and sustainable products that are carefully selected
            based on their environmental and social benefits.
          </p>
          <h2 className="text-3xl mt-4 font-bold tracking-tight text-gray-900 sm:text-4xl">
            For businesses that care deeply about sustainability
          </h2>
          <p className="mt-6  text-gray-500">
            Do you run a business that is committed to sustainability in every
            aspect of your work? Do you want to showcase your products to an
            incredible audience of eco-conscious consumers who care? If yes,
            then you are the perfect fit for our platform. Our community
            appreciates and supports businesses that are transparent, ethical,
            and innovative in their approach to sustainability. Contact us
            today:
          </p>
          <div className="mt-10 flex items-center justify-left gap-x-6">
            <a
              href="#"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="/images/use2.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/images/use7.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/images/use5.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/images/use4.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductFeature;
