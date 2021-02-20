// Core
import React, { FC } from "react";
import { Table } from "antd";
import { ColumnProps } from "antd/es/table";

// Models
import { addClient } from "../../models/client";
import { toggleModal } from "../../models/modal";

// Hooks
import { useData } from "./hooks/useData";

// Styles
import "./index.css";

// Types
import { ClientTypes } from "../../init/types";

type MainTablePropsTypes = {
  columns: ColumnProps<ClientTypes>[];
  data: ClientTypes[];
};

const MainTable: FC<MainTablePropsTypes> = (props: MainTablePropsTypes) => {
  const { columns } = props;
  const { loading, error, data } = useData();

  const ErrorJSX = error && loading && <div>Error!</div>;

  return (
    <div className="table-wrap">
      {ErrorJSX}
      <Table<ClientTypes>
        className="table"
        loading={loading}
        columns={columns}
        dataSource={data}
        tableLayout="fixed"
        rowClassName={() => "ant-table__row"}
        style={{
          boxShadow: "0 0 .3em rgba(255, 255, 255, .1)",
        }}
        scroll={{ y: 350 }}
        pagination={{ style: { margin: "1em" } }}
        onRow={(record) => {
          return {
            onClick: (event) => {
              addClient(record);
              toggleModal(true);
            },
          };
        }}
      />
    </div>
  );
};

export { MainTable };
