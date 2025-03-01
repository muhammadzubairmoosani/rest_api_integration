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
          <p className="text-sm text-gray-600">Username: {item.username}</p>
          <p className="text-sm text-gray-600">Phone: {item.phone}</p>
          <p className="text-sm text-gray-600">Website: {item.website}</p>
          <p className="text-sm text-gray-600">Company: {item.company?.name || ''}</p>
          <p className="text-sm text-gray-600">Adress: {`${item.address?.suite || ''}, ${item.address?.street || ''}, ${item.address?.city || ''}`}</p>
        </div>
      ))}
    </div>
  );
};

export default TileView;
