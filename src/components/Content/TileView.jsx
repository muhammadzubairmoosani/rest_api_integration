import { useRouter } from "next/navigation";
import { FaEdit, FaFlag, FaTrash } from "react-icons/fa";

const TileView = ({ data, onEdit, onFlag, onDelete }) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => router.push(`/details/${item.id}`)}
        >
          <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
          <p className="text-sm text-gray-600">Email: {item.email}</p>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(item);
              }}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaEdit />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onFlag(item);
              }}
              className="text-yellow-500 hover:text-yellow-700"
            >
              <FaFlag />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(item);
              }}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TileView;
