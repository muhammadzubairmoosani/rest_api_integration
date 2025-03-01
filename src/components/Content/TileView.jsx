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
          <p className="text-sm text-gray-600 space-y-2"><span className="font-bold text-gray-800">Email:</span> {item.email}</p>
          <p className="text-sm text-gray-600 space-y-2"><span className="font-bold text-gray-800">Username:</span> {item.username}</p>
          <p className="text-sm text-gray-600 space-y-2"><span className="font-bold text-gray-800">Phone:</span> {item.phone}</p>
          <p className="text-sm text-gray-600 space-y-2"><span className="font-bold text-gray-800">Website:</span> {item.website}</p>
          <p className="text-sm text-gray-600 space-y-2"><span className="font-bold text-gray-800">Company:</span> {item.company?.name || ''}</p>
          <p className="text-sm text-gray-600 space-y-2"><span className="font-bold text-gray-800">Adress:</span> {`${item.address?.suite || ''}, ${item.address?.street || ''}, ${item.address?.city || ''}`}</p>
        </div>
      ))}
    </div>
  );
};

export default TileView;
