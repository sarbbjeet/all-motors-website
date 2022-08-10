//import dynamic from "next/dynamic";
import AdminWrapper from "../../components/admin/AdminWrapper";
import Header from "../../components/admin/Header";
import Services from "../../components/admin/Services";

// const App = dynamic(() => import("../../admin/App"), { ssr: false });
export default function index() {
  // const { user, loading } = useAuth();
  // console.log(user?.data);
  return (
    <AdminWrapper>
      <div className="container py-3">
        <Services />
      </div>
    </AdminWrapper>
  );
}
