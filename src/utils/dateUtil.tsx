import { DateTime } from "luxon";

const dateUtil = {
  epochToTime(epoch: number) {
    const dateTime = DateTime.fromSeconds(epoch);
    return dateTime.toFormat("h:mm a");
  },

  epochToDate(epoch: number) {
    const dateTime = DateTime.fromSeconds(epoch);
    return dateTime.toFormat("dd, LLLL yyyy");
  },
};

export default dateUtil;
