import React, { useState } from "react";
import { FaBoxOpen } from "react-icons/fa";
import Select from "react-select"; // Import react-select
import { saveProduct, Product } from "@/services/ProductService"; // Import the saveProduct function
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast"

const categoriesOptions = [
  { value: 1, label: "Category 1" },
  { value: 2, label: "Category 2" },
  { value: 3, label: "Category 3" },
  { value: 4, label: "Category 4" },
  { value: 5, label: "Category 5" },
];

const AddProduct: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [images, setImages] = useState<File[]>([]);
  const [categories, setCategories] = useState<number[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImages = Array.from(event.target.files);
      if (images.length + newImages.length <= 5) {
        setImages([...images, ...newImages]);
      } else {
        alert("You can only upload a maximum of 5 images.");
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    if (event.dataTransfer.files) {
      const newImages = Array.from(event.dataTransfer.files);
      if (images.length + newImages.length <= 5) {
        setImages([...images, ...newImages]);
      } else {
        alert("You can only upload a maximum of 5 images.");
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleImageRemove = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const handleSubmit = async () => {
    try {
      if (!name || !price) {
        setErrorMessage("Name and price are required.");
        return;
      }
      const product: Product = {
        name,
        description,
        price: parseFloat(price),
        categories: categories,
        quantity: quantity,
        pharmacyId: 1 
      };
      const savedProduct = await saveProduct(product, images);
      console.log(savedProduct) // Call saveProduct function with product and images
      toast({
        title: "Product saved successfully",
        description: "Your product has been saved successfully."
      });
      navigate('..');

      // Reset form fields and state if needed
    } catch (error: any) {
      console.error("Error saving product:", error);
      setErrorMessage(
        error.message || "Error saving product. Please try again."
      );
    }
  };

  const handleCategoryChange = (selectedOptions: any) => {
    setCategories(selectedOptions.map((option: any) => option.value));
  };

  return (
    <div className="w-full mx-auto p-8 bg-white shadow-md rounded-md ">
      <div className="flex items-center mb-6">
        <FaBoxOpen className="text-teal-500 text-3xl mr-3" />
        <h2 className="text-3xl font-semibold">Add Product</h2>
      </div>
      <p className="mb-8 text-gray-600">Add a new product to your store.</p>
      <form>
        <div className="mb-8">
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name*
          </label>
          <input
            id="productName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Give your product a short and clear name."
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="productDescription"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="productDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Give your product a short and clear description."
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="productImages"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Images
          </label>
          <div
            className={`mt-1 flex justify-center p-6 border-2 border-dashed ${
              isDragging ? "border-teal-500" : "border-gray-300"
            } rounded-md`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path d="M8 16v24h32V16H8zm-2-2h36a2 2 0 012 2v28a2 2 0 01-2 2H6a2 2 0 01-2-2V16a2 2 0 012-2z" />
                <path d="M4 8h40v2H4z" />
                <path d="M36 0H12a4 4 0 00-4 4v6h32V4a4 4 0 00-4-4zM8 4a4 4 0 014-4h24a4 4 0 014 4v6H8V4z" />
              </svg>
              <div className="flex text-sm text-gray-600 mt-2">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500"
                >
                  <span>Click to browse</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    multiple
                    className="sr-only"
                    onChange={handleImageUpload}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
          {images.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index}`}
                    className="h-24 w-24 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleImageRemove(index)}
                    className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 text-xs"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mb-8">
          <label
            htmlFor="productCategory"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Categories*
          </label>
          <Select
            id="productCategory"
            isMulti
            options={categoriesOptions}
            value={categoriesOptions.filter((option) =>
              categories.includes(option.value)
            )}
            onChange={handleCategoryChange}
            className="basic-multi-select "
            classNamePrefix="select"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="productQuantity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Quantity*
          </label>
          <input
            id="productQuantity"
            type="number"
            value={quantity}
            onChange={(e) => {
              quantity > 0
                ? setQuantity(parseInt(e.target.value))
                : setErrorMessage("Quantity must be greater than 0");
            }}
            placeholder="Enter the quantity of the product."
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="productPrice"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Price*
          </label>
          <input
            id="productPrice"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Give your product a price."
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
          >
            Save product
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Save as draft
          </button>
        </div>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AddProduct;
