import {
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons-vue';

interface Menu {
  key: string,
  title: string,
  icon?: unknown, // TODO
  link?: string,
  children?: Menu[],
}

export const MENU: Menu[] = [
  {
    key: '1',
    title: 'Home',
    icon: PieChartOutlined,
    link: '/',
  },
  {
    key: '2',
    title: 'sub',
    icon: MailOutlined,
    children: [
      {
        key: '2.1',
        title: 'About',
        icon: MailOutlined,
        link: '/about',
      },
    ],
  },
]