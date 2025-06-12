import { DateTime } from "luxon";

const dateUtil = {
  epochToTime(epoch: number) {
    const dateTime = DateTime.fromSeconds(epoch);
    return dateTime.toFormat("h:mm a");
  },
};

export default dateUtil;
