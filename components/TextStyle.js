import {StyleSheet} from 'react-native';

const TextStyle = StyleSheet.create({
  title: {
    color: '#22215B',
    fontSize: 30,
    fontWeight: 'bold',
  },
  heading1: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#9D9898',
  },
  heading2: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#5DA646',
  },
  heading3: {
    fontSize: 12,
    color: '#1B1D28',
  },
  description: {
    fontSize: 13,
    color: '#747688',
  },
  note: {
    fontSize: 11,
    fontStyle: 'italic',
    color: '#747688',
  },
  title2: {
    fontSize: 36,
    color: 'black',
  },
  upperBold: {
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: 'black',
  },
  content: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: 'black',
  },
  title3: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  message: {
    fontSize: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default TextStyle;
