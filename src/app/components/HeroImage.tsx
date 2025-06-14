import Image from "next/image";

function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="mr-2 text-gray-500"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 12h8"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="ml-2 text-gray-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center w-4/5 mx-auto min-h-screen border-4 border-green-500 rounded-xl overflow-hidden">
      {/* First Row: Image */}
      <Image
        src="/main.png"
        alt="Main visual"
        width={1200}
        height={800}
        className="w-full max-h-[400px] object-fill"
        priority
      />
      {/* Second Row: Menu */}
      <nav className="w-full flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-4 bg-gray-100">
        <div className="flex-1 w-full flex items-center justify-center py-3 border-b sm:border-b-0 sm:border-r border-gray-300 text-lg font-medium cursor-pointer hover:bg-gray-200 transition">
          <MenuIcon />
          Menu 1
        </div>
        <div className="flex-1 w-full flex items-center justify-center py-3 border-b sm:border-b-0 sm:border-r border-gray-300 text-lg font-medium cursor-pointer hover:bg-gray-200 transition">
          <MenuIcon />
          Menu 2
        </div>
        <div className="flex-1 w-full flex items-center justify-center py-3 text-lg font-medium cursor-pointer hover:bg-gray-200 transition">
          <MenuIcon />
          Menu 3
        </div>
      </nav>
      {/* Third Row: Sponsor Menu */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full bg-gray-100 rounded-b-xl shadow flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200 overflow-hidden">
          {/*  ASSOCIATE SPONSOR */}
          <div className="flex-1 flex items-center justify-between px-6 py-4">
            <span className="font-semibold text-[11px] sm:text-xs md:text-sm tracking-widest">
              ASSOCIATE SPONSOR
            </span>
            <div className="flex items-center ml-4">
              <Image
                src="/spon.png"
                alt="Sponsor"
                width={48}
                height={48}
                className="mx-2"
              />
              <ArrowIcon />
            </div>
          </div>
          {/* TITLE SPONSOR */}
          <div className="flex-1 flex items-center justify-between px-6 py-4">
            <span className="font-semibold text-[11px] sm:text-xs md:text-sm tracking-widest">
              TITLE SPONSOR
            </span>
            <div className="flex items-center ml-4">
              <Image
                src="/spon.png"
                alt="Sponsor"
                width={48}
                height={48}
                className="mx-2"
              />
              <ArrowIcon />
            </div>
          </div>
          {/* ASSOCIATE SPONSOR */}
          <div className="flex-1 flex items-center justify-between px-6 py-4">
            <span className="font-semibold text-[11px] sm:text-xs md:text-sm tracking-widest">
              ASSOCIATE SPONSOR
            </span>
            <div className="flex items-center ml-4">
              <Image
                src="/spon.png"
                alt="Sponsor"
                width={48}
                height={48}
                className="mx-2"
              />
              <ArrowIcon />
            </div>
          </div>
        </div>
        {/* Display disc.gif below sponsor menu */}
        <div className="flex justify-center items-center w-full">
          <img
            src="/disc.gif"
            alt="Discount"
            className="w-full max-w-full mx-auto h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
