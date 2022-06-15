type EventNotificationInf = {
  topic: string;
  message: string;
  employeeIds: string[];
};
export type Events = {
  notification: EventNotificationInf;
};
export type EventTypes = keyof Events;
