import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import { motion } from "framer-motion";
function Home() {
  return (
    <div className="w-full flex flex-col bg-cwhite items-center">
      <img className="w-full bg-center flex" src="/food.jpg" alt="food" />

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Popular />
        <Veggie />
      </motion.div>

      {/* <form className="mt-4 w-full px-14">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Search for a recipie..."
          />
          <button
            type="submit"
            className="text-cwhite absolute right-2.5 bottom-2.5 bg-cbrown hover:bg-cdarkgreen focus:ring-2 focus:outline-none focus:ring-cyellow font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form> */}
    </div>
  );
}

export default Home;
