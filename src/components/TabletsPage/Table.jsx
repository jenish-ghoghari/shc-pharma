import PropTypes from "prop-types";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const TableComponent = ({ pageData }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <section className="py-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <nav className="text-sm sm:text-md text-gray-600 mb-4">
          <ol className="flex flex-wrap space-x-2">
            <li>
              <Link
                to="/"
                className="text-primary-blue font-semibold hover:underline"
              >
                Home
              </Link>
            </li>
            {pathnames.map((name, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span>/</span>
                <span className="text-gray-600 font-semibold">{name}</span>
              </li>
            ))}
          </ol>
        </nav>

        {pageData.tables.map((data, index) => (
          <div className="py-6" key={index}>
            <div className="pb-3">
              {/* Product Categories */}
              <p className="text-md sm:text-lg md:text-2xl font-bold text-gray-900">
                {data.tableTitle}
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border bg-white">
                <thead className="bg-[#0b1b2a] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">No</th>
                    <th className="px-4 py-3 text-left">Composition</th>
                  </tr>
                </thead>
                <tbody>
                  {data.tableData.map((sectionItem, idx) => (
                    <React.Fragment key={idx}>
                      {/* Render section title */}
                      {sectionItem.title && (
                        <tr className={`${data.tableTitleBackground} border-b`}>
                          <td className="px-4 py-3 font-bold border-r">
                            {sectionItem.id}
                          </td>
                          <td className="px-4 py-3 font-bold">
                            {sectionItem.title}
                          </td>
                        </tr>
                      )}

                      {/* Render items in this section */}
                      {sectionItem.items.map((item, index) => (
                        <tr
                          key={`${sectionItem.id}-${index}`}
                          className="border-b hover:bg-gray-100"
                        >
                          <td className="px-4 py-3 border-r">{index + 1}</td>
                          <td className="px-4 py-3">{item}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

TableComponent.propTypes = {
  pageData: PropTypes.shape({
    tables: PropTypes.arrayOf(
      PropTypes.shape({
        tableTitle: PropTypes.string.isRequired,
        tableTitleBackground: PropTypes.string.isRequired,
        tableData: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
              .isRequired,
            title: PropTypes.string.isRequired,
            items: PropTypes.arrayOf(PropTypes.string).isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default TableComponent;
