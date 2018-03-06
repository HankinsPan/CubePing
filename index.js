import { AppRegistry } from 'react-native';
// import App from './App';
import App from './src/scene/start';

// 关闭全部的警告
console.disableYellowBox = true;

AppRegistry.registerComponent('ClubPing', () => App);
