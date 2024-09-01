import { FaEye } from "react-icons/fa";

const GridView = ({ data, onSelect }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {Object.keys(data[0] || {}).map((key, index) => (
              <th
                key={index}
                className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </th>
            ))}
            <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">
              View
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              {Object.values(item).map((value, idx) => (
                <td key={idx} className="py-2 px-4 text-sm text-gray-600">
                  {typeof value === "object" && value !== null
                    ? value?.name
                      ? `${value.name}`
                      : `${value.suite}, ${value.street}, ${value.city}`
                    : value}
                </td>
              ))}
              <td className="py-2 px-4 text-sm text-gray-600">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(item);
                  }}
                  className="text-blue-500 hover:text-blue-700 "
                >
                  <FaEye className="text-lg" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridView;
