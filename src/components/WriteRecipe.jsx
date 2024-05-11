import React, { useState } from "react";

const WriteRecipe = () => {
  const [machineInfo, setMachineInfo] = useState({
    machineNumber: "",
    recipeNumber: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const submitForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setMachineInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const WriteRecipe = async (event) => {
    try {
      event.preventDefault();
      const apiUrl = `http://192.168.0.10:8000/write?machineNo=${machineInfo.machineNumber}&recipeNo=${machineInfo.recipeNumber}`;

      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setShowSuccessMessage(true); // Show success message
          setTimeout(() => {
            setShowSuccessMessage(false); // Hide success message after 3 seconds
          }, 3000);
          console.log(data.message);
        } else {
          toast.error(`${data.error}`);
        }
      } else {
        setShowFailureMessage(true); // Show failure message
        setTimeout(() => {
          setShowFailureMessage(false); // Hide failure message after 3 seconds
        }, 3000);
        console.log("fail to Write");
      }
    } catch (error) {}
  };

  return (
    <div className="p-4">
      <form action="" className="space-y-4" onSubmit={WriteRecipe}>
        <div className="flex flex-col">
          <label htmlFor="machineNumber" className="mb-1">
            Machine Number
          </label>
          <input
            type="number"
            name="machineNumber"
            id="machineNumber"
            className="border rounded-md p-2"
            onChange={submitForm}
            value={machineInfo.machineNumber}
            min="1" 
            max="50" 
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="recipeNumber" className="mb-1">
            Recipe No
          </label>
          <input
            type="number"
            name="recipeNumber"
            id="recipeNumber"
            className="border rounded-md p-2"
            onChange={submitForm}
            value={machineInfo.recipeNumber}
            min="1" 
            max="30" 
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Write
        </button>
        {showSuccessMessage && (
          <span className="px-5 py-2 ml-3 bg-green-400 rounded font-semibold">
            Write successful
          </span>
        )}
        {showFailureMessage && (
          <span className="px-5 py-2 ml-3 bg-red-500  text-white rounded font-semibold">
            Failed to write
          </span>
        )}
      </form>
    </div>
  );
};

export default WriteRecipe;
