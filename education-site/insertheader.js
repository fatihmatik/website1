// Create header element
const header = document.createElement("header");

// Set header content
header.innerHTML = `
<!-- header -->
    <div>
        <div class="flex justify-around bg-slate-700 items-center space-x-3 py-5">
            <div class="text-2xl flex font-bold ">
                <p class="text-white">YTU</p>
                <p class="text-blue-200 ">cation</p>
            </div>
            
            <div class="flex items-center text-[#000] w-full max-w-md relative">
                <input
                class="px-3 rounded-2xl placeholder-gray-500 text-black border-none ring-2 focus:ring-gray-500 focus:ring-2 w-full " 
                type="text" 
                placeholder="Search for a Course...">
                <button class="absolute inset-y-0 right-0 border border-gray-300 text-black rounded-2xl px-4 ">Search</button>
            </div>

            <div class="text-[#000]">
                <button class="bg-blue-200 rounded-2xl px-3 py-1 font-bold text-white hover:bg-blue-100">Login</button>
            </div>
              
              
        </div>
        <div class="flex justify-around bg-blue-200 font-bold py-3 text-white text-xl">
            <div class="hover:text-blue-600 transition ease-in-out duration-300 hover:underline underline-offset-8"><a href="./index.html">Home</a></div>

            <div class="hover:text-blue-600 transition ease-in-out duration-300 hover:underline underline-offset-8"><a href="./courses.html">Courses</a></div>
        </div>
    </div>
`;

// Insert header before the main content
document.body.insertBefore(header, document.body.firstChild);
