import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const data = [
  {
    id: 1,
    title: 'Transfers',
    date: '14 Sep',
    status: <FontAwesome5 name="clock" size={22} color="grey" />,
    description: 'Wallet To Account',
    amount: '$100.00',
  },
  {
    id: 2,
    title: 'Transfers',
    date: '14 Sep',
    status: <AntDesign name="checkcircle" size={22} color="black" />,
    description: 'Wallet To Account',
    amount: '$100.00',
  },
  {
    id: 3,
    title: 'Subscriptions',
    date: '10 Sep',
    status: <AntDesign name="checkcircle" size={22} color="black" />,
    description: 'Netflix Premium Monthly Payment',
    amount: '$10.00',
  },
  {
    id: 4,
    title: 'Transfers',
    date: '8 Sep',
    status: <FontAwesome5 name="clock" size={22} color="grey" />,
    description: 'Wallet To Account',
    amount: '$80.00',
  },
  {
    id: 5,
    title: 'Subscriptions',
    date: '2 Sep',
    status: <AntDesign name="checkcircle" size={22} color="black" />,
    description: 'Apple Music Monthly Payment',
    amount: '$6.99',
  },
  {
    id: 6,
    title: 'Subscriptions',
    date: '2 Sep',
    status: <FontAwesome5 name="clock" size={22} color="grey" />,
    description: 'Spotify Monthly Payment',
    amount: '$10.99',
  },
  {
    id: 7,
    title: 'Transfers',
    date: '1 Sep',
    status: <FontAwesome5 name="clock" size={24} color="black" />,
    description: 'Wallet To Account',
    amount: '$4.90',
  },
];

export default data;
