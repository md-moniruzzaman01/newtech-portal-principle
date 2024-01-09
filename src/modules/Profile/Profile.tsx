"use client";

import { UserAtom } from "@config/constants";
import { useAtom } from "jotai";
import Image from "next/image";

const Profile = () => {
  const [User] = useAtom(UserAtom);
  return (
    <div className="">
      <div className="flex justify-center  my-20">
        <div className="relative max-w-[200px]">
          <Image
            src={`${User.image}`}
            width={72}
            height={16}
            alt="user photo"
          />
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <h1 className="text-2xl font-[600] text-center bg-slate-300  max-w-[400px] px-4 py-1 mb-5">
          Details
        </h1>
        <div className="text-lg space-y-2 bg-slate-200 rounded-md w-full max-w-[500px] p-4">
          <p>
            <span className="font-semibold">Full name :</span>
            <span> {User.full_name}</span>
          </p>
          <p>
            <span className="font-semibold">user name :</span>
            <span> {User.user_name}</span>
          </p>
          <p>
            <span className="font-semibold">Contact No. :</span>
            <span>{User.contact_number}</span>
          </p>
          <p>
            <span className="font-semibold">Email :</span>
            <span> {User.email}</span>
          </p>
          <p>
            <span className="font-semibold">Company :</span>
            <span> {User.asp}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
