import { z } from "zod";

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: "Название обязательно",
      invalid_type_error: "Название обязательно",
    })
    .min(3, {
      message: "Название слишком короткое",
    }),
  image: z.string({
    required_error: "Картинка обязательна",
    invalid_type_error: "Картинка обязательна",
  }),
});
