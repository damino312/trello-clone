import { ActivityItem } from "@/components/modals/card-modal/activity-item";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const ActivityList = async () => {
  const { orgId } = auth();

  if (!orgId) {
    return redirect("/select-org");
  }

  const auditLogs = await db.auditLog.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <ol className="space-y-4 mt-4">
      <p className="hidden last:block text-sx text-center">
        Не найдено активности в этой организации
      </p>
      {auditLogs.map((log) => (
        <ActivityItem key={log.id} item={log} />
      ))}
    </ol>
  );
};

ActivityList.Skeleton = function SkeletonActivityList() {
  return (
    <ol className="space-y-4 mt-4">
      <Skeleton className="w-[80%] h-14" />
      <Skeleton className="w-[70%] h-14" />
      <Skeleton className="w-[80%] h-14" />
      <Skeleton className="w-[75%] h-14" />
      <Skeleton className="w-[90%] h-14" />
    </ol>
  );
};
