import { Election as TElection } from "../api/election/Election";

export const ELECTION_TITLE_FIELD = "id";

export const ElectionTitle = (record: TElection): string => {
  return record.id?.toString() || String(record.id);
};
