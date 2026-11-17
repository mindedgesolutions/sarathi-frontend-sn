import { FiUsers, FiUserCheck } from 'react-icons/fi';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GoPersonAdd } from 'react-icons/go';
import { PiMicrosoftExcelLogoLight } from 'react-icons/pi';
import { BsFiletypePdf } from 'react-icons/bs';
import { MdOutlineFormatListBulleted } from 'react-icons/md';

export type OverallFigsProps = {
  title: string;
  count: number;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
};

export type DashboardBtnProps = {
  title: string;
  subtitle: string;
  link?: string;
  icon: React.ElementType;
  iconColor: string;
  btnBg: string;
  borderColor: string;
};

export const overallFigs: OverallFigsProps[] = [
  {
    title: 'Profile entered',
    count: 10500000,
    icon: FiUsers,
    iconColor: 'text-primary/70',
    iconBg: 'bg-primary/10',
  },
  {
    title: 'Profile finalized',
    count: 500,
    icon: FaArrowTrendUp,
    iconColor: 'text-green-custom/70',
    iconBg: 'bg-green-custom/10',
  },
  {
    title: 'Rejected profiles',
    count: 1200,
    icon: FiUsers,
    iconColor: 'text-blue-custom/70',
    iconBg: 'bg-blue-custom/10',
  },
  {
    title: 'Total approved',
    count: 8800,
    icon: FiUserCheck,
    iconColor: 'text-fuchsia-custom/70',
    iconBg: 'bg-fuchsia-custom/10',
  },
];

export const dashboardBtns: DashboardBtnProps[] = [
  {
    title: 'Add student',
    subtitle: 'Registration',
    icon: GoPersonAdd,
    iconColor: 'text-primary',
    btnBg: 'bg-primary/15 hover:bg-primary/20',
    borderColor: 'border-b-4 border-b-primary/50',
    link: `/school/student`,
  },
  {
    title: 'Student list',
    subtitle: 'Management',
    icon: MdOutlineFormatListBulleted,
    iconColor: 'text-green-custom',
    btnBg: 'bg-green-custom/15 hover:bg-green-custom/20',
    borderColor: 'border-b-4 border-b-green-custom/50',
    link: `/school/students`,
  },
  {
    title: 'Excel export',
    subtitle: 'Student data',
    icon: PiMicrosoftExcelLogoLight,
    iconColor: 'text-blue-custom',
    btnBg: 'bg-blue-custom/15 hover:bg-blue-custom/20',
    borderColor: 'border-b-4 border-b-blue-custom/50',
  },
  {
    title: 'Muster roll',
    subtitle: 'PDF report',
    icon: BsFiletypePdf,
    iconColor: 'text-fuchsia-custom',
    btnBg: 'bg-fuchsia-custom/15 hover:bg-fuchsia-custom/20',
    borderColor: 'border-b-4 border-b-fuchsia-custom/50',
  },
];

export const genderWise = [
  { name: 'Male', value: 450000 },
  { name: 'Female', value: 320000 },
];

export const categoryWise = [
  { name: 'General', value: 3500000 },
  { name: 'SC', value: 2150000 },
  { name: 'ST', value: 1240000 },
  { name: 'OBC', value: 350000 },
];

export const applicationStatusWise = [
  { name: 'Profile finalized', value: 500000 },
  { name: 'Rejected profiles', value: 120000 },
  { name: 'Total approved', value: 880000 },
];

export const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];
