import Form from "@/app/ui/Form";

const AuthCard = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {/* box */}
      <div className="rounded-2xl shadow-xl p-10 border border-gray-100">
        {/* text */}
        <div className="text-center">
          <h1 className="text-center text-4xl font-bold text-fuchsia-600">
            Snap URL
          </h1>
          {/* dynamic text for sign in sign up */}
          <h1 className="mt-1 text-gray-600 text-xl">
            Sign in to your account
          </h1>
        </div>

        {/* form */}

        <Form />
      </div>
    </div>
  );
};

export default AuthCard;
