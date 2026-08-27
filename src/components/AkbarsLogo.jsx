// AkbarsLogo.jsx - Extracted and recreated logo component
export const AkbarsLogo = ({ size = "lg" }) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20"
  };

  return (
    <svg
      viewBox="0 0 120 120"
      className={`${sizeClasses[size]}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle - Navy Blue */}
      <circle cx="60" cy="60" r="58" fill="#0F172A" stroke="#D97706" strokeWidth="2"/>

      {/* Inner circle - lighter blue */}
      <circle cx="60" cy="60" r="52" fill="#1E3A5F"/>

      {/* Compass rose lines */}
      <line x1="60" y1="20" x2="60" y2="100" stroke="#D97706" strokeWidth="1.5"/>
      <line x1="20" y1="60" x2="100" y2="60" stroke="#D97706" strokeWidth="1.5"/>
      <line x1="35" y1="35" x2="85" y2="85" stroke="#D97706" strokeWidth="1" opacity="0.6"/>
      <line x1="85" y1="35" x2="35" y2="85" stroke="#D97706" strokeWidth="1" opacity="0.6"/>

      {/* Center circle - Gold */}
      <circle cx="60" cy="60" r="12" fill="#D97706"/>

      {/* Stars around the circle */}
      {[0, 90, 180, 270].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 60 + 45 * Math.cos(rad);
        const y = 60 + 45 * Math.sin(rad);
        return (
          <circle key={angle} cx={x} cy={y} r="2.5" fill="#D97706"/>
        );
      })}

      {/* AA Monogram in center */}
      <text
        x="60"
        y="67"
        textAnchor="middle"
        fontSize="32"
        fontWeight="bold"
        fill="#FFFFFF"
        fontFamily="Arial, sans-serif"
      >
        AA
      </text>

      {/* Circular text - AKBAR'S ACADEMY */}
      <defs>
        <path
          id="topCurve"
          d="M 20 60 A 40 40 0 0 1 100 60"
          fill="none"
        />
      </defs>
      <text
        fontSize="10"
        fontWeight="bold"
        fill="#D97706"
        fontFamily="Arial, sans-serif"
        letterSpacing="1"
      >
        <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
          AKBAR'S ACADEMY
        </textPath>
      </text>

      {/* Bottom text arc - tagline */}
      <defs>
        <path
          id="bottomCurve"
          d="M 100 60 A 40 40 0 0 1 20 60"
          fill="none"
        />
      </defs>
      <text
        fontSize="7"
        fill="#FFFFFF"
        fontFamily="Arial, sans-serif"
        letterSpacing="0.5"
      >
        <textPath href="#bottomCurve" startOffset="50%" textAnchor="middle">
          Experience the power of knowledge
        </textPath>
      </text>

      {/* Navigation needle (compass pointer) */}
      <polygon
        points="60,25 65,40 60,38 55,40"
        fill="#D97706"
      />
    </svg>
  );
};

// Logo variant with text
export const LogoWithText = ({ size = "lg" }) => {
  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl"
  };

  return (
    <div className="flex items-center gap-3">
      <AkbarsLogo size={size} />
      <div className="flex flex-col">
        <h1 className={`${textSizes[size]} font-bold text-gray-900`}>
          Akbar's Academy
        </h1>
        <p className="text-xs text-gray-600">IT Institute</p>
      </div>
    </div>
  );
};
