const AseryxLogo = ({ className = 'h-7', title = 'Aseryx' }) => (
  <span className={`inline-flex items-center ${className}`}>
    <img
      src="/aseryx-logo-light.png"
      alt={title}
      className="h-full w-auto dark:hidden"
      width="346"
      height="67"
    />
    <img
      src="/aseryx-logo-dark.png"
      alt=""
      aria-hidden="true"
      className="hidden h-full w-auto dark:block"
      width="346"
      height="67"
    />
  </span>
);

export default AseryxLogo;
