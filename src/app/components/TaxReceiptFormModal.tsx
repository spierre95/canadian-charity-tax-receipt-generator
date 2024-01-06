import React from "react";
import { Datepicker, Modal} from "flowbite-react";

const TaxReceiptFormModal = ({ showModal, setShowModal }) => {
  return (
    <Modal show={showModal} size="4xl" onClose={() => setShowModal(false)}>
      <Modal.Header>Generate tax Receipt</Modal.Header>

      <Modal.Body>
        <form className="flex flex-col mx-auto max-w-screen-2xl">
          <h2 className="font-bold text-lg my-5">Donor Information</h2>
          <div className="flex justify-center ">
            <div className="basis-5/12 mx-1 mb-5">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div className="basis-2/12 mx-1 mb-5">
              <label
                htmlFor="middleInitial"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Middle Initial
              </label>
              <input
                type="text"
                id="middleInitial"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="basis-5/12 mx-1 mb-5">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="flex  justify-center">
            <div className="basis-full">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <textarea
                id="address"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
            </div>
          </div>
          <h2 className="font-bold text-lg mt-10 mb-5">Gift Information</h2>
          <div className="flex ">
            <div className="basis-2/6 mx-1 mb-5">
              <label
                htmlFor="giftAmount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gift Amount
              </label>
              <input
                type="number"
                id="giftAmount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5 mx-1 basis-2/6">
              <label
                htmlFor="eligibleAmount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Eligible Amount
              </label>
              <input
                type="number"
                id="eligibleAmount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="mx-1 basis-2/6">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date Received
              </label>
              <Datepicker />
            </div>
          </div>
          <div className="mb-5 ">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Gift Description
            </label>
            <textarea
              id="description"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-10 mb-5 text-white w-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default TaxReceiptFormModal;
