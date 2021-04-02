import * as Font from 'expo-font';
import Database from './db';

export default async function bootstrap() {
  try {
    await Font.loadAsync({
      'open-regular': require('./../assets/fonts/OpenSans-Regular.ttf'),
      'open-bold': require('./../assets/fonts/OpenSans-Bold.ttf'),
    });

    await Database.init();
    console.log('Database started');
  } catch (e) {
    console.log(e);
  }
}
