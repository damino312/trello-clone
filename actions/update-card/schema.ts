import { z } from "zod";

export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z
      .string({
        required_error: "Описание обязательно",
        invalid_type_error: "Описание обязательно",
      })
      .min(3, {
        message: "Описание слишком короткое",
      })
  ),
  title: z.optional(
    z
      .string({
        required_error: "Название обязательно",
        invalid_type_error: "Название обязательно",
      })
      .min(3, {
        message: "Название слишком короткое",
      })
  ),

  id: z.string(),
});
