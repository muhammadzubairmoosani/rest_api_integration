"use client";
import { useState } from "react";
import ExpandedView from "../components/Content/ExpandedView";
import GridView from "../components/Content/GridView";
import TileView from "../components/Content/TileView";
import Button from "../components/UI/Button";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [view, setView] = useState("grid");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item: any) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  const handleEdit = (item: any) => {
    alert(`Edit ${item.name}`);
  };

  const handleFlag = (item: any) => {
    alert(`Flag ${item.name}`);
  };

  const handleDelete = (item: any) => {
    alert(`Delete ${item.name}`);
  };

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
    <div className="p-4">
      <div className="flex justify-end mb-4 space-x-2">
        <Button onClick={() => setView("grid")} active={view === "grid"}>
          Grid View
        </Button>
        <Button onClick={() => setView("tile")} active={view === "tile"}>
          Tile View
        </Button>
      </div>

      {view === "grid" ? (
        <GridView data={data} onSelect={handleSelect} />
      ) : (
        <TileView
          data={data}
          onEdit={handleEdit}
          onFlag={handleFlag}
          onDelete={handleDelete}
        />
      )}

      {selectedItem && (
        <ExpandedView data={selectedItem} onClose={handleClose} />
      )}
    </div>
  );
}
