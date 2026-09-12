const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20'
};

export const AkbarsLogo = ({ size = 'lg' }) => (
  <img
    src="/logo.png"
    alt="Akbar's Academy logo"
    className={`${sizeClasses[size] || sizeClasses.lg} rounded-full object-cover`}
  />
);

export const LogoWithText = ({ size = 'lg' }) => {
  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className="flex items-center gap-3">
      <AkbarsLogo size={size} />
      <div className="flex flex-col">
        <h1 className={`${textSizes[size] || textSizes.lg} font-bold text-gray-900`}>
          Akbar's Academy
        </h1>
        <p className="text-xs text-gray-600">IT Institute</p>
      </div>
    </div>
  );
};
