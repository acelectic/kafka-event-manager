type EventNotificationInf = {
  topic: string;
  message: string;
  employeeIds: string[];
};
export type Events = {
  notification: EventNotificationInf;
};
export type EventTypes = keyof Events;

export type CreateEventFunction = <
  Type extends EventTypes,
  Payload extends Events[Type],
  R
>(
  type: Type,
  payload: Payload
) => Promise<R>;
