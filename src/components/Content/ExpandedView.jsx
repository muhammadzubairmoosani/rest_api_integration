import { FaTimes } from "react-icons/fa";

const ExpandedView = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={20} />
        </button>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{data.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Username:</h3>
              <p className="text-gray-700">{data.username}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Email:</h3>
              <p className="text-gray-700">{data.email}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Phone:</h3>
              <p className="text-gray-700">{data.phone}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Website:</h3>
              <p className="text-gray-700">{data.website}</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-600">Address:</h3>
              <p className="text-gray-700">
                {`${data.address.suite}, ${data.address.street}, ${data.address.city}, ${data.address.zipcode}`}
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-600">Company:</h3>
              <p className="text-gray-700">
                {`${data.company.name} - ${data.company.catchPhrase}`}
              </p>
              <p className="text-gray-500">{data.company.bs}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedView;
