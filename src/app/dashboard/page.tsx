import { headers } from "next/headers";


export default function DashboardPage() {
  return <p>admin page: {String(headers())}</p>;
}
