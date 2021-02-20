export const clientTemplate = {
  id: "",
  createdDate: "",
  createdTime: "",
  status: "",
  client: "",
  phone: "",
  price: "",
  barber: "",
};

export type ClientTypes = {
  id: string;
  createdDate: string;
  createdTime: string;
  status: string;
  client: string;
  phone: string;
  price: string;
  barber: string;
};

export type ClientsTypes = {
  clients: ClientTypes[];
};

export type FilterClientSearchTypes = keyof typeof clientTemplate;
