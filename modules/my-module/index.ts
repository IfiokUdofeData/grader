import MyModule from './src/MyModule';



import { EventSubscription } from 'expo-modules-core';

  
  export type Theme = 'light' | 'dark' | 'system';
  
  export type ThemeChangeEvent = {
    theme: Theme;
  };
  
  export function addThemeListener(listener: (event: ThemeChangeEvent) => void): EventSubscription {
    return MyModule.addListener('onChangeTheme', listener);
  }
  
  export function getTheme(): Theme {
    return MyModule.getTheme();
  }
  
  export function setTheme(theme: Theme): void {
    return MyModule.setTheme(theme);
  }

  export function hello(): string {
    return MyModule.hello();
  }
  
  export function extractPixels(): string {
    return MyModule.extractPixels();
  }
  
  
