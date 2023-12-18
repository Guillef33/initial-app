import UserInfo from "@/components/auth/UserInfo";
import LogoutButton from "@/components/auth/Buttons/SignOutButton";

function PerfilPage() {
  return (
    <div>
      <h2>Esta es la pagina de tu usuario</h2>
      <LogoutButton />
      <UserInfo />
    </div>
  );
}

export default PerfilPage;
