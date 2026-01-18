import { IoMdArrowDropup } from "react-icons/io";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import { RiPencilFill } from "react-icons/ri";

const PromoTable = ({ mode }) => {
  return (
    <div className="space-y-4 mt-5">
      <div className="border border-[#B0B0B0] bg-white rounded-3xl overflow-x-auto lg:overflow-x-visible">
        {mode === "normal" && (
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="h-[64px] border-b border-[#E5E7EB]">
                <th className="px-4 text-center font-normal w-[70px] whitespace-nowrap">
                  Campaign ID
                </th>
                <th className="px-4 text-center font-normal">Title</th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Target Audience
                </th>
                <th className="px-4 text-center font-normal">Status</th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Start Date
                </th>
                <th className="px-4 text-center font-normal w-[120px]">
                  End Date
                </th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <tr
                  className="h-[56px] border-b last:border-b-0  text-[#5C5C5C]"
                  key={_}
                >
                  <td className="px-4 text-center">21345215149</td>
                  <td className="px-4 text-center">Monsoon Flash Sale</td>
                  <td className="px-4 text-center">All Users</td>

                  <td className="px-4 text-center">
                    <div className="inline-flex items-center gap-x-2 px-3 py-1 text-[10px] border border-[#44D769] text-[#44D769] rounded-full">
                      <span>Active</span>
                      <IoMdArrowDropup />
                    </div>
                  </td>

                  <td className="px-4 text-center whitespace-nowrap">
                    Jul 7, 2025
                  </td>

                  <td className="px-4 text-center whitespace-nowrap">
                    Jul 10, 2025
                  </td>

                  <td className="px-4 text-center text-[#1D7BBB] text-sm">
                    <div className="flex items-center justify-center gap-x-2">
                      <div className="flex items-center gap-x-1 cursor-pointer">
                        <span>Edit</span>
                        <RiPencilFill />
                      </div>
                      <span>|</span>
                      <div className="flex items-center gap-x-1 cursor-pointer">
                        <span>View</span>
                        <PiMagnifyingGlassFill />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {(mode === "bulk" || mode === "delete") && (
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="h-[64px] border-b border-[#E5E7EB]">
                <th className="px-4 text-center font-normal w-[70px] whitespace-nowrap">
                  Id
                </th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Title / Subject Line
                </th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Type
                </th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Target Audience
                </th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Status
                </th>
                <th className="px-4 text-center font-normal w-[120px] whitespace-nowrap">
                  Created On
                </th>
                <th className="px-4 text-center font-normal whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <tr
                  className="h-[56px] border-b last:border-b-0  text-[#5C5C5C]"
                  key={_}
                >
                  <td className="px-4 text-center">21345215149</td>
                  <td className="px-4 text-center">Monsoon Flash Sale</td>
                  <td className="px-4 text-center">Campaign</td>
                  <td className="px-4 text-center">All Users</td>

                  <td className="px-4 text-center">
                    <div className="inline-flex items-center gap-x-2 px-3 py-1 text-[10px] border border-[#44D769] text-[#44D769] rounded-full">
                      <span>Active</span>
                      <IoMdArrowDropup />
                    </div>
                  </td>

                  <td className="px-4 text-center whitespace-nowrap">
                    Jul 10, 2025
                  </td>

                  <td className="px-6 font-normal text-center text-[#5C5C5C]">
                    <div className="flex items-center gap-x-4">
                      <div className="flex justify-center items-center gap-2 text-[#1D7BBB] cursor-pointer">
                        <span>View</span>
                        <PiMagnifyingGlassFill className="size-4" />
                      </div>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className=" accent-[#1D7BBB]"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PromoTable;
