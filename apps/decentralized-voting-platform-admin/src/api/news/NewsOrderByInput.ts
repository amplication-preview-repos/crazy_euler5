import { SortOrder } from "../../util/SortOrder";

export type NewsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
