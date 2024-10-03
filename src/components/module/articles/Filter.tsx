"use client";
import { useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import Select from "react-dropdown-select";

const sortOptions = [
  {
    value: "date",
    label: "Sort by date",
  },
  {
    value: "vote",
    label: "Sort by votes",
  },
];
const tagOptions = [
  {
    value: "regular",
    label: "Regular",
  },
  {
    value: "premium",
    label: "Premium",
  },
];
const categoryOptions = [
  { value: "adventure", label: "Adventure" },
  { value: "eco-tourism", label: "Eco-tourism" },
  { value: "luxury", label: "Luxury" },
  { value: "wellness", label: "Wellness" },
  { value: "cultural", label: "Cultural" },
  { value: "culinary", label: "Culinary" },
  { value: "historical", label: "Historical" },
  { value: "beach", label: "Beach" },
  { value: "mountain", label: "Mountain" },
  { value: "road trip", label: "Road Trip" },
  { value: "travel", label: "Travel" },
];

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const user = useAppSelector(useCurrentUser);
  console.log("user:", user);

  const handleSort = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`/articles?${params.toString()}`);
  };

  return (
    <div className="flex justify-between items-center py-10 gap-5">
      <Select
        closeOnScroll
        className="dropdown-filter"
        placeholder="Sort"
        options={sortOptions}
        onChange={(values) => handleSort("sort", values[0].value)}
        values={[]}
      />
      <Select
        closeOnScroll
        className="dropdown-filter"
        placeholder="Select category"
        options={categoryOptions}
        onChange={(values) => handleSort("category", values[0].value)}
        values={[]}
      />
      <Select
        closeOnScroll
        className="dropdown-filter"
        placeholder="Select tag"
        options={tagOptions}
        onChange={(values) => handleSort("tag", values[0].value)}
        values={[]}
      />
      <input
        onChange={(e) => handleSort("searchTerm", e.target.value)}
        type="text"
        placeholder="Query"
        className="h-[35px] px-3 w-full border focus-visible:outline-none"
      />
    </div>
  );
};

export default Filter;
