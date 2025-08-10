import { useNavigate } from "react-router-dom"
import { useState } from "react";
import type dayjs from "dayjs";
import Heading from "../../components/Heading";
import CustomCalendar from "../../components/CustomCalendar";
import { ArrowLeft } from "lucide-react";

const Calendar = () => {
    const [nowDate, setNowDate] = useState<dayjs.Dayjs | undefined>();
    const navigate = useNavigate()

    return (
        <>
            <div className="containers bg-white h-[100vh]">
                <div className="w-[50%] flex justify-between">
                    <button className="cursor-pointer" onClick={() => navigate(-1)}> <ArrowLeft /> </button>
                    <Heading extraClass="!text-[18px]" text="Kalendar" />
                </div>
                <CustomCalendar totalForMonth={0} setNowDate={setNowDate} nowDate={nowDate} />
            </div>
            {/* <div className="p-4 mt-[14px] bg-[#F6F6F6] rounded-t-[16px]">
                <div className="containers">
                    <Text extraClass="!mb-[20px]" text={`${nowDate && (nowDate as any).$D} {nowDate && (nowDate as any).$M} kuni to‘lov kutilmoqda`} />
                    <div>
                        {isLoading ? "-----" : debtsList?.unpaidForDay.map((item: any) => (
                            <div key={item.id} className="bg-[#FFFFFF] p-[14px] rounded-[16px]">
                                <Heading extraClass="!font-semibold" text={item.Debt.Debtor.name} />
                                <Text extraClass="!font-normal" text={`UZS ${item.amount}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Calendar