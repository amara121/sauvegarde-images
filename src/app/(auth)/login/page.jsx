import { FormLogin } from "@/components/auth-component/FormLogin";

const Login = () => {

  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center px-9 w-full">
        <div className="w-full flex flex-col text-gray-500 gap-3">
          <span className="text-3xl font-bold text-center">
            Connectez-vous à votre compte
          </span>
          <p className=" text-xs text-center">
            Entrez vos informations pour vous connecter
          </p>

          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
