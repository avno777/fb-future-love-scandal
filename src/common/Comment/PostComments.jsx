import React, { useEffect, useState } from "react";
import axios from "axios";

function PostComments() {
  const [radomEvents, setRandomEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/db/sk-data.json");
        const data = response.data;

        const dataArrays = Object.values(data);

        const flattenedData = dataArrays.reduce(
          (acc, curr) => acc.concat(curr),
          []
        );

        const shuffledData = flattenedData.sort(() => Math.random() - 0.5);

        const selectedData = shuffledData.slice(0, 10);

        setRandomEvents(selectedData);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    }
    fetchData();
  }, []);

  const handleViewMore = () => {};

  return (
    <div className=" bg-white w-3/12 rounded-mlarge">
      <div className="text-center text-lg py-6 relative text-2xl font-extrabold">
        Comments
        <div className="absolute left-0 right-0 h-0.5 bg-custom-bg bottom-0"></div>
      </div>
      <div className="overflow-y-scroll h-80 scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-400 scrollbar-track-gray-300">
        {radomEvents.map((content) => (
          <div className="p-5">
            <div className="flex">
              <div>
                <img
                  src={content.User_Avatar}
                  alt="User Avatar"
                  className="w-7 h-7 object-cover rounded-full mx-auto items-center"
                />
              </div>
              <div className="ml-3 w-full">
                <div className="border-black bg-custom-bg rounded-mlarge h-auto w-full px-3 pb-2 mb-2">
                  <div>
                    <span className="font-bold">{content.User_Name}</span>
                  </div>
                  <div className="w-full">{content.Name}</div>
                </div>
                <div className="flex justify-between w-6/12 text-sm pl-1">
                  <div className="font-bold bg-gradient-to-l from-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Reply
                  </div>
                  <div className="font-bold bg-gradient-to-l from-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Edit
                  </div>
                  <div className="font-bold bg-gradient-to-l from-purple-500 to-pink-500 text-transparent bg-clip-text">
                    2 day ago
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex pl-10 pt-3 cursor-pointer"
              onClick={handleViewMore}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mi:enter">
                  <g id="Group">
                    <path
                      id="Vector"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18 14.1C18 13.8613 17.9181 13.6324 17.7722 13.4636C17.6263 13.2948 17.4285 13.2 17.2222 13.2H7.88889C7.27005 13.2 6.67656 12.9155 6.23897 12.4092C5.80139 11.9028 5.55556 11.2161 5.55556 10.5V6.9C5.55556 6.66131 5.47361 6.43239 5.32775 6.2636C5.18189 6.09482 4.98406 6 4.77778 6C4.5715 6 4.37367 6.09482 4.22781 6.2636C4.08194 6.43239 4 6.66131 4 6.9V10.5C4 11.6935 4.40972 12.8381 5.13903 13.682C5.86834 14.5259 6.85749 15 7.88889 15H17.2222C17.4285 15 17.6263 14.9052 17.7722 14.7364C17.9181 14.5676 18 14.3387 18 14.1Z"
                      fill="black"
                    />
                    <path
                      id="Vector_2"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.8052 14.5558C18.9299 14.4057 19 14.2023 19 13.9902C19 13.778 18.9299 13.5746 18.8052 13.4246L16.1439 10.2246C16.0184 10.0788 15.8503 9.99821 15.6759 10C15.5015 10.0019 15.3346 10.086 15.2112 10.2343C15.0879 10.3826 15.0179 10.5833 15.0164 10.793C15.0149 11.0028 15.0819 11.2049 15.2031 11.3558L17.394 13.9902L15.2031 16.6246C15.1396 16.6984 15.0889 16.7866 15.054 16.8842C15.0191 16.9818 15.0008 17.0868 15 17.193C14.9993 17.2993 15.0161 17.4046 15.0495 17.5029C15.083 17.6012 15.1324 17.6906 15.1949 17.7657C15.2573 17.8408 15.3316 17.9002 15.4134 17.9404C15.4952 17.9807 15.5828 18.0009 15.6711 18C15.7595 17.999 15.8468 17.977 15.9279 17.9351C16.0091 17.8931 16.0825 17.8322 16.1439 17.7558L18.8052 14.5558Z"
                      fill="black"
                    />
                  </g>
                </g>
              </svg>
              <p className="font-bold">View more replies ...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostComments;
