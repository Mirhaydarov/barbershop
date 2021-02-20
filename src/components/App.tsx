// Core
import React, { FC } from "react";

// Component
import { MainLayout } from "./MainLayout";
import { Modal } from "../components/Modal";
import { ClientDetails } from "../components/ClientDetails";

const App: FC = () => {
  return (
    <>
      <MainLayout />
      <Modal>
        <ClientDetails/>
      </Modal>
    </>
  );
};

export default App;
