const dayjs = useDayjs();
const localTZ = dayjs.tz.guess();
export const formatDate = (date: string | undefined) =>
  dayjs(date).tz(localTZ).format("dd, DD MMMM YYYY HH:mm");
