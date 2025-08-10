import { useEffect, useState } from "react";
import Text from "../../components/Text";
import { instance } from "../../hooks/instance";
import { useCookies } from "react-cookie";
import defaultImg from '../../assets/images/defaultimg.png'
import { Button } from "antd";
import { CalendarIcon } from "../../assets/icons";
import Heading from "../../components/Heading";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { formatPrice } from "../../hooks/formatPrice";

const Home = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [eye, setEye] = useState<boolean>(false);
  const [debtorCount, setDebtorCount] = useState<number>(0);
  const [creditSum, setCreditSum] = useState<number>(0);
  const [cookies] = useCookies(["token"]);
  useEffect(() => {
    instance.get('/seller/profile', { headers: { Authorization: `Bearer ${cookies.token}` } }).then(res => {
      setName(res.data.name)
      setImage(res.data.image)
      setDebtorCount(res.data.debtorCount)
      setCreditSum(res.data.creditSum)
    }).catch(err => {
      console.error(err)
    })
  })

  return (
    <div className="containers bg-white h-[100vh]">
      <div>
        <div className="pt-[29px] flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <img src={image ? image : defaultImg} alt="profile image" className="rounded-full" width={40} height={40} />
            <Text text={name} />
          </div>
          <Button size="large" className="!px-[10px] !bg-[#F5F5F5]" onClick={() => location.pathname = '/calendar'}><CalendarIcon /></Button>
        </div>

        <div className="justify-center items-center py-[35px] relative">
          <div className="bg-[#30AF49] rounded-[20px] py-[18px] px-[89px]">
            <Heading text={eye ? "******" : formatPrice(creditSum) + " so'm"} extraClass="text-center !text-[20px] text-white" />
            <Text text="Umumiy nasiya:" extraClass="text-[#F6F6F6B2] text-center" />
          </div>

          <div onClick={() => setEye(!eye)}>
            {eye ? <EyeOutlined className="!cursor-pointer !text-white absolute right-[29px] top-[73px] !w-[22px] !h-[22px]" /> : <EyeInvisibleOutlined className="!cursor-pointer !text-white absolute right-[29px] top-[73px] !w-[22px] !h-[22px]" />}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="py-[16px] pl-[16px] pr-[45px] space-y-[32px] border-[1px] border-[#ECECEC] rounded-[16px] w-[168px]">
            <Text text="Kechiktirilgan to‘lovlar" extraClass="!font-semibold w-[107px]" />
            <p className="text-red-500 font-semibold">0</p>
          </div>

          <div className="py-[16px] pl-[16px] pr-[45px] space-y-[32px] border-[1px] border-[#ECECEC] rounded-[16px] w-[168px]">
            <Text text="Mijozlar soni" extraClass="!font-semibold w-[77px]" />
            <p className="text-[#30AF49] font-semibold">{debtorCount}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
