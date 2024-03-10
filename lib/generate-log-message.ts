import { AuditLog, ACTION, ENTITY_TYPE } from "@prisma/client";

export const generateLogMessage = (log: AuditLog) => {
  const { action, entityTitle, entityType } = log;
  let rusName;

  switch (entityType) {
    case ENTITY_TYPE.CARD:
      rusName = "карточку";
      break;
    case ENTITY_TYPE.BOARD:
      rusName = "борд";
      break;
    case ENTITY_TYPE.LIST:
      rusName = "список";
      break;
    default:
      break;
  }

  switch (action) {
    case ACTION.CREATE:
      return "Создал " + rusName + ' "' + entityTitle + '"';
    case ACTION.UPDATE:
      return "Обновил " + rusName + ' "' + entityTitle + '"';
    case ACTION.DELETE:
      return "Удалил " + rusName + ' "' + entityTitle + '"';
    default:
      return (
        "Неизвестное действие " +
        entityType.toLowerCase() +
        ' "' +
        entityTitle +
        '"'
      );
  }
};
