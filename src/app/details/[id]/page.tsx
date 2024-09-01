"use client";
import useFetch from "../../../hooks/useFetch";
import { useRouter, useParams } from "next/navigation";

const Details = () => {
  const router = useRouter();
  const param = useParams();
  const { id } = param;

  const { data, loading, error }: any = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (loading)
    return (
      <div className="p-4 text-center text-lg font-semibold text-gray-700">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="p-4 text-center text-lg font-semibold text-red-500">
        Error fetching data.
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <button
        onClick={() => router.back()}
        className="mb-6 text-blue-500 hover:text-blue-700 font-medium flex items-center"
      >
        &larr; Back
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
  );
};

export default Details;
