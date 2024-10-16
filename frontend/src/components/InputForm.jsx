import React, { useState } from "react";

// StarRating component for reuse in both reusability and refurbishability
const StarRating = ({ rating, setRating }) => {
  return (
    <div className="flex flex-row gap-1">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "text-yellow-500" : "text-gray-300"}
            onClick={() => setRating(index)}
          >
            <span className="text-xl">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

const InputForm = () => {
  const [category, setCategory] = useState(undefined);
  const [reusability, setReusability] = useState(0);
  const [refurb, setRefurb] = useState(0);
  const [file, setFile] = useState(undefined);
  const [imageData, setImageData] = useState(undefined);
  const [dropOffPoint, setDropOffPoint] = useState("");

  const handleFileChange = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile);
    setImageData(URL.createObjectURL(imageFile));
  };

  const resetInputs = () => {
    setCategory(undefined);
    setReusability(0);
    setRefurb(0);
    setFile(undefined);
    setImageData(undefined);
    setDropOffPoint("");
  };

  const handleSubmit = async () => {
    if (category && reusability && refurb && file && dropOffPoint) {
      // submit the file
      const payload = new FormData();
      payload.append("category", category);
      payload.append("reusability", reusability);
      payload.append("refurb", refurb);
      payload.append("image", file);
      payload.append("location", dropOffPoint);

      const result = await fetch("http://localhost:4000/api/waste", {
        method: "POST",
        body: payload,
      });

      const status = result.status;

      if (status === 200) {
        alert("New waste registered.");
        resetInputs();
      } else {
        alert("Something went wrong.");
      }
    } else {
      alert("Please provide complete information.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-10">
      <form className="min-h-1/2 p-4 border flex flex-col gap-4 rounded-lg">
        {/* 1. category */}
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xl">Category of Waste</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>--select a category--</option>
            <option value="electronic">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="plastic">Plastic</option>
            <option value="metal">Metal</option>
            <option value="furniture">Furniture</option>
            <option value="utensil">Utensil</option>
          </select>
        </div>

        {/* 2. reusability rating */}
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xl">Reusability Rating</span>
          <StarRating rating={reusability} setRating={setReusability} />
        </div>

        {/* 3. refurbishability rating */}
        <div className="flex flex-col gap-2">
          <span className="font-bold">Refurbishability Rating</span>
          <StarRating rating={refurb} setRating={setRefurb} />
        </div>

        {/* 4. uploading image */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <input type="file" onChange={handleFileChange} />
          {imageData && (
            <img src={imageData} style={{ maxWidth: "200px", maxHeight: "125px" }} />
          )}
        </div>

        {/* 5. input dropoff point */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <span>Dropoff point</span>
          <input
            type="text"
            placeholder="Enter a location"
            onChange={(e) => setDropOffPoint(e.target.value)}
            value={dropOffPoint}
          />
        </div>

        {/* 6. submit */}
        <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-800 text-white rounded-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;

