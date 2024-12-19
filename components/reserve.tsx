import { FlatList, Image, Text, View } from "react-native";
import ItemCard from "./itemCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

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



type titleType = {
  title: string
}


const Item = ({title}: titleType) => (
  <View style={{}}>
    <Text style={{}}>{title}</Text>
  </View>
);

const Home = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <View>
        <View>
          <Image
            source={ images.profile }
          />
          <Text>Ifiok Udofe</Text>
        </View>
        <Image
          source={ icons.search}
        />
      </View>
      <View>
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
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <View>
            <Text>List Header Component</Text>
          </View>
        }
      />
    </SafeAreaView>
  )
}

export default Home
