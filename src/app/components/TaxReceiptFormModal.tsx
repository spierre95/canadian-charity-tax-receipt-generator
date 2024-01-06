import React from "react";
import { Datepicker, Modal } from "flowbite-react";
import { useForm } from "react-hook-form";

import Input from "./Input";

type FormData = {
  donorFirstName: string;
  donorLastName: string;
  donorIntial: string;
  donorAddress: string;
  giftAmount: number;
  eligibleAmount: number;
  dateReceived: Date;
  giftDescription: string;
};

const TaxReceiptFormModal = ({ showModal, setShowModal }) => {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const onSubmit = (data) => console.log(data);
  return (
    <Modal show={showModal} size="4xl" onClose={() => setShowModal(false)}>
      <Modal.Header>Generate tax Receipt</Modal.Header>

      <Modal.Body>
        <form
          className="flex flex-col mx-auto max-w-screen-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="font-bold text-lg my-5">Donor Information</h2>
          <div className="flex justify-center ">
            <div className="basis-5/12 mx-1 mb-5">
              <Input
                label="First Name"
                type="text"
                register={register}
                id="donorFirstName"
              />
            </div>
            <div className="basis-2/12 mx-1 mb-5">
              <Input
                label="Initial"
                type="text"
                register={register}
                id="donorInitial"
              />
            </div>
            <div className="basis-5/12 mx-1 mb-5">
              <Input
                label="Last Name"
                type="text"
                register={register}
                id="donorLastName"
              />
            </div>
          </div>
          <div className="flex  justify-center">
            <div className="mx-1 basis-full">
              {/* TODO: make date into separate feilds and add google autocomplete */}
              <Input
                label="Address"
                type="text"
                register={register}
                id="donorAddress"
              />
            </div>
          </div>
          <h2 className="font-bold text-lg mt-10 mb-5">Gift Information</h2>
          <div className="flex ">
            <div className="basis-2/6 mx-1 mb-5">
              <Input
                label="Gift Amount"
                type="number"
                register={register}
                id="giftAmount"
              />
            </div>
            <div className="mb-5 mx-1 basis-2/6">
              <Input
                label="Eligible Gift Amount"
                type="number"
                register={register}
                id="eligibleAmount"
              />
            </div>

            <div className="mx-1 basis-2/6">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date Received
              </label>
              <Datepicker
                onSelectedDateChanged={(date) => setValue("dateReceived", date)}
              />
            </div>
          </div>
          <div className="mb-5 mx-1">
            <Input
              label="Gift Description"
              type="text"
              register={register}
              id="giftDescription"
            />
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
