"use client";

import React, { useState, useRef, useEffect } from "react";

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<"platform" | "solutions" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: "platform" | "solutions") => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const toggleMobileSubmenu = (key: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] bg-white">
      {/* 1. Top Announcement Bar (Series C) */}
      <div className="border-b border-neutral-800 bg-[#161514] text-white">
        <a
          href="#announcement"
          className="mx-auto flex max-w-[1440px] items-center justify-center gap-3 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.06em] text-neutral-300 no-underline transition-colors hover:text-white md:px-12"
        >
          <span className="inline-flex shrink-0 items-center gap-1.5 text-amber-500 font-semibold">
            <span className="inline-block h-1.5 w-1.5 rounded-none bg-[#e25c27]" />
            NEW
          </span>
          <span className="hidden sm:inline">
            HAPPYROBOT RAISES ITS SERIES C TO PUT AI WORKERS TO WORK ACROSS THE REAL ECONOMY
          </span>
          <span className="sm:hidden">
            HAPPYROBOT RAISES ITS SERIES C
          </span>
          <span className="hidden shrink-0 items-center gap-1 md:inline-flex text-neutral-400 group-hover:text-white">
            READ THE ANNOUNCEMENT →
          </span>
        </a>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav
        className="relative border-b border-neutral-200 bg-white/95 backdrop-blur-md"
        onMouseLeave={handleMouseLeave}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3.5 md:px-12">
          
          {/* HappyRobot Brand Logo */}
          <a
            href="/"
            aria-label="HappyRobot"
            className="flex items-center gap-2 text-neutral-950 no-underline"
          >
            <svg
              aria-label="HappyRobot"
              fill="none"
              height="20"
              role="img"
              viewBox="0 0 141 22"
              width="128"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path
                d="M13.694 12.6589C13.694 11.6079 13.1235 10.6396 12.2042 10.1303L9.02673 8.37006C8.10735 7.86073 7.53687 6.89251 7.53687 5.84147V0H0.28125V3.63794C0.28125 4.70778 0.872134 5.69014 1.81722 6.19153L4.90244 7.82829C5.84752 8.32967 6.43841 9.31203 6.43841 10.3819V21.3911H13.694V12.6589Z"
                fill="currentColor"
              />
              <path
                d="M27.2761 18.1703C27.2761 17.1091 26.6946 16.1333 25.7614 15.6281L22.489 13.8568C21.5558 13.3517 20.9744 12.3758 20.9744 11.3147V0H13.7188V9.00213C13.7188 10.0633 14.3002 11.0392 15.2334 11.5443L18.5058 13.3156C19.439 13.8207 20.0204 14.7966 20.0204 15.8577V21.3911H27.2761V18.1703Z"
                fill="currentColor"
              />
              <path
                d="M139.314 17.3814C138.59 17.3814 138.009 17.2541 137.572 16.9996C137.141 16.745 136.831 16.3991 136.642 15.9618C136.459 15.5245 136.368 15.0024 136.368 14.3954V8.49207H134.664V6.73966H136.368V4.02783H138.433V6.73966H140.685V8.49207H138.433V14.2975C138.433 14.7087 138.551 15.0252 138.786 15.2472C139.021 15.4625 139.383 15.5702 139.872 15.5702C140.101 15.5702 140.365 15.5474 140.665 15.5017V17.1758C140.189 17.3128 139.739 17.3814 139.314 17.3814Z"
                fill="currentColor"
              />
              <path
                d="M129.417 17.4793C128.451 17.4793 127.58 17.2542 126.803 16.8038C126.033 16.347 125.429 15.7041 124.992 14.8752C124.555 14.0398 124.336 13.0836 124.336 12.0067C124.336 10.9168 124.551 9.95736 124.982 9.12848C125.413 8.29959 126.017 7.65672 126.793 7.19985C127.57 6.73646 128.448 6.50476 129.427 6.50476C130.412 6.50476 131.29 6.73319 132.06 7.19006C132.83 7.64693 133.428 8.2898 133.852 9.11869C134.276 9.94757 134.488 10.9103 134.488 12.0067C134.488 13.0902 134.273 14.0463 133.842 14.8752C133.411 15.7041 132.808 16.347 132.031 16.8038C131.261 17.2542 130.389 17.4793 129.417 17.4793ZM129.417 15.7465C129.991 15.7465 130.504 15.5997 130.954 15.306C131.411 15.0057 131.767 14.575 132.021 14.0137C132.276 13.4459 132.403 12.7769 132.403 12.0067C132.403 11.2235 132.276 10.5513 132.021 9.99C131.773 9.42218 131.421 8.98815 130.964 8.68793C130.513 8.3877 129.998 8.23759 129.417 8.23759C128.836 8.23759 128.317 8.3877 127.86 8.68793C127.41 8.98815 127.058 9.42218 126.803 9.99C126.555 10.5513 126.431 11.2235 126.431 12.0067C126.431 12.7769 126.558 13.4426 126.813 14.0039C127.067 14.5652 127.42 14.9959 127.87 15.2962C128.327 15.5964 128.843 15.7465 129.417 15.7465Z"
                fill="currentColor"
              />
              <path
                d="M119.127 17.4793C118.657 17.4793 118.204 17.4108 117.766 17.2737C117.329 17.1367 116.931 16.9343 116.572 16.6667C116.219 16.3992 115.919 16.0696 115.671 15.678H115.652V17.2444H113.586V3.1272H115.652V8.3061H115.671C115.9 7.94061 116.187 7.62406 116.533 7.35647C116.879 7.08235 117.267 6.8735 117.698 6.72991C118.135 6.5798 118.605 6.50474 119.107 6.50474C119.982 6.50474 120.752 6.72991 121.418 7.18025C122.09 7.63059 122.609 8.27347 122.975 9.10888C123.347 9.93777 123.533 10.9037 123.533 12.0067C123.533 13.1424 123.343 14.1214 122.965 14.9437C122.586 15.7661 122.061 16.3959 121.389 16.8332C120.723 17.2639 119.969 17.4793 119.127 17.4793ZM118.52 15.6584C119.081 15.6584 119.584 15.5115 120.028 15.2178C120.472 14.9241 120.817 14.5032 121.065 13.9549C121.314 13.4002 121.438 12.7475 121.438 11.9969C121.438 11.2464 121.317 10.597 121.075 10.0487C120.834 9.49395 120.491 9.06972 120.047 8.77602C119.604 8.48232 119.098 8.33547 118.53 8.33547C117.936 8.33547 117.42 8.48885 116.983 8.7956C116.552 9.10235 116.216 9.53311 115.975 10.0879C115.74 10.6426 115.622 11.2823 115.622 12.0067C115.622 12.7442 115.743 13.3904 115.984 13.9451C116.226 14.4934 116.562 14.9176 116.993 15.2178C117.43 15.5115 117.939 15.6584 118.52 15.6584Z"
                fill="currentColor"
              />
              <path
                d="M107.292 17.4793C106.326 17.4793 105.455 17.2542 104.678 16.8038C103.908 16.347 103.304 15.7041 102.867 14.8752C102.43 14.0398 102.211 13.0836 102.211 12.0067C102.211 10.9168 102.426 9.95736 102.857 9.12848C103.288 8.29959 103.892 7.65672 104.668 7.19985C105.445 6.73646 106.323 6.50476 107.302 6.50476C108.287 6.50476 109.165 6.73319 109.935 7.19006C110.705 7.64693 111.303 8.2898 111.727 9.11869C112.151 9.94757 112.363 10.9103 112.363 12.0067C112.363 13.0902 112.148 14.0463 111.717 14.8752C111.286 15.7041 110.683 16.347 109.906 16.8038C109.136 17.2542 108.264 17.4793 107.292 17.4793ZM107.292 15.7465C107.866 15.7465 108.379 15.5997 108.829 15.306C109.286 15.0057 109.642 14.575 109.896 14.0137C110.151 13.4459 110.278 12.7769 110.278 12.0067C110.278 11.2235 110.151 10.5513 109.896 9.99C109.648 9.42218 109.296 8.98815 108.839 8.68793C108.388 8.3877 107.873 8.23759 107.292 8.23759C106.711 8.23759 106.192 8.3877 105.735 8.68793C105.285 8.98815 104.933 9.42218 104.678 9.99C104.43 10.5513 104.306 11.2235 104.306 12.0067C104.306 12.7769 104.433 13.4426 104.688 14.0039C104.942 14.5652 105.295 14.9959 105.745 15.2962C106.202 15.5964 106.718 15.7465 107.292 15.7465Z"
                fill="currentColor"
              />
              <path
                d="M91.5 17.2444V3.1272H97.2663C98.167 3.1272 98.9404 3.2871 99.5865 3.60691C100.233 3.92671 100.722 4.38684 101.055 4.9873C101.388 5.58122 101.554 6.26978 101.554 7.05298C101.554 7.62733 101.453 8.1462 101.251 8.60959C101.055 9.07298 100.771 9.45479 100.399 9.75502C100.027 10.0552 99.5833 10.2674 99.0677 10.3914V10.4305C99.7987 10.5872 100.347 10.9494 100.712 11.5172C101.084 12.0785 101.277 12.8617 101.29 13.8668C101.29 13.9451 101.29 14.0202 101.29 14.092C101.297 14.1573 101.3 14.2258 101.3 14.2976C101.326 15.0808 101.372 15.6845 101.437 16.1087C101.502 16.533 101.603 16.8789 101.74 17.1465V17.2444H99.5767C99.4658 16.9702 99.3777 16.6537 99.3124 16.2947C99.2537 15.9358 99.208 15.4626 99.1754 14.8752C99.1688 14.7512 99.1623 14.6239 99.1558 14.4934C99.1492 14.3628 99.1427 14.2258 99.1362 14.0822C99.1297 13.4361 99.0383 12.9237 98.8621 12.5452C98.6858 12.1601 98.415 11.8827 98.0495 11.713C97.6905 11.5368 97.2108 11.4487 96.6104 11.4487H93.6734V17.2444H91.5ZM96.9334 9.59838C97.4491 9.59838 97.8896 9.51027 98.2551 9.33405C98.6206 9.1513 98.9012 8.88371 99.097 8.53127C99.2928 8.1723 99.3907 7.74807 99.3907 7.25857C99.3907 6.75602 99.2896 6.33179 99.0872 5.98587C98.8849 5.63996 98.601 5.38542 98.2355 5.22225C97.87 5.05256 97.436 4.96771 96.9334 4.96771H93.6734V9.59838H96.9334Z"
                fill="currentColor"
              />
              <path
                d="M81.4886 21.0527V19.359H82.2424C82.7841 19.359 83.2116 19.2579 83.5249 19.0556C83.8382 18.8598 84.0862 18.5302 84.269 18.0668L84.5724 17.2934L80.5781 6.73975H82.7026L84.8955 13.0934C85.0913 13.6743 85.3034 14.3205 85.5319 15.0319H85.5808C85.7897 14.3205 85.992 13.6743 86.1878 13.0934L88.3416 6.73975H90.466L86.0605 18.5856C85.7538 19.408 85.2969 20.0248 84.6899 20.4359C84.0895 20.8471 83.2736 21.0527 82.2424 21.0527H81.4886Z"
                fill="currentColor"
              />
              <path
                d="M76.2052 17.4793C75.7353 17.4793 75.2817 17.4108 74.8444 17.2737C74.4071 17.1367 74.009 16.9344 73.65 16.6668C73.2976 16.3992 72.9973 16.0696 72.7493 15.678H72.7298V21.0527H70.6641V6.73972H72.7298V8.30612H72.7493C72.9778 7.94063 73.2649 7.62408 73.6108 7.35649C73.9568 7.08237 74.3451 6.87352 74.7759 6.72993C75.2131 6.57982 75.6831 6.50476 76.1856 6.50476C77.0602 6.50476 77.8303 6.72993 78.4961 7.18027C79.1683 7.63061 79.6872 8.27348 80.0527 9.1089C80.4247 9.93778 80.6107 10.9037 80.6107 12.0067C80.6107 13.1424 80.4214 14.1214 80.0429 14.9437C79.6643 15.7661 79.1389 16.3959 78.4667 16.8332C77.801 17.264 77.0471 17.4793 76.2052 17.4793ZM75.5982 15.6584C76.1595 15.6584 76.6621 15.5115 77.1059 15.2178C77.5497 14.9241 77.8956 14.5032 78.1436 13.9549C78.3916 13.4002 78.5156 12.7475 78.5156 11.9969C78.5156 11.2464 78.3949 10.597 78.1534 10.0487C77.9119 9.49397 77.5693 9.06974 77.1255 8.77604C76.6816 8.48234 76.1758 8.33549 75.608 8.33549C75.0141 8.33549 74.4985 8.48886 74.0612 8.79562C73.6304 9.10237 73.2943 9.53313 73.0528 10.0879C72.8179 10.6427 72.7004 11.2823 72.7004 12.0067C72.7004 12.7442 72.8211 13.3904 73.0626 13.9452C73.3041 14.4934 73.6402 14.9176 74.071 15.2178C74.5083 15.5115 75.0173 15.6584 75.5982 15.6584Z"
                fill="currentColor"
              />
              <path
                d="M64.963 17.4793C64.4931 17.4793 64.0395 17.4108 63.6022 17.2737C63.1649 17.1367 62.7668 16.9344 62.4078 16.6668C62.0554 16.3992 61.7552 16.0696 61.5071 15.678H61.4876V21.0527H59.4219V6.73972H61.4876V8.30612H61.5071C61.7356 7.94063 62.0227 7.62408 62.3687 7.35649C62.7146 7.08237 63.1029 6.87352 63.5337 6.72993C63.971 6.57982 64.4409 6.50476 64.9434 6.50476C65.818 6.50476 66.5881 6.72993 67.2539 7.18027C67.9261 7.63061 68.445 8.27348 68.8105 9.1089C69.1825 9.93778 69.3685 10.9037 69.3685 12.0067C69.3685 13.1424 69.1792 14.1214 68.8007 14.9437C68.4221 15.7661 67.8967 16.3959 67.2245 16.8332C66.5588 17.264 65.8049 17.4793 64.963 17.4793ZM64.356 15.6584C64.9173 15.6584 65.4199 15.5115 65.8637 15.2178C66.3075 14.9241 66.6534 14.5032 66.9014 13.9549C67.1494 13.4002 67.2734 12.7475 67.2734 11.9969C67.2734 11.2464 67.1527 10.597 66.9112 10.0487C66.6697 9.49397 66.3271 9.06974 65.8833 8.77604C65.4395 8.48234 64.9336 8.33549 64.3658 8.33549C63.7719 8.33549 63.2563 8.48886 62.819 8.79562C62.3882 9.10237 62.0521 9.53313 61.8106 10.0879C61.5757 10.6427 61.4582 11.2823 61.4582 12.0067C61.4582 12.7442 61.5789 13.3904 61.8204 13.9452C62.0619 14.4934 62.398 14.9176 62.8288 15.2178C63.2661 15.5115 63.7752 15.6584 64.356 15.6584Z"
                fill="currentColor"
              />
              <path
                d="M52.4419 17.4402C51.7632 17.4402 51.1692 17.3129 50.6601 17.0584C50.1511 16.7973 49.7627 16.4351 49.4951 15.9717C49.2275 15.5018 49.0938 14.9568 49.0938 14.3368C49.0938 13.4295 49.3809 12.7312 49.9553 12.2417C50.5296 11.7457 51.3422 11.4161 52.393 11.2529L54.8307 10.8907C55.0852 10.858 55.281 10.8091 55.4181 10.7438C55.5617 10.6786 55.6628 10.5937 55.7216 10.4893C55.7868 10.3783 55.8195 10.2413 55.8195 10.0781C55.8195 9.70609 55.7281 9.38302 55.5454 9.1089C55.3691 8.82825 55.1113 8.61613 54.7719 8.47255C54.4391 8.32896 54.041 8.25717 53.5776 8.25717C53.1403 8.25717 52.7585 8.33222 52.4321 8.48234C52.1058 8.62592 51.848 8.83804 51.6587 9.11869C51.4695 9.39281 51.3585 9.71588 51.3259 10.0879H49.3189C49.3777 9.35038 49.5865 8.71403 49.9455 8.17885C50.311 7.63714 50.8037 7.22269 51.4238 6.93552C52.0438 6.64835 52.7617 6.50476 53.5776 6.50476C54.4652 6.50476 55.2288 6.65161 55.8684 6.94531C56.508 7.23248 56.9943 7.64693 57.3271 8.18864C57.66 8.72382 57.8264 9.35365 57.8264 10.0781V17.2444H55.8195V15.7073H55.7901C55.4899 16.2556 55.0526 16.6831 54.4782 16.9898C53.9104 17.2901 53.2317 17.4402 52.4419 17.4402ZM53 15.7563C53.6004 15.7563 54.1128 15.6094 54.537 15.3157C54.9612 15.022 55.281 14.6337 55.4964 14.1507C55.7118 13.6612 55.8195 13.1326 55.8195 12.5648V12.0655C55.7281 12.1373 55.6008 12.1993 55.4377 12.2515C55.281 12.3037 55.0885 12.3494 54.8601 12.3885L52.6475 12.7312C52.1906 12.803 51.8252 12.9596 51.551 13.2011C51.2769 13.4361 51.1399 13.7787 51.1399 14.2291C51.1399 14.5423 51.2116 14.8132 51.3552 15.0416C51.5053 15.2701 51.7207 15.4463 52.0014 15.5703C52.2886 15.6943 52.6214 15.7563 53 15.7563Z"
                fill="currentColor"
              />
              <path
                d="M36.7812 17.2444V3.1272H38.8469V9.13825H45.4845V3.1272H47.56V17.2444H45.4845V10.9886H38.8469V17.2444H36.7812Z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-7 font-mono text-[11.5px] uppercase tracking-[0.14em] text-neutral-600 lg:flex">
            
            {/* PLATFORM Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("platform")}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "platform" ? null : "platform")}
                className={`group inline-flex items-center gap-1.5 py-2 font-medium transition-colors hover:text-black cursor-pointer ${
                  activeMenu === "platform" ? "text-black border-b-2 border-black" : ""
                }`}
              >
                <span>Platform</span>
                <svg
                  className={`h-2.5 w-2.5 transition-transform duration-200 ${
                    activeMenu === "platform" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 12 12"
                >
                  <path
                    d="M2.5 4.5 6 8l3.5-3.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>

            {/* SOLUTIONS Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "solutions" ? null : "solutions")}
                className={`group inline-flex items-center gap-1.5 py-2 font-medium transition-colors hover:text-black cursor-pointer ${
                  activeMenu === "solutions" ? "text-black border-b-2 border-black" : ""
                }`}
              >
                <span>Solutions</span>
                <svg
                  className={`h-2.5 w-2.5 transition-transform duration-200 ${
                    activeMenu === "solutions" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 12 12"
                >
                  <path
                    d="M2.5 4.5 6 8l3.5-3.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>

            {/* CUSTOMERS */}
            <a
              href="#case-studies"
              className="py-2 transition-colors hover:text-black no-underline"
            >
              Customers
            </a>

            {/* NEWSROOM */}
            <a
              href="#newsroom"
              className="py-2 transition-colors hover:text-black no-underline"
            >
              Newsroom
            </a>

            {/* CAREERS */}
            <a
              href="#careers"
              className="py-2 transition-colors hover:text-black no-underline"
            >
              Careers
            </a>

            {/* Solid Black BOOK A DEMO CTA */}
            <a
              href="#cta"
              className="ml-3 inline-flex items-center justify-center bg-black px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-all hover:bg-neutral-800 active:scale-[0.98] no-underline"
            >
              Book a demo
            </a>
          </div>

          {/* Mobile Actions: Demo Button & Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#cta"
              className="bg-black px-3.5 py-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-white no-underline"
            >
              Book demo
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col gap-1 p-2 text-neutral-800"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                  mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                  mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </button>
          </div>

        </div>

        {/* 3. Interactive Mega Menu Dropdown: PLATFORM */}
        <div
          onMouseEnter={() => handleMouseEnter("platform")}
          onMouseLeave={handleMouseLeave}
          className={`absolute inset-x-0 top-full border-b border-neutral-200 bg-white shadow-2xl transition-all duration-200 ease-out ${
            activeMenu === "platform"
              ? "visible opacity-100 translate-y-0 pointer-events-auto"
              : "invisible opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          <div className="mx-auto max-w-[1440px] px-6 py-8 md:px-12">
            
            {/* Header: Platform Overview Link */}
            <div className="mb-6 border-b border-neutral-200 pb-4">
              <a
                href="#platform"
                onClick={() => setActiveMenu(null)}
                className="group inline-flex items-center gap-2 text-[18px] font-semibold text-neutral-900 transition-colors hover:text-black no-underline"
              >
                <span>Platform overview</span>
                <span className="text-neutral-500 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* 4 Feature Columns + 1 Side Links Column */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
              
              {/* Col 1: Agents */}
              <div>
                <a
                  href="#platform"
                  onClick={() => setActiveMenu(null)}
                  className="text-[14.5px] font-semibold text-neutral-900 hover:text-black no-underline"
                >
                  Agents
                </a>
                <p className="mt-1 text-[12px] text-neutral-500">
                  The core of the platform
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-700">
                    Agentic tools
                  </span>
                  <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-700">
                    Voice AI
                  </span>
                  <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-700">
                    Workflow logic
                  </span>
                </div>
              </div>

              {/* Col 2: Governance */}
              <div>
                <a
                  href="#platform"
                  onClick={() => setActiveMenu(null)}
                  className="text-[14.5px] font-semibold text-neutral-900 hover:text-black no-underline"
                >
                  Governance
                </a>
                <p className="mt-1 text-[12px] text-neutral-500">
                  Evaluating agent behavior
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-700">
                    Northstars
                  </span>
                  <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-700">
                    Adversarial agents
                  </span>
                  <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-700">
                    Audits &amp; tests
                  </span>
                </div>
              </div>

              {/* Col 3: Context */}
              <div>
                <a
                  href="#platform"
                  onClick={() => setActiveMenu(null)}
                  className="text-[14.5px] font-semibold text-neutral-900 hover:text-black no-underline"
                >
                  Context
                </a>
                <p className="mt-1 text-[12px] text-neutral-500">
                  What agents generate &amp; learn from
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-700">
                    Integrations
                  </span>
                  <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-700">
                    Agentic data
                  </span>
                </div>
              </div>

              {/* Col 4: Interfaces */}
              <div>
                <a
                  href="#platform"
                  onClick={() => setActiveMenu(null)}
                  className="text-[14.5px] font-semibold text-neutral-900 hover:text-black no-underline"
                >
                  Interfaces
                </a>
                <p className="mt-1 text-[12px] text-neutral-500">
                  How humans interact with agents
                </p>
              </div>

              {/* Col 5: Security & Dev Tools (Divided) */}
              <div className="border-t border-neutral-200 pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <div className="space-y-4">
                  <a
                    href="#platform"
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-center justify-between text-[13.5px] font-medium text-neutral-800 transition-colors hover:text-black no-underline"
                  >
                    <span>Security &amp; reliability</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a
                    href="#platform"
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-center justify-between text-[13.5px] font-medium text-neutral-800 transition-colors hover:text-black no-underline"
                  >
                    <span>Developer tools</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 4. Interactive Mega Menu Dropdown: SOLUTIONS */}
        <div
          onMouseEnter={() => handleMouseEnter("solutions")}
          onMouseLeave={handleMouseLeave}
          className={`absolute inset-x-0 top-full border-b border-neutral-200 bg-white shadow-2xl transition-all duration-200 ease-out ${
            activeMenu === "solutions"
              ? "visible opacity-100 translate-y-0 pointer-events-auto"
              : "invisible opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-8 md:flex-row md:px-12">
            
            {/* Columns: By Industry & By Function */}
            <div className="flex flex-1 flex-col gap-10 md:flex-row md:gap-14">
              
              {/* BY INDUSTRY */}
              <div>
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                  By industry
                </div>
                <div className="grid grid-cols-2 gap-x-12 gap-y-2.5">
                  {[
                    "Logistics",
                    "Utilities",
                    "Airlines",
                    "Finance",
                    "Insurance",
                    "Manufacturing",
                    "Retail",
                    "Telecom",
                  ].map((industry) => (
                    <a
                      key={industry}
                      href="#case-studies"
                      onClick={() => setActiveMenu(null)}
                      className="group inline-flex items-center text-[13.5px] text-neutral-800 transition-colors hover:text-black no-underline"
                    >
                      <span className="relative">
                        {industry}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-black transition-all group-hover:w-full" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* BY FUNCTION */}
              <div>
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                  By function
                </div>
                <div className="flex flex-col gap-2.5">
                  {[
                    "Customer support",
                    "Sales",
                    "Finance",
                    "Operations",
                    "HR & recruiting",
                  ].map((fn) => (
                    <a
                      key={fn}
                      href="#case-studies"
                      onClick={() => setActiveMenu(null)}
                      className="group inline-flex items-center text-[13.5px] text-neutral-800 transition-colors hover:text-black no-underline"
                    >
                      <span className="relative">
                        {fn}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-black transition-all group-hover:w-full" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Card: Built for the real economy */}
            <div className="w-full shrink-0 md:w-[320px]">
              <a
                href="#case-studies"
                onClick={() => setActiveMenu(null)}
                className="group block rounded-lg border border-neutral-200 p-6 transition-all hover:border-neutral-400 hover:shadow-sm no-underline bg-neutral-50/50"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                  Solutions
                </div>
                <div className="mt-2 text-[19px] font-semibold leading-snug text-neutral-900 group-hover:text-black">
                  Built for the real economy
                </div>
                <p className="mt-2 text-[12.5px] leading-relaxed text-neutral-600">
                  AI workers deployed into the operations that move goods, keep the lights on, and settle transactions — across eight industries.
                </p>
              </a>
            </div>

          </div>
        </div>

      </nav>

      {/* 5. Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-neutral-200 bg-white px-5 py-6 shadow-xl lg:hidden">
          <div className="flex flex-col space-y-4 font-mono text-[13px] uppercase tracking-wider">
            
            {/* Mobile Platform Toggle */}
            <div className="border-b border-neutral-100 pb-3">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("platform")}
                className="flex w-full items-center justify-between text-left font-medium text-neutral-900"
              >
                <span>Platform</span>
                <span>{mobileExpanded["platform"] ? "−" : "+"}</span>
              </button>
              {mobileExpanded["platform"] && (
                <div className="mt-3 space-y-2 pl-3 text-[12px] normal-case text-neutral-600 font-sans">
                  <div><a href="#platform" onClick={() => setMobileMenuOpen(false)}>Agents (Agentic tools, Voice AI)</a></div>
                  <div><a href="#platform" onClick={() => setMobileMenuOpen(false)}>Governance (Audits, Tests)</a></div>
                  <div><a href="#platform" onClick={() => setMobileMenuOpen(false)}>Context &amp; Interfaces</a></div>
                </div>
              )}
            </div>

            {/* Mobile Solutions Toggle */}
            <div className="border-b border-neutral-100 pb-3">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("solutions")}
                className="flex w-full items-center justify-between text-left font-medium text-neutral-900"
              >
                <span>Solutions</span>
                <span>{mobileExpanded["solutions"] ? "−" : "+"}</span>
              </button>
              {mobileExpanded["solutions"] && (
                <div className="mt-3 space-y-2 pl-3 text-[12px] normal-case text-neutral-600 font-sans">
                  <div><a href="#case-studies" onClick={() => setMobileMenuOpen(false)}>Logistics &amp; Supply Chain</a></div>
                  <div><a href="#case-studies" onClick={() => setMobileMenuOpen(false)}>Utilities &amp; Airlines</a></div>
                  <div><a href="#case-studies" onClick={() => setMobileMenuOpen(false)}>Manufacturing &amp; Retail</a></div>
                </div>
              )}
            </div>

            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-neutral-900 no-underline"
            >
              Customers
            </a>
            <a
              href="#newsroom"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-neutral-900 no-underline"
            >
              Newsroom
            </a>
            <a
              href="#careers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-neutral-900 no-underline"
            >
              Careers
            </a>

            <div className="pt-2">
              <a
                href="#cta"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-black py-3 text-center text-white no-underline text-[12px]"
              >
                Book a demo
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
