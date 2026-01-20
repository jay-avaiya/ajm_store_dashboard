import { ImUsers } from "react-icons/im";
import NotificationBox from "../../../components/NotificationBox";
import FilterBox from "../../../components/FilterBox";
import NotificationSetting from "../../../components/NotificationSetting";

const Setting = () => {
  return (
    <div className="flex-1 flex justify-between pt-8 min-h-0 h-full overflow-hidden">
      {/* setting content */}
      <div className="w-full max-w-[980px] h-full min-h-0 overflow-y-auto overflow-x-hidden no-scrollbar no-scroll-chain pr-2 pb-4">
        <div className="flex items-center gap-x-3">
          <ImUsers className="size-6" />
          <span className="text-3xl">Settings</span>
        </div>

        <div className="w-full h-[1px] border border-[#C0C0C0] my-4"></div>

        <div className="flex flex-col gap-y-5 my-4">
          {/* General Setting */}
          <div className="w-full min-h-[320px] border border-[#B0B0B0] bg-white rounded-3xl py-3">
            <h3 className="text-[32px] px-11">General Settings</h3>

            <div className="w-full h-[1px] border-b border-[#C0C0C0] my-1"></div>

            <div className="px-8 mt-8">
              <div className="flex items-center gap-x-16">
                {/* store name */}
                <div className="flex flex-col gap-y-2">
                  <p className="text-2xl">Store Name</p>
                  <input
                    type="text"
                    placeholder="01"
                    disabled
                    className="border border-[#5C5C5C] outline-none rounded-2xl text-center text-[#5C5C5C] placeholder:text-[#5C5C5C] text-xl py-3 w-full max-w-[210px] cursor-not-allowed"
                  />
                </div>

                {/* Role */}
                <div className="flex flex-col gap-y-2">
                  <p className="text-2xl">Default Language</p>
                  <input
                    type="text"
                    placeholder="English"
                    disabled
                    className="border border-[#5C5C5C] outline-none rounded-2xl text-center text-[#5C5C5C] placeholder:text-[#5C5C5C] text-xl py-3 w-full max-w-[210px] cursor-not-allowed"
                  />
                </div>

                {/* time zone */}
                <div className="flex flex-col gap-y-2">
                  <p className="text-2xl">Timezone</p>
                  <input
                    type="text"
                    placeholder="English"
                    disabled
                    className="border border-[#5C5C5C] outline-none rounded-2xl text-center text-[#5C5C5C] placeholder:text-[#5C5C5C] text-xl py-3 w-full max-w-[210px] cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="mt-8">
                <div className="flex flex-col gap-y-2">
                  <p className="text-2xl">Currency</p>
                  <input
                    type="text"
                    placeholder="INR ₹"
                    disabled
                    className="border border-[#5C5C5C] outline-none rounded-2xl text-center text-[#5C5C5C] placeholder:text-[#5C5C5C] text-xl py-3 w-full max-w-[210px] cursor-not-allowed"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Admin Setting */}
          <div className="w-full min-h-[320px] border border-[#B0B0B0] bg-white rounded-3xl py-3">
            <h3 className="text-[32px] px-11">Admin Settings</h3>

            <div className="w-full h-[1px] border-b border-[#C0C0C0] my-1"></div>

            <div className="px-8 mt-8">
              <div className="flex  justify-between">
                {/* Admin name */}
                <div className="flex flex-col gap-y-5">
                  <p className="text-2xl">Admin name</p>
                  <input
                    type="text"
                    placeholder="Rakesh"
                    disabled
                    className="border border-[#5C5C5C] outline-none rounded-2xl text-center text-[#5C5C5C] placeholder:text-[#5C5C5C] text-xl py-3 w-full max-w-[210px] cursor-not-allowed"
                  />
                </div>

                {/* Role */}
                <div className="flex flex-col gap-y-5">
                  <p className="text-2xl">Role</p>
                  <input
                    type="text"
                    placeholder="Editor"
                    disabled
                    className="border border-[#5C5C5C] outline-none rounded-2xl text-center text-[#5C5C5C] placeholder:text-[#5C5C5C] text-xl py-3 w-full max-w-[210px] cursor-not-allowed"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-y-5">
                  <p className="text-2xl">Password</p>
                  <input
                    type="password"
                    placeholder="********"
                    disabled
                    className="border border-[#5C5C5C] outline-none rounded-2xl text-center text-[#5C5C5C] placeholder:text-[#5C5C5C] text-xl py-3 w-full max-w-[210px] cursor-not-allowed"
                  />
                  <p className="text-[16px] underline text-[#5C5C5C] underline-offset-2 cursor-pointer">
                    Change Password
                  </p>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-y-5">
                  <p className="text-2xl">Email</p>
                  <input
                    type="email"
                    placeholder="abc@gmail.com"
                    disabled
                    className="border border-[#5C5C5C] outline-none rounded-2xl text-center text-[#5C5C5C] placeholder:text-[#5C5C5C] text-xl py-3 w-full max-w-[230px] cursor-not-allowed"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Settings */}
          <div className="w-full min-h-[320px] border border-[#B0B0B0] bg-white rounded-3xl py-3">
            <h3 className="text-[32px] px-11">Payment Settings</h3>

            <div className="w-full h-[1px] border-b border-[#C0C0C0] my-1"></div>

            <div className="px-8 mt-8">
              <div className="flex items-center gap-x-16">
                {/* Defult Gateway */}
                <div className="flex flex-col gap-y-5">
                  <p className="text-2xl">Default Gateway</p>
                  <input
                    type="text"
                    placeholder="Razorpay"
                    disabled
                    className="border border-[#5C5C5C] outline-none rounded-2xl text-center text-[#5C5C5C] placeholder:text-[#5C5C5C] text-xl py-3 w-full max-w-[210px] cursor-not-allowed"
                  />
                </div>

                {/* Tax/GST Verification */}
                <div className="flex flex-col gap-y-5">
                  <p className="text-2xl">Tax/GST Verification</p>
                  <input
                    type="text"
                    placeholder="Razorpay"
                    disabled
                    className="border border-[#5C5C5C] outline-none rounded-2xl text-center text-[#5C5C5C] placeholder:text-[#5C5C5C] text-xl py-3 w-full max-w-[210px] cursor-not-allowed"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Data & Backup */}
          <div className="w-full min-h-[320px] border border-[#B0B0B0] bg-white rounded-3xl py-3">
            <h3 className="text-[32px] px-11">Data & Backup</h3>

            <div className="w-full h-[1px] border-b border-[#C0C0C0] my-1"></div>

            <div className="px-8 mt-8">
              <div className="flex items-center gap-x-16">
                {/* Download Order Data */}
                <div className="flex flex-col gap-y-5">
                  <p className="text-2xl">Download Order Data</p>
                  <input
                    type="text"
                    placeholder="Excel Files"
                    disabled
                    className="border border-[#5C5C5C] outline-none rounded-2xl text-center text-[#5C5C5C] placeholder:text-[#5C5C5C] text-xl py-3 w-full max-w-[210px] cursor-not-allowed"
                  />
                </div>

                {/* Tax/GST Verification */}
                <div className="flex flex-col gap-y-5">
                  <p className="text-2xl">Customer Data Export</p>
                  <input
                    type="text"
                    placeholder="CSV"
                    disabled
                    className="border border-[#5C5C5C] outline-none rounded-2xl text-center text-[#5C5C5C] placeholder:text-[#5C5C5C] text-xl py-3 w-full max-w-[210px] cursor-not-allowed"
                  />
                </div>

                {/* Auto Backup */}
                <div className="flex flex-col gap-y-5">
                  <p className="text-2xl">Auto Backup</p>
                  <input
                    type="text"
                    placeholder="Weekly"
                    disabled
                    className="border border-[#5C5C5C] outline-none rounded-2xl text-center text-[#5C5C5C] placeholder:text-[#5C5C5C] text-xl py-3 w-full max-w-[210px] cursor-not-allowed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* left content */}
      <div className="flex flex-col px-4 gap-y-4 h-full min-h-0 max-w-[320px] shrink-0 overflow-y-auto overflow-x-hidden no-scrollbar no-scroll-chain pb-4 mr-2">
        <NotificationBox />
        <FilterBox />
        <NotificationSetting />
      </div>
    </div>
  );
};

export default Setting;
