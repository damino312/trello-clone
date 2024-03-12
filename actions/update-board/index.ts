"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { ACTION, Board, ENTITY_TYPE } from "@prisma/client";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { UpdateBoard } from "./schema";
import { createAuditLog } from "@/lib/create-audit-log";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();
  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }
  const { title, id } = data;
  let board;
  try {
    board = await db.board.update({
      where: {
        id,
        orgId,
      },
      data: {
        title,
      },
    });
    await createAuditLog({
      entityTitle: board.title,
      action: ACTION.UPDATE,
      entityType: ENTITY_TYPE.LIST,
      entityId: board.id,
    });
  } catch (error) {
    return {
      error: "Не удалось обновить",
    };
  }
  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const updateBoard = createSafeAction(UpdateBoard, handler);
