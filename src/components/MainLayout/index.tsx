// Core
import React, { FC } from "react";
import { useStore } from "effector-react";
import { Layout } from "antd";

// Components
import { MainSideBar } from "../MainSideBar";
import { MainHeader } from "../MainHeader";
import { MainContent } from "../MainContent";
import { MainTable } from "../MainTable";
import { SideBarList } from "../SideBarList";
import { columns } from "../MainTable/columns-config";

// Models
import { $filteredClients } from "../../models/clients";

const MainLayout: FC = () => {
  const data = useStore($filteredClients);
 
  return (
    <Layout style={{ background: "#323840", height: '100vh' }}>
      <MainSideBar logo="Barbershop" subTitle="Журнал заказов">
        <SideBarList />
      </MainSideBar>
      <Layout style={{background: "rgba(0, 0, 0, .2)", padding: '1em' }}>
        <MainHeader />
        <MainContent>
          <MainTable columns={columns} data={data} />
        </MainContent>
      </Layout>
    </Layout>
  );
};

export { MainLayout };
