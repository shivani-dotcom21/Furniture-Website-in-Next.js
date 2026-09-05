import React from "react";

export default function Order() {
  return (
    <>
      <div className="  rounded-lg border border-gray-200 shadow-sm font-outfit">
        <table className="w-full text-left text-sm text-gray-600">
          {/* Table Header */}
          <thead className="bg-gray-100  text-gray-700">
            <tr className="text-center text-[16px]">
              <th  className="px-6 py-3 font-semibold">
                Order
              </th>
              <th className="px-6 py-3 font-semibold">
                Date
              </th>
              <th className="px-6 py-3 font-semibold">
                Status
              </th>
              <th className="px-6 py-3 font-semibold ">
                Total
              </th>
              <th className="px-6 py-3 font-semibold ">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200 bg-white">
            {/* Row 1 */}
            <tr className="hover:bg-gray-50 transition-colors text-center">
              <td className="px-6 py-4 font-medium text-gray-900">
                1
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                May 10, 2018
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
               Completed
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
               Rs. 25.00 for 1 item
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
               view
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-gray-50 transition-colors text-center">
              <td className="px-6 py-4 font-medium text-gray-900">
                2
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                May 10, 2018
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
              Processing
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
              Rs. 17.00 for 1 item	
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
               view
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
