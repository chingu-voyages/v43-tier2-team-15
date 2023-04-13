import { useState } from "react";
import Header from "../header/Header";
import NavBar from "../UI/NavBar";
import Footer from "../Footer";
import Filters from "../Layout/Filters";
import Card from "../card/Card";
import Catalogue from "../Layout/Catalogue";
import Pagination from "./Pagination";

export default function ProductList() {
  const itemsPerPage = 15;

  const productList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="product-list-page bg-[#F6EEDF]">
      <Header />
      <NavBar />
      <img
        className="banner w-full"
        alt=""
        src="src/assets/images/banner.png"
      />
      <div class="filter-sort">
        <div class="row align-items-center">
          <div class="col-auto d-none d-lg-block font-roboto font-medium text-xs leading-4 tracking-widest text-left">
            <label>SORT BY:</label>
          </div>
          <div class="col">
            <select class="js-filter-sort input--sort block rounded-md border border-gray-500 bg-transparent px-3 py-2 shadow-sm focus:border-gray-600 focus:outline-none focus:ring-gray-600 sm:text-sm">
              <option value="" selected class="text-gray-800">
                Most Rated
              </option>
              <option value="-n-stock" class="text-gray-800">
                In stock
              </option>
              <option value="low-to-high" class="text-gray-800">
                Price: Low → High
              </option>
              <option value="high-to-low" class="text-gray-800">
                Price: High → Low
              </option>
              <option value="by-recommended" class="text-gray-800">
                Recommended
              </option>
              <option value="recently-added" class="text-gray-800">
                Recently Added
              </option>
              <option value="low-rating" class="text-gray-800">
                Lowest Rated
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="breadcrumb">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-600">
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <a
                  href="#"
                  class="ml-1 text-sm font-medium text-gray-400 md:ml-2 hover:text-gray-600">
                  Anime action figures
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <Catalogue />
      <Filters />
      <div className="product-list">
        {currentItems.map((item) => (
          <Card
            key={item}
            id={item}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
        ))}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={productList.length}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Footer />
    </div>
  );
}
