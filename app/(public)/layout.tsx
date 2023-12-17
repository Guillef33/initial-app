import { DashboardLink } from "@/components/dashboard/dashboardLinks";
import { dashboardItems } from "@/components/dashboard/dashboardItems";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <div
          id="menu"
          className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
        >
          <div id="logo" className="my-4 px-6">
            <h1 className="text-lg md:text-2xl font-bold text-white">
              Dash<span className="text-blue-500">8</span>.
            </h1>
            <p className="text-slate-500 text-sm">
              Manage your actions and activities
            </p>
          </div>
          <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
              <span>
                <img
                  className="rounded-full w-8 h-8"
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                  alt=""
                />
              </span>
              <span className="text-sm md:text-base font-bold">
                Gullermo Flores
              </span>
            </a>
          </div>
          <div id="nav" className="w-full px-6">
            {dashboardItems.map((DashboardItem) => (
              <>
                <DashboardLink
                  key={DashboardItem.path}
                  path={DashboardItem.path}
                  text={DashboardItem.text}
                  subtitle={DashboardItem.subtitle}
                  icon={DashboardItem.icon}
                />
              </>
            ))}
          </div>
        </div>
        <div className="p-2 text-slate-900">{children}</div>
      </div>
    </div>
  );
}
