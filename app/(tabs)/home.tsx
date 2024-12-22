import ItemCard from "@/components/itemCard";
import TopFilter from "@/components/topFilter";
import { icons } from "@/constants";
import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const documents = [
  { id: 1, documentName: "Report_01", dateCreated: "2024-12-01", numberOfItems: 5 },
  { id: 2, documentName: "Invoice_2024", dateCreated: "2024-12-02", numberOfItems: 12 },
  { id: 3, documentName: "Budget_Summary", dateCreated: "2024-11-30", numberOfItems: 8 },
  { id: 4, documentName: "Meeting_Minutes", dateCreated: "2024-12-05", numberOfItems: 6 },
  { id: 5, documentName: "Task_List", dateCreated: "2024-11-28", numberOfItems: 15 },
  { id: 6, documentName: "Project_Plan", dateCreated: "2024-12-03", numberOfItems: 20 },
  { id: 7, documentName: "Weekly_Report", dateCreated: "2024-11-25", numberOfItems: 7 },
  { id: 8, documentName: "Expense_Sheet", dateCreated: "2024-12-04", numberOfItems: 10 },
  { id: 9, documentName: "Client_Notes", dateCreated: "2024-12-06", numberOfItems: 3 },
  { id: 10, documentName: "Performance_Review", dateCreated: "2024-11-29", numberOfItems: 9 },
  { id: 11, documentName: "Audit_Log", dateCreated: "2024-12-07", numberOfItems: 11 },
  { id: 12, documentName: "Employee_Roster", dateCreated: "2024-11-26", numberOfItems: 4 },
  { id: 13, documentName: "Sales_Report", dateCreated: "2024-12-08", numberOfItems: 16 },
  { id: 14, documentName: "Inventory_List", dateCreated: "2024-11-27", numberOfItems: 13 },
  { id: 15, documentName: "Strategy_Plan", dateCreated: "2024-12-09", numberOfItems: 18 },
  { id: 16, documentName: "Feedback_Form", dateCreated: "2024-12-10", numberOfItems: 2 },
  { id: 17, documentName: "Delivery_Schedule", dateCreated: "2024-11-23", numberOfItems: 14 },
  { id: 18, documentName: "Product_Catalog", dateCreated: "2024-12-11", numberOfItems: 19 },
  { id: 19, documentName: "Workshop_Agenda", dateCreated: "2024-11-24", numberOfItems: 5 },
  { id: 20, documentName: "Marketing_Plan", dateCreated: "2024-12-12", numberOfItems: 17 },
  { id: 21, documentName: "Report_01", dateCreated: "2024-12-01", numberOfItems: 5 },
  { id: 22, documentName: "Invoice_2024", dateCreated: "2024-12-02", numberOfItems: 12 },
  { id: 23, documentName: "Budget_Summary", dateCreated: "2024-11-30", numberOfItems: 8 },
  { id: 24, documentName: "Meeting_Minutes", dateCreated: "2024-12-05", numberOfItems: 6 },
  { id: 25, documentName: "Task_List", dateCreated: "2024-11-28", numberOfItems: 15 },
  { id: 26, documentName: "Project_Plan", dateCreated: "2024-12-03", numberOfItems: 20 },
  { id: 27, documentName: "Weekly_Report", dateCreated: "2024-11-25", numberOfItems: 7 },
  { id: 28, documentName: "Expense_Sheet", dateCreated: "2024-12-04", numberOfItems: 10 },
  { id: 29, documentName: "Client_Notes", dateCreated: "2024-12-06", numberOfItems: 3 },
  { id: 30, documentName: "Performance_Review", dateCreated: "2024-11-29", numberOfItems: 9 },
  { id: 31, documentName: "Audit_Log", dateCreated: "2024-12-07", numberOfItems: 11 },
  { id: 32, documentName: "Employee_Roster", dateCreated: "2024-11-26", numberOfItems: 4 },
  { id: 33, documentName: "Sales_Report", dateCreated: "2024-12-08", numberOfItems: 16 },
  { id: 34, documentName: "Inventory_List", dateCreated: "2024-11-27", numberOfItems: 13 },
  { id: 35, documentName: "Strategy_Plan", dateCreated: "2024-12-09", numberOfItems: 18 },
  { id: 36, documentName: "Feedback_Form", dateCreated: "2024-12-10", numberOfItems: 2 },
  { id: 37, documentName: "Delivery_Schedule", dateCreated: "2024-11-23", numberOfItems: 14 },
  { id: 38, documentName: "Product_Catalog", dateCreated: "2024-12-11", numberOfItems: 19 },
  { id: 39, documentName: "Workshop_Agenda", dateCreated: "2024-11-24", numberOfItems: 5 },
  { id: 40, documentName: "Marketing_Plan", dateCreated: "2024-12-12", numberOfItems: 17 },
];


type Document = {
  id: number;
  documentName: string;
  dateCreated: string;
  numberOfItems: number;
};

type RenderType = {
  item: Document;
  index: number;
};

const Home = () => {
  const [firstItem, setFirstItem] = useState<Document | null>(null);

  useEffect(() => {
    if (documents.length > 0) {
      setFirstItem(documents[0]);
    }
  }, []);

  const renderHeader = () => (
    <View className='pt-4 pb-2 px-4 flex-row justify-center items-center bg-black-200'>
    <ItemCard
      title='Scan'
    />
    <ItemCard
      title='Report'
    />
    <ItemCard
      title='Grade'
    />

  </View>
  );

  const renderStickyHeader = () => (
    <View style={styles.stickyHeader}>
      <Text style={styles.stickyHeaderText}>Sticky Header</Text>
    </View>
  );

  const renderItem = ({ item, index }: RenderType) => {
    if (index === 0) {
      return (
        <View className="">
          <TopFilter />
        </View>
      );
    } else if (index === 1) {
      return (
        <View>

        <View style={styles.item}>
          <Text className="text-white">
          {firstItem?.documentName}
          </Text>
        </View>

        <View style={styles.item}>
          <Text className="text-white">
          {item.documentName}
          </Text>
        </View>

        </View>
      );
    } else{

      return (
        <View style={styles.item}>
          <Text className="text-white">{item.documentName}</Text>
        </View>
      );
    }
  };

  return (

  <SafeAreaView className="bg-primary h-full">

    <View className="bg-black-200 flex-row justify-between items-center  py-2 pl-4 pr-4">
      <View className='flex-row justify-start items-center gap-2 pt-4'>

        <View className='border-2 rounded-full p-1 border-secondary-300'>
          <Image
            className="h-5 w-5"
            source={icons.profile}
          />
        </View>
        <Text className='text-white text-1xl font-psemibold pl-3'>ifiok Udofe</Text>
      </View>

      <View>
        <Image
          className="h-6 w-6"
          source={icons.search}
        />
      </View>
    </View>

    <FlatList
      data={documents}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={renderHeader()}
      stickyHeaderIndices={[1]} // Adjust index if needed

      />
  </SafeAreaView>


    
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  stickyHeader: {
    backgroundColor: "#ffcc00",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  stickyHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  listHeaderComponent: {
    zIndex: 1,
  },
  footer: {
    textAlign: "center",
    padding: 15,
    backgroundColor: "#f2f2f2",
  },
});

export default Home;