import { LuPhone } from 'react-icons/lu';
import {
  MdMailOutline,
  MdFileDownload,
  MdInfoOutline,
  MdOutlineSearch,
  MdOutlineTune,
  MdOutlineFormatListBulleted,
} from 'react-icons/md';
import { FaRegClock, FaUser, FaRegCheckCircle } from 'react-icons/fa';
import { FaLock, FaListCheck, FaRegFlag } from 'react-icons/fa6';
import { TbUserPlus } from 'react-icons/tb';
import { VscGraphLine } from 'react-icons/vsc';
import { GoPersonAdd } from 'react-icons/go';
import { BsFiletypePdf } from 'react-icons/bs';

import nationalEmblem from '@/assets/national-emblem.png';
import nationalEmblemInverted from '@/assets/national-emblem-inverted.png';
import profileImg from '@/assets/profile.jpg';
import { PiMicrosoftExcelLogoLight } from 'react-icons/pi';

export const appIcons = {
  phone: LuPhone,
  email: MdMailOutline,
  clock: FaRegClock,
  user: FaUser,
  lock: FaLock,
  userPlus: TbUserPlus,
  listCheck: FaListCheck,
  download: MdFileDownload,
  verified: FaRegCheckCircle,
  dashboard: VscGraphLine,
  calendar: FaRegFlag,
  info: MdInfoOutline,
  search: MdOutlineSearch,
  advancedSearch: MdOutlineTune,
  addStudent: GoPersonAdd,
  list: MdOutlineFormatListBulleted,
  excel: PiMicrosoftExcelLogoLight,
  pdf: BsFiletypePdf,
};

// ----

export const titles = {
  appTitle: import.meta.env.VITE_APP_NAME,
  govName: import.meta.env.VITE_GOV_NAME,
  depName: import.meta.env.VITE_DEP_NAME,
  agencyName: import.meta.env.VITE_AGEN_NAME,
  projectName: import.meta.env.VITE_PROJECT_NAME,
  baseUrl: import.meta.env.VITE_FRONTEND_BASE_URL,
  apiUrl: import.meta.env.VITE_BACKEND_BASE_URL,
};

// ---

export const images = {
  nationalEmblem,
  nationalEmblemInverted,
  profileImg,
};
