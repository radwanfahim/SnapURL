"use client";

import { postUrlData } from "@/app/_lib/api/shorturls";
import { getUser } from "@/app/_lib/getUser";
import Button from "@/app/components/_ui/Button";
import Input from "@/app/components/_ui/Input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { toast } from "react-toastify";

const URLForm = () => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const email = user?.email;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postUrlData,
    onSuccess: (data) => {
      toast.success(`Short code ${data?.shortCode}`, {
        position: "top-center",
      });

      queryClient.setQueryData(
        ["urls", data.email],
        (oldData: (typeof data)[] = []) => [...oldData, data]
      );
    },
    onError: (error: Error) => {
      console.log(error);

      const userLimit = error.message.includes("403");
      const exist = error.message.includes("409");

      if (userLimit === true) {
        toast.error(
          "You have reached the maximum URL limit. Please upgrade to continue.",
          {
            position: "top-center",
          }
        );
      }
      if (exist === true) {
        toast.error("URL already exist", {
          position: "top-center",
        });
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const url = formData.get("url") as string;

    mutation.mutate({ url, email });

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 ">
      <fieldset className="flex justify-center gap-3 items-center">
        {/* url input */}
        <Input
          text={"Paste your long URL here..."}
          type={"text"}
          name={"url"}
          customClass="w-2/5 px-4 py-3 border border-gray-300"
        />

        <Button
          isNewUser={""}
          icon={<AiTwotoneThunderbolt className="" />}
          text={<span>Shorten Now</span>}
          customClass="flex items-center gap-2 px-4 py-3"
          onClick={() => undefined}
        />
      </fieldset>
    </form>
  );
};

export default URLForm;
