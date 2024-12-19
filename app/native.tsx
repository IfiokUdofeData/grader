import * as MyModule from './../modules/my-module';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  const [theme, setTheme] = useState<string>(MyModule.getTheme());

  useEffect(() => {
    const subscription = MyModule.addThemeListener(({ theme: newTheme }) => {
      setTheme(newTheme);
    });

    return () => subscription.remove();
  }, [setTheme]);

  // Toggle between dark and light theme
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text className='text-white'>Theme: {MyModule.getTheme()}</Text>
      <Button title={`Set theme to ${nextTheme}`} onPress={() => MyModule.setTheme(nextTheme)} />

      <Button title={`process image`} onPress={() => MyModule.setTheme(nextTheme)} />

    </View>
  );
}
