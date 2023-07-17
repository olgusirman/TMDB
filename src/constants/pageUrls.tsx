import Home from '../pages/home';
import MyTickets from '../pages/myTickets';
import TicketPurchase from '../pages/ticketPurchase';
import TicketSell from '../pages/ticketSell';

export const pagesRoutes = [
  { path: '/', element: <Home /> },
  { path: '/myTickets', element: <MyTickets /> },
  { path: '/ticketPurchase', element: <TicketPurchase /> },
  { path: '/ticketSell', element: <TicketSell /> },
];
