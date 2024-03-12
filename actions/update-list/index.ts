"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { ACTION, Board, ENTITY_TYPE } from "@prisma/client";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { UpdateList } from "./schema";
import { createAuditLog } from "@/lib/create-audit-log";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();
  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }
  const { title, id, boardId } = data;
  let list;
  try {
    list = await db.list.update({
      where: {
        id,
        boardId,
        board: {
          orgId,
        },
      },
      data: {
        title,
      },
    });
    await createAuditLog({
      entityTitle: list.title,
      action: ACTION.UPDATE,
      entityType: ENTITY_TYPE.LIST,
      entityId: list.id,
    });
  } catch (error) {
    return {
      error: "Не удалось обновить",
    };
  }
  revalidatePath(`/board/${boardId}`);
  return { data: list };
};

export const updateList = createSafeAction(UpdateList, handler);
