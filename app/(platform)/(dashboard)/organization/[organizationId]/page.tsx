import { db } from "@/lib/db";
import { Sidebar } from "../../_components/sidebar";
import SettingsPage from "./settings/page";
import { create } from "@/actions/create-dashboard";
import { Form } from "./form";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div>
      <Form />
      {boards.map((el) => (
        <div key={el.id}>{el.title}</div>
      ))}
    </div>
  );
};

export default OrganizationIdPage;
