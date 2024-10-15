import { headers } from "next/headers";

export default function AdminPage() {
  return <p>admin page: {headers().get("user-agent")}</p>;
}
