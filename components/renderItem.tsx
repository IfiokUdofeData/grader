import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import icons from "../constants/icons"
import { Image } from 'react-native';
import { images } from '@/constants';


const documentsData = [
    { id: 1, imageUrl: "url1.jpg", iconType: "report", name: "Report_01", date: "2024-12-01", number: 5 },
    { id: 2, imageUrl: "url2.jpg", iconType: "scan", name: "Invoice_2024", date: "2024-12-02", number: 12 },
    { id: 3, imageUrl: "url3.jpg", iconType: "grader", name: "Budget_Summary", date: "2024-11-30", number: 8 },
    { id: 4, imageUrl: "url4.jpg", iconType: "report", name: "Meeting_Minutes", date: "2024-12-05", number: 6 },
    { id: 5, imageUrl: "url5.jpg", iconType: "result", name: "Task_List", date: "2024-11-28", number: 15 },
    { id: 6, imageUrl: "url6.jpg", iconType: "report", name: "Project_Plan", date: "2024-12-03", number: 20 },
    { id: 7, imageUrl: "url7.jpg", iconType: "scan", name: "Weekly_Report", date: "2024-11-25", number: 7 },
    { id: 8, imageUrl: "url8.jpg", iconType: "grader", name: "Expense_Sheet", date: "2024-12-04", number: 10 },
    { id: 9, imageUrl: "url9.jpg", iconType: "result", name: "Client_Notes", date: "2024-12-06", number: 3 },
    { id: 10, imageUrl: "url10.jpg", iconType: "report", name: "Performance_Review", date: "2024-11-29", number: 9 },
    { id: 11, imageUrl: "url11.jpg", iconType: "scan", name: "Audit_Log", date: "2024-12-07", number: 11 },
    { id: 12, imageUrl: "url12.jpg", iconType: "grader", name: "Employee_Roster", date: "2024-11-26", number: 4 },
    { id: 13, imageUrl: "url13.jpg", iconType: "result", name: "Sales_Report", date: "2024-12-08", number: 16 },
    { id: 14, imageUrl: "url14.jpg", iconType: "scan", name: "Inventory_List", date: "2024-11-27", number: 13 },
    { id: 15, imageUrl: "url15.jpg", iconType: "grader", name: "Strategy_Plan", date: "2024-12-09", number: 18 },
    { id: 16, imageUrl: "url16.jpg", iconType: "result", name: "Feedback_Form", date: "2024-12-10", number: 2 },
    { id: 17, imageUrl: "url17.jpg", iconType: "report", name: "Delivery_Schedule", date: "2024-11-23", number: 14 },
    { id: 18, imageUrl: "url18.jpg", iconType: "grader", name: "Product_Catalog", date: "2024-12-11", number: 19 },
    { id: 19, imageUrl: "url19.jpg", iconType: "scan", name: "Workshop_Agenda", date: "2024-11-24", number: 5 },
    { id: 20, imageUrl: "url20.jpg", iconType: "result", name: "Marketing_Plan", date: "2024-12-12", number: 17 },
];



type DocumentData = {
    id: number;
    imageUrl: string | { uri: string }; 
    iconType: string;
    name: string;
    date: string;
    number: number;
};

type ItemType = {
    item: DocumentData | null;
    index: number
}

const checkIcon = (icontype: string)=>{
    if (icontype === "scan") {
        return icons.image
    } else if(icontype === "report"){
        return icons.wordfile
    } else if(icontype === "result"){
        return icons.sheet
    } else if(icontype === "grader"){
        return icons.grid
    }
     else {
        return icons.wordfile
    }
}
const RenderItem = (item: DocumentData ) => {
    return (
        <View className='w-full h-20 bg-primary flex-row justify-between items-center pl-2 my-2'>
            <TouchableHighlight>
                <View className='flex-row'>

                    <View className='relative'>
                        <Image
                            source={require("../assets/images/doc.jpeg")}
                            className='h-16 w-16 opacity-60 rounded'
                        />

                        <Image
                            source={item.iconType ? checkIcon(item.iconType) : icons.wordfile}
                            className='h-7 w-7 opacity-90 text-primary mt-4 absolute bottom-8 left-1'
                        />
                    </View>

                    <View className='flex-col justify-start items-start pl-6'>
                        <View className='flex-row justify-center items-center'>
                            <Text className='text-xl text-white font-pregular'>{item.name}</Text>
                        </View>
                        <View className='flex-row justify-start items-center opacity-40 gap-1 mt-1'>
                            <Text className='text-sm text-white font-pregular'>{item.date}</Text>
                            
                            <Text className='font-bold text-sm pb-1 text-white mx-1'>|</Text>

                            <Image
                                source={icons.count}
                                className='h-5 w-5'
                            />

                            <Text className='text-sm text-white font-pregular'>5</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableOpacity className='h-12 w-12 flex items-center justify-center bg-primary'>
                <Image
                    source={icons.menu}
                    className='h-6 w-6'
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    )
}

export default RenderItem


// { id, imageUrl, iconType, name, date, number }