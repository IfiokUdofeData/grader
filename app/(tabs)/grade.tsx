import ItemCard from "@/components/itemCard";
import TopFilter from "@/components/topFilter";
import { icons, images } from "@/constants";
import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet, Image, TextInput, Touchable, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RenderItem from "../../components/renderItem"
import ProjectFilter from "@/components/projectFilter";
import NewProject from "@/components/newProject";


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


type RenderType = {
  item: DocumentData;
  index: number;
};

const Grade = () => {
  const [firstItem, setFirstItem] = useState<DocumentData | null>(null);

  useEffect(() => {
    if (documentsData.length > 0) {
      setFirstItem(documentsData[0]);
    }
  }, []);

  const renderHeader = () => (
    <View className="flex-row flex-wrap justify-center content-center w-full rounded-lg px-3 py-2 bg-black-200">


    </View>
  );


  const renderItem = ({ item, index }: RenderType) => {
    if (index === 0) {
      return (
        <View className="">
          <ProjectFilter />
        </View>
      );
    } else if (index === 1) {
      return (
        <View>

          <RenderItem 
            id={firstItem?firstItem.id: 0}
            iconType={firstItem?firstItem.iconType: ""}
            imageUrl={firstItem?firstItem.imageUrl: ""}
            name={firstItem?firstItem.name: ""}
            date={firstItem?firstItem.date: ""}
            number={firstItem?firstItem.number: 0}
          />

          <RenderItem
            id={item.id}
            iconType={item.iconType}
            imageUrl={item.imageUrl}
            name={item.name}
            date={item.date}
            number={item.number}
          />

        </View>
      );
    } else {

      return (
        <RenderItem
        id={item.id}
        iconType={item.iconType}
        imageUrl={item.imageUrl}
        name={item.name}
        date={item.date}
        number={item.number}
        />
      );
    }
  };

  return (

    <SafeAreaView className="bg-primary h-full relative">

      <View className="bg-black-200 flex-row justify-center items-center  py-2 pl-4 pr-4">
        <TouchableHighlight className=" bg-secondary-300 py-2 px-4 rounded-l-xl" >
          <Text className="text-primary text-xl font-psemibold">Old Projects</Text>
        </TouchableHighlight>
        <TouchableHighlight className="bg-primary py-2 px-4 rounded-r-xl" >
          <Text className="text-secondary-300 text-xl font-psemibold">New Project</Text>
        </TouchableHighlight>
      </View>

      <FlatList
        data={documentsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderHeader()}
        stickyHeaderIndices={[1]} // Adjust index if needed

      />

      <View className='absolute bottom-6 right-8'>
        <NewProject />
      </View>
    </SafeAreaView>



  );
};


export default Grade;