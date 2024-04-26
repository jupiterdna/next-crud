import { redirect } from "next/navigation";
import moment from "moment";

import { createClient } from "@/utils/supabase/server";
import { logout } from "../auth/logout";
import { getUser } from "@/utils/users";

export default async function PrivatePage() {
  const supabase = createClient();

  const user = await getUser();

  console.log("user", user)

  const { data: peroperty, error: err } = await supabase
    .from("tbl_properties")
    .select();
  

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
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                            {moment(property.created_at).fromNow()}
                          </td>
                          <td className="px-6 py-4">
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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
