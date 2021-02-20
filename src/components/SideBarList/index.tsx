// Core
import React, { FC } from "react";
import { List } from "antd";

// Components
import { Checkbox, Collapse, SearchBar } from "../SideBarItem";

const SideBarList: FC = () => {
  const { Item } = List;

  return (
    <Collapse title="Фильтры">
      <SearchBar placeholder="Клиент" searchBy="client" />
      <Collapse title="Поиск">
        <SearchBar placeholder="Клиент" searchBy="client" />
        <SearchBar placeholder="Барбер" searchBy="barber" />
        <SearchBar placeholder="Статус" searchBy="status" />
      </Collapse>
      <List>
        <Item>
          <Checkbox title="Готов" value="Готов" />
        </Item>
      </List>
      <List split={false}>
        <Item>
          <Checkbox title="Готов" value="Готов" />
        </Item>
        <Item>
          <Checkbox title="Закрыт" value="Закрыт" />
        </Item>
        <Item>
          <Checkbox title="В работе" value="В работе" />
        </Item>
      </List>
    </Collapse>
  );
};

export { SideBarList };
