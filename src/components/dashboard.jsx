import React from "react";

function Dashboard() {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-[#21a179]">
          <div className="flex items-center justify-center h-16 bg-[#21a179]">
            <span className="text-white text-xl uppercase">
              TENDO DOCUMENTATION
            </span>
          </div>
          <div className="flex flex-col ">
            <ul className="flex-1 px-2 py-4 bg-[#21a179]">
              <li>
                <details class="group">
                  <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex text-white text-base">
                      <span>Ops Dashboard</span>
                    </span>
                    <svg
                      class="w-5 h-5 text-white transition group-open:rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </summary>

                  <article class="px-8 pb-8">
                    <ul class="flex flex-col gap-5 pl-2 text-white text-sm">
                      <li>
                        <a href="">Orders</a>
                      </li>
                      <li>
                        <a href="">Account</a>
                      </li>
                      <li>
                        <a href="">Inventory</a>
                      </li>
                      <li>
                        <a href="">Marketing</a>
                      </li>
                      <li>
                        <a href="">Location</a>
                      </li>
                      <li>
                        <a href="">Payment</a>
                      </li>
                      <li>
                        <a href="">System</a>
                      </li>
                      <li>
                        <a href="">HR Portal</a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
            
            <ul className="flex-2 px-2 bg-[#21a179]">
              <li>
                <details class="group">
                  <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2 text-white">
                      <span>Supplier Dashboard</span>
                    </span>
                    <svg
                      class="w-5 h-5 text-white transition group-open:rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </summary>

                  <article class="px-8 pb-8">
                    <ul class="flex flex-col gap-5 pl-2 text-white">
                      <li>
                        <a href="">Item 1</a>
                      </li>
                      <li>
                        <a href="">Item 2</a>
                      </li>
                      <li>
                        <a href="">Item 3</a>
                      </li>
                      <li>
                        <a href="">Item 4</a>
                      </li>
                      <li>
                        <a href="">Item 5</a>
                      </li>
                      <li>
                        <a href="">Item 6</a>
                      </li>
                      <li>
                        <a href="">Item 7</a>
                      </li>
                      <li>
                        <a href="">Item 8</a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="p-4">
            <h1 className="text-black text-xl uppercase mt-16 mx-16">
              Welcome to  Tendo Docs!
            </h1>
            <p className="mt-2 text-gray-600"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
