//======================================================================================
// ICONS imports
import AccountsIcons from "@/src/assets/icons/left-navbar-icons/accounts-icons";
import CreditCardsIcons from "@/src/assets/icons/left-navbar-icons/credit-cards-icons";
import HomeIcons from "@/src/assets/icons/left-navbar-icons/home-icons";
import InvestmentsIcons from "@/src/assets/icons/left-navbar-icons/investments-icons";
import TransactionIcon from "@/src/assets/icons/left-navbar-icons/transaction-icon";
// import TransactionsIcons from "@/assets/icons/left-navbar-icons/transactions-icons";
import IconSetting from "@/src/assets/icons/dashboard-main/icon-setting";
// import IconMassage from "@/src/assets/icons/dashboard-main/Icon-massage";
import IconChat from "@/src/assets/icons/dashboard-main/icon-chat";
//==========================================================================================
// CONST
export const NavListData = [
  {
    label: "Dashboard",
    icon: HomeIcons,
    link: "/dashboard",
  },
  {
    label: "Schedule",
    icon: AccountsIcons,
    link: "/schedule",
  },
  {
    label: "Students",
    icon: InvestmentsIcons,
    link: "/students",
  },
  {
    label: "Resources",
    icon: CreditCardsIcons,
    link: "/resources",
  },
  {
    label: "Transaction",
    icon: TransactionIcon,
    link: "/transaction",
  },
  {
    label: "Settings",
    icon: IconSetting,
    link: "/settings",
  },
  
{
  label:'Exam',
  icon:IconSetting,
  link:'/exam'
},
{
  label:'message',
  icon:IconChat,
  link:'/message'
}
  
 
];
