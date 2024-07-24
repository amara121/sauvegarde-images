import { FormSignup } from "@/components/auth-component/FormSignup";
// import { toast } from "@/components/ui/use-toast";
// import { ToastAction } from "@/components/ui/toast";

const Signup = async () => {

  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center px-9 w-full">
        <div className="w-full flex flex-col text-gray-500 gap-3">
          <span className="text-4xl font-bold text-center">
            Créer votre compte
          </span>
          <p className=" text-xs text-center">
            Entrez vos informations pour vous inscrire
          </p>

          <FormSignup />
        </div>
      </div>
    </div>
  );
};

export default Signup;
