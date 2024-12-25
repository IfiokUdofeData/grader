import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants';



type TabIconType = {
  icon: string 
  color: string
  name: string
  focused: boolean
}

const TabIcon = ({ icon, color, name, focused }: TabIconType) => {
  return (
    <View className='w-12 items-center justify-center gap-2'>
      <Image
        source={icon? icon : require("../../assets/icons/search.png")}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6 mt-4'
      />

      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
        {name}
      </Text>
    </View>
  )
}

export default function Layout() {
  return (


    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarActiveTintColor: '#5fc3da',
      tabBarInactiveTintColor: '#CDCDE0',
      tabBarStyle: {
        backgroundColor: '#161620',
        borderTopWidth: 0,
        borderTopColor: '#232533',
        height: 65,
      }
    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }}
      />

      <Tabs.Screen
        name="grade"
        options={{
          title: "Grade",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.grade}
              color={color}
              name="Grade"
              focused={focused}
            />
          )
        }}
      />

      <Tabs.Screen
        name="projects"
        options={{
          title: "Project",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.projects}
              color={color}
              name="Project"
              focused={focused}
            />
          )
        }}
      />

      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.scan}
              color={color}
              name="Scan"
              focused={focused}
            />
          )
        }}
      />

    </Tabs>
  );
}
