import { DateTime } from "luxon";

const dateUtil = {
  epochToTime(epoch: number, zone: string) {
    const dateTime = DateTime.fromSeconds(epoch, { zone });
    return dateTime.toFormat("h:mm a");
  },

  epochToHour(epoch: number, zone: string) {
    const dateTime = DateTime.fromSeconds(epoch, { zone });
    return dateTime.toFormat("h a");
  },

  epochToDate(epoch: number, zone: string) {
    const dateTime = DateTime.fromSeconds(epoch, { zone });
    return dateTime.toFormat("dd, LLLL yyyy");
  },
};

export default dateUtil;
