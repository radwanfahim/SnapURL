"use client";

import Button from "@/app/components/_ui/Button";
import Input from "@/app/components/_ui/Input";
import { AiTwotoneThunderbolt } from "react-icons/ai";

const URLForm = () => {
  return (
    <form className="mt-6 ">
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
