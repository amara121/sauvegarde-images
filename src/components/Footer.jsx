import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center gap-1 text-nowrap font-bold text-gray-700 pb-2 mb-3">
      <span>Créér avec le</span>{" "}
      <svg
        className="w-6 h-6 text-red-700"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
      </svg>
      <span>par</span>
      <Link href="http://amarafofana.vercel.app" passHref legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-cyan-300 hover:text-cyan-600"
        >
          Amara Fofana
        </a>
      </Link>
    </div>
  );
};

export default Footer;
