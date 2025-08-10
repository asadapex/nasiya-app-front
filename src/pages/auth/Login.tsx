import { Button, Input } from "antd";
import { Logo } from "../../assets/images";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import { LoginInputIcon, PasswordIcon } from "../../assets/icons";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { instance } from "../../hooks/instance";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [login, setLogin] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [_cookies, setCookies] = useCookies(["token"]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    instance.post('/seller/login-seller', { login, password }).then(res => {
      setCookies('token', res.data.token);
      location.pathname = '/';
    }).catch(err => {
      if (err.response.status === 404) {
        toast.error('User not found')
      }
      console.error('Login failed:', err);
    });
  }


  return (
    <>
      <Toaster />
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
          onSubmit={handleSubmit}
          autoComplete="off"
          className="pt-[38px] space-y-[24px] pb-[72px] relative"
        >
          <Input
            onChange={(e) => setLogin(e.target.value)}
            prefix={<LoginInputIcon />}
            placeholder="Login"
            allowClear
            className="w-[343px] !h-[48px] !rounded-[12px] !text-[14px]"
            name="login"
          />
          <Input.Password
            onChange={(e) => setPassword(e.target.value)}
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

          <div className="pt-[40px]">
            <Button
              type="primary"
              htmlType="submit"
              className="w-[363px] !h-[49px] !rounded-[12px] !text-[18px]"
            >
              Kirish
            </Button>
          </div>
        </form>




      </div>
    </>
  );
};

export default Login;
