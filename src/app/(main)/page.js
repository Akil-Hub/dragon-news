
import { redirect } from "next/navigation";


export default async function Home() {
  const default_category_id = "01";
  return redirect(`/category/${default_category_id}`);
}
