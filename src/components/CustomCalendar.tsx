import React, { useEffect, type Dispatch, type SetStateAction } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { Button, Calendar } from 'antd';
import dayLocaleData from 'dayjs/plugin/localeData';
import Text from './Text';
import Heading from './Heading';
import { ArrowLeft, ArrowRight } from 'lucide-react';
dayjs.extend(dayLocaleData);

const wrapperStyle: React.CSSProperties = {
    width: "100%",
};

const CustomCalendar: React.FC<{ totalForMonth: number | string, setNowDate: Dispatch<SetStateAction<dayjs.Dayjs | undefined>>, nowDate: dayjs.Dayjs | undefined }> = ({ nowDate, setNowDate, totalForMonth }) => {


    function handleChooseDay(value: any) {
        setNowDate(value);
    }
    function handleChangeMonth(value: dayjs.Dayjs, onChange: (date: dayjs.Dayjs) => void) {
        const newMonth = value.add(1, 'month');
        onChange(newMonth);
    }

    return (
        <div style={wrapperStyle}>
            <Calendar
                onChange={handleChooseDay}
                fullscreen={false}
                value={nowDate}
                headerRender={({ value, onChange }) => {
                    useEffect(() => {
                        setNowDate(value)
                    }, [])
                    return (
                        <>
                            <div className="flex items-center justify-between !mt-[36px] p-2">
                                <Heading extraClass="!font-bold !text-[18px]" text={`${String(value.month())}, ${String(value.year())}`} />
                                <div className="space-x-[16px]">
                                    <Button onClick={() => handleChangeMonth(value, onChange)} className="!w-[40px] !p-0 hover:!border-[#735CD8] !rounded-[12px] !h-[40px]"><ArrowLeft /></Button>
                                    <Button onClick={() => handleChangeMonth(value, onChange)} className="!w-[40px] !p-0 hover:!border-[#735CD8] !rounded-[12px] !h-[40px]"><ArrowRight /></Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between my-[20px]">
                                <Text text="Oylik jami:" extraClass="!font-semibold pl-2" />
                                <strong className="text-[14px] pr-2 font-extrabold">{totalForMonth} <span className="font-normal">so‘m</span></strong>
                            </div>
                        </>
                    )
                }}
            />
        </div>
    );
};

export default CustomCalendar;
