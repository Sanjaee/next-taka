import NextTopLoader from "nextjs-toploader";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 text-white w-full flex-none border-b border-transparent bg-[#000000] backdrop-blur print:hidden">
      <NextTopLoader
        color="rgb(251, 252, 5)"
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        showSpinner={false}
      />
      <div className="container">
        <div className="flex h-[60px] items-center ">
          <button className="rounded-md border-black bg-bg-color p-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
          <div className="ml-3 flex lg:ml-0">
            <img className="h-11 w-auto" src="logo.webp" alt="" />
          </div>
          <div className="hidden !text-text-color lg:ml-10 lg:block lg:self-stretch">
            <div className="flex h-full space-x-6">
              <Link
                class="relative z-10 -mb-px flex items-center space-x-2 border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out border-text-color text-text-color"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  ></path>
                </svg>
                <span>Beranda</span>
              </Link>
              <Link
                class="relative z-10 -mb-px flex items-center space-x-2 border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out border-text-color text-text-color"
                href="invoices"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  ></path>
                </svg>
                <span>Cek Transaksi</span>
              </Link>
              <Link
                class="relative z-10 -mb-px flex items-center space-x-2 border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out border-text-color text-text-color"
                href="gift-skin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  ></path>
                </svg>
                <span>Gift Skin</span>
              </Link>
              <Link
                class="relative z-10 -mb-px flex items-center space-x-2 border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out border-text-color text-text-color"
                href="calculator"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                  ></path>
                </svg>
                <span>Kalkulator</span>
              </Link>
            </div>
          </div>
          <div className="ml-auto flex h-full items-center space-x-4">
            <button className="flex items-center gap-x-2 rounded-md bg-secondary-800 p-2 text-text-color outline-none duration-200 ease-in-out lg:border lg:border-secondary-700 lg:bg-transparent lg:pl-3 lg:pr-4 lg:hover:bg-secondary-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="h-6 w-6 lg:h-5 lg:w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
              <span className="hidden text-sm lg:block">Search</span>
            </button>
            <div className="flex flex-row-reverse items-center gap-x-2">
              <div className="relative inline-block text-left">
                <button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold uppercase text-text-color">
                  ID
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="-mr-1 h-5 w-5 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
