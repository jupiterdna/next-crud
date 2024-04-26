import { redirect } from "next/navigation";
import moment from "moment";

import { createClient } from "@/utils/supabase/server";
import { logout } from "../auth/logout";
import { getUser } from "@/utils/users";
import PropertyForm from "./components/PropertyForm";
import Link from "next/link";
import EditButton from "./components/DeleteButton";

export default async function PrivatePage() {
  const supabase = createClient();

  const user = await getUser();


  const { data: peroperty, error: err } = await supabase
    .from("tbl_properties")
    .select(`*, tbl_users(fullname)`);

  const createProperties = async (formData: FormData) => {
      'use server'
      const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      }
  }

  return (
    <div className="h-screen">
      <div className="flex flex-row h-full">
        <div className="w-[300px] bg-gray-700 h-full">
          <div className="text-xl font-bold mb-4 p-4">Sidebar</div>
          <div>
            <ul>
              <li className="p-2 py-3  text-white">Dashboard</li>
              <li className="p-2 py-3 bg-gray-100 text-gray-700">Properties</li>
              <li className="p-2 py-3  text-white">Users</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-xl">Properties</h1>
            <div>
              <form action="">
                <button
                  className="bg-orange-500 p-1 rounded-full px-4"
                  formAction={logout}
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
          <main className="py-4 border-t border-gray-600 mt-5">
            <div>
            <Link href="?modal=true">
                    <button type="button" className="text-white p-2 text-sm bg-orange-500  rounded-lg">Add Property</button>
                </Link>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Property ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Property Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        User ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Added By
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Created At
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {peroperty?.map((property: any) => {
                      return (
                        <tr
                          key={property.id}
                          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {property.id}
                          </th>
                          <td className="px-6 py-4">
                            {property.property_name}
                          </td>
                          <td className="px-6 py-4">
                            {property.user_id}
                          </td>
                          <td className="px-6 py-4">
                            {property.tbl_users.fullname}
                          </td>
                          <td className="px-6 py-4">
                            {moment(property.created_at).fromNow()}
                          </td>
                          <td className="px-6 py-4">
                            <form action="" className="flex flex-row items-center gap-x-2">
                              <button className="text-blue-400">Edit</button>
                              <EditButton id={property.id}/>
                            </form>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <PropertyForm />
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* <p>Hello {data.user.email}</p>
    {userdata[0].fullname}
    <form action="">
     <button formAction={logout}>logout account</button>
    </form> */}
    </div>
  );
}
