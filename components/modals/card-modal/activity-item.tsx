import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { generateLogMessage } from "@/lib/generate-log-message";
import { AuditLog } from "@prisma/client";
import { format } from "date-fns";

interface ActivityItemProps {
  item: AuditLog;
}

export const ActivityItem = ({ item }: ActivityItemProps) => {
  return (
    <li className="flex items-center gap-x-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={item.userImage} />
      </Avatar>
      <div>
        <p className="text-sm text-muted-foreground">
          <span>{item.userName}</span> {generateLogMessage(item)}
        </p>
        <p className="text-sx text-muted-foreground">
          {format(new Date(item.createdAt), "dd.MM.yyyy 'в' HH:mm")}
        </p>
      </div>
    </li>
  );
};
