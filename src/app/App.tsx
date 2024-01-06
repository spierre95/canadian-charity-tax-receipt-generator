import React, { useState } from "react";
import { Button } from "flowbite-react";
import TaxReceiptFormModal from "./components/TaxReceiptFormModal";

const App = () => {
  const [showTaxFromModal, setShowTaxFormModal] = useState<boolean>(false);

  return (
    <div>
      <Button.Group>
        <Button color="gray">Settings</Button>
        <Button color="gray" onClick={() => setShowTaxFormModal(true)}>New Receipt</Button>
      </Button.Group>
      <TaxReceiptFormModal
        showModal={showTaxFromModal}
        setShowModal={setShowTaxFormModal}
      />
    </div>
  );
};

export default App;
