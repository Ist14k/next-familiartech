const AboutUs = () => {
  return (
    <div className="text-[15px] leading-6 text-gray-600">
      <div className="mb-8 flex items-center justify-between after:flex-shrink after:content-[' '] after:h-0.5 after:w-full after:ml-8 after:bg-gray-200">
        <h5 className="min-w-max font-bold text-lg uppercase text-gray-900">
          About Us
        </h5>
      </div>

      <p className="mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eaque
        sed nesciunt exercitationem vel, doloremque deserunt sequi similique
        sint quis eveniet culpa iure, reiciendis deleniti cupiditate neque
        laboriosam totam nobis?
      </p>

      <div className="flex flex-col gap-y-px">
        <div className="flex items-center gap-x-3">
          <i className="fa-solid fa-location-dot text-xs pb-px text-amber-300" />
          <address className="">Mollahpara Bashtala, Jashore, Khulna</address>
        </div>
        <div className="flex items-center gap-x-3">
          <i className="fa-solid fa-phone text-xs pb-px text-amber-300" />
          <a href="tel:+">+880 1812 820471</a>
        </div>
        <div className="flex items-center gap-x-3">
          <i className="fa-solid fa-envelope text-xs pb-px text-amber-300" />
          <a href="mailto:developer.istiakahmmed@gamil.com">
            developer.istiakahmmed@gamil.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
