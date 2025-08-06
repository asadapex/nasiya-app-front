import { Button, Input } from "antd";
import { Logo } from "../../assets/images";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import { LoginInputIcon, PasswordIcon } from "../../assets/icons";

const Login = () => {
  return (
    <div className="containers bg-white h-[100vh] relative">
      <img
        src={Logo}
        alt="Logo image"
        width={40}
        height={40}
        className="mt-[90px] page-loading-img"
      />

      <div className="mt-[32px] space-y-[12px]">
        <Heading text="Dasturga kirish" />
        <Text
          text="Iltimos, tizimga kirish uchun login va parolingizni kiriting."
          extraClass="text-[#666666] w-[313px]"
        />
      </div>

      <form
        autoComplete="off"
        className="pt-[38px] space-y-[24px] pb-[72px] relative"
      >
        <Input
          prefix={<LoginInputIcon />}
          placeholder="Login"
          allowClear
          className="w-[343px] !h-[48px] !rounded-[12px] !text-[14px]"
          name="login"
        />
        <Input.Password
          prefix={<PasswordIcon />}
          placeholder="Parol"
          allowClear
          className="w-[343px] !h-[48px] !rounded-[12px] !text-[14px]"
          name="password"
        />

        <a
          href=""
          className="text-[#3478F7] border-b-[1px] border-[#3478F7] text-[13px] right-0 top-[170px] absolute"
        >
          Parolni unutdingizmi?
        </a>
      </form>

      <Button
        type="primary"
        className="w-[363px] !h-[49px] !rounded-[12px] !text-[18px]"
      >
        Kirish
      </Button>

      <div className="bottom-5 absolute">
        <Text text="Hisobingiz yo'q bo'lsa, tizimga kirish huquqini olish uchun do'kon administratori bilan bog'laning." />
      </div>
    </div>
  );
};

export default Login;
