import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";


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
];

type RenderType = {
  item: string;
  index: number; // Index should be a number, not a string
};

type document = {
  id: number ;
  documentName: string;
  dateCreated: string;
  numberOfItems: number;
}


const Home = () => {
  const [firstItem, setFirstItem] = useState<document | null >(null);

  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header 1</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header 2</Text>
      </View>
    </>
  );

  const renderStickyHeader = () => (
    <View style={styles.stickyHeader}>
      <Text style={styles.stickyHeaderText}>Sticky Header</Text>
    </View>
  );


  const renderItem = ({ item, index }: RenderType) => {
    if (index === 0) {
      setFirstItem(item);
      return (
        <View style={styles.item}>
          <Text>First Item: {item}</Text>
        </View>
      );
    } else if (index === 1) {
      return (
        <View style={styles.item}>
          <Text>Stored Item: {}</Text>
          <Text>Second Item: {item}</Text>
        </View>
      );
    }
    return (
      <View style={styles.item}>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={documents}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      ListHeaderComponent={renderHeader}
      stickyHeaderIndices={[2]} // Index of the sticky header in the entire list
      ListHeaderComponentStyle={styles.listHeaderComponent}
      ListFooterComponent={<Text style={styles.footer}>Footer Content</Text>}
      ListFooterComponentStyle={styles.listHeaderComponent}
      extraData={firstItem} // Ensure the FlatList re-renders when firstItem changes
    />
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
    color: "#333",
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  listHeaderComponent: {
    zIndex: 1, // Ensure header sits on top
  },
  footer: {
    textAlign: "center",
    padding: 15,
    backgroundColor: "#f2f2f2",
  },
});

export default Home;
