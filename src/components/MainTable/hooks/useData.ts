// Core
import { useEffect } from "react";
import { useStore } from "effector-react";

// Models
import { $clientsGetStatus, fetchClientsFx } from "../../../models/clients";

export const useData = () => {
  const { loading, error, data } = useStore($clientsGetStatus);

  useEffect(() => {
    fetchClientsFx();
  }, []);

  return {
    loading,
    error,
    data,
  };
};
