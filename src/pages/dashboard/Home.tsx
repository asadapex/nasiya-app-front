import { Button } from "antd"
import { CalendarIcon, CashIcon, EyeIcon, PlusIcon } from "../../assets/icons"
import { Heading, PageLoading, Text } from "../../components"
import { useState } from "react"
import { FormatNumber } from "../../hooks/FormatNumber"
import { useQuery } from "@tanstack/react-query"
import { instance } from "../../hooks/instance"
import { useCookies } from "react-cookie"
import { API } from "../../hooks/getEnv"
import type { SellerType } from "../../@types/SellerType"
import { AvatarImg } from "../../assets/images"
import { useNavigate } from "react-router-dom"
import { PATH } from "../../hooks/Path"

const Home = () => {
    const navigate = useNavigate()
    const [showLimit, setShowLimit] = useState<boolean>(false)
    const [cookies, _setCookie, removeCookies] = useCookies(["token"])
    const { data: sellerData2, isLoading } = useQuery<SellerType>({
        queryKey: ["get-seller"],
        queryFn: () =>
            instance().get("/seller/profile", {
                headers: { Authorization: `Bearer ${cookies.token}` },
            }).then(res => res.data).catch(err => {
                if (err.response.status == 401) {
                    removeCookies("token")
                    location.pathname = "/"
                }
            })
    })

    return (
        <div className="containers !pt-[30px]">
            <div className="flex items-center justify-between mb-[38px]">
                <div className="flex gap-[15px] items-center">
                    <img
                        className="rounded-full"
                        src={`${sellerData2?.img ? `${API}${sellerData2.img}` : AvatarImg}`}
                        alt="Avatar Img"
                        width={40}
                        height={40}
                    />
                    <strong className="font-semibold text-[16px]">
                        {isLoading ? <PageLoading /> : sellerData2?.name}
                    </strong>
                </div>
                <Button onClick={() => navigate(PATH.calendar)} className="!bg-[#F5F5F5] hover:!border-[#735CD8] cursor-pointer calendar-button duration-300 !w-[40px] flex items-center justify-center !p-0 !rounded-[12px] !h-[40px]">
                    <CalendarIcon />
                </Button>
            </div>

            <div className="rounded-[20px] relative bg-[#30AF49] mb-[31px] py-[18px] text-center">
                <strong className="font-bold text-white mb-[14px]">
                    {showLimit ? "*******" : isLoading ? "------" : FormatNumber(sellerData2?.creditSum ? sellerData2.creditSum : "")} so'm
                </strong>
                <Text classList="text-[14px] text-white">Umumiy nasiya:</Text>
                <button
                    onClick={() => setShowLimit(!showLimit)}
                    className="absolute cursor-pointer duration-300 hover:scale-[1.2] top-0 bottom-0 my-auto right-[22px]"
                >
                    <EyeIcon />
                </button>
            </div>

            <div className="flex justify-between mb-[40px]">
                <div className="p-[16px] w-[48%] border-[1px] border-[#ECECEC] rounded-[16px]">
                    <Text classList="text-[14px] !mb-[32px]">Kechiktirilgan <br /> to'lovlar</Text>
                    <Text classList="text-[#F94D4D] text-[18px]">
                        {isLoading ? <PageLoading /> : sellerData2?.overdueDebts ? sellerData2?.overdueDebts : "0"}
                    </Text>
                </div>
                <div className="p-[16px] w-[48%] border-[1px] border-[#ECECEC] rounded-[16px]">
                    <Text classList="text-[14px] !mb-[32px]">Mijozlar <br /> soni</Text>
                    <Text classList="text-[#010101] text-green-600 text-[18px]">
                        {isLoading ? <PageLoading /> : sellerData2?.debtorCount ? sellerData2?.debtorCount : "0"}
                    </Text>
                </div>
            </div>

            <Heading tag="h2" classList="text-[18px] !mb-[26px]">Hamyoningiz</Heading>
            <div className="flex items-center justify-between mb-[28px]">
                <div className="flex items-center gap-[12px]">
                    <button className="w-[48px] h-[48px] bg-[#735CD81A] rounded-full flex items-center justify-center">
                        <CashIcon />
                    </button>
                    <div className="flex flex-col">
                        <span className="font-medium text-[13px]">Hisobingizda</span>
                        <strong className="font-bold text-[18px]">
                            {isLoading ? <PageLoading /> : FormatNumber(sellerData2?.balance ? sellerData2.balance : "0")} so'm
                        </strong>
                    </div>
                </div>
                <button className="w-[36px] h-[36px] cursor-pointer bg-[#3478F7] rounded-full flex items-center justify-center">
                    <PlusIcon />
                </button>
            </div>

            <div className="flex justify-between items-center">
                <Text classList="text-[14px] !font-medium">Bu oy uchun to'lov:</Text>
                <Text classList="text-[14px] !font-semibold text-[#30AFA9]">To'lov qilingan</Text>
            </div>
        </div>
    )
}

export default Home
