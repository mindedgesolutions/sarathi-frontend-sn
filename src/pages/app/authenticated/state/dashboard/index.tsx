import {
  AppNumCounter,
  AppPageWrapper,
  AppSectionWrapper,
  AppTitleWrapper,
  AppDonut,
  AppBarchart,
  AppPiechart,
  AppSectionTitleWrapper,
} from '@/components';
import { images, titles } from '@/constants';
import {
  applicationStatusWise,
  categoryWise,
  dashboardBtns,
  genderWise,
  invoices,
  overallFigs,
} from '@/constants/chart.data';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Link } from 'react-router-dom';
import { useTheme } from '@/components/dark-mode/theme-provider';
import DashboardBtn from './DashboardBtn';

const AppStateDashboard = () => {
  document.title = `Dashboard | ${titles.projectName}`;

  const cnames = categoryWise.map((t) => t.name);
  const cdata = categoryWise.map((t) => t.value);
  const { theme } = useTheme();

  return (
    <AppPageWrapper>
      <AppTitleWrapper title={`Souvik (State)'s Dashboard`} />
      <AppSectionWrapper>
        <div className="flex flex-col gap-4 md:gap-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {overallFigs.map((fig) => (
              <AppNumCounter
                key={fig.title}
                title={fig.title}
                count={fig.count}
                icon={fig.icon}
                iconColor={fig.iconColor}
                iconBg={fig.iconBg}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {dashboardBtns.map((btn) => (
              <DashboardBtn
                key={btn.title}
                title={btn.title}
                subtitle={btn.subtitle}
                icon={btn.icon}
                iconColor={btn.iconColor}
                btnBg={btn.btnBg}
                borderColor={btn.borderColor}
                link={btn.link}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-2 rounded-sm border border-muted-foreground/10">
              <AppSectionTitleWrapper
                title="Gender-wise"
                backgroundClassName="bg-transparent text-center md:text-left dark:bg-transparent p-0 md:p-0"
                className="text-xs md:text-xs"
              />
              <AppDonut
                name="Gender-wise"
                colors={['#d1d5db', '#fb923c']}
                data={genderWise}
                className="h-52 md:h-55"
              />
            </div>
            <div className="p-2 rounded-sm border border-muted-foreground/10">
              <AppSectionTitleWrapper
                title="Category-wise"
                backgroundClassName="bg-transparent text-center md:text-left dark:bg-transparent p-0 md:p-0"
                className="text-xs md:text-xs"
              />
              <AppBarchart
                name="Category-wise"
                colors={['#fb923c']}
                xaxisType="category"
                xaxisData={cnames}
                yaxisType="value"
                data={cdata}
                className="h-52 md:h-55"
              />
            </div>
            <div className="p-2 rounded-sm border border-muted-foreground/10">
              <AppSectionTitleWrapper
                title="Application status"
                backgroundClassName="bg-card dark:bg-transparent text-center md:text-left p-0 md:p-0"
                className="text-xs md:text-xs"
              />
              <AppPiechart
                name="Application-status-wise"
                colors={['#9ca3af', '#fb923c', '#e5e7eb']}
                data={applicationStatusWise}
                className="h-52 md:h-55"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-2 flex flex-col justify-center items-center gap-4">
            <div className="w-20 h-20 flex justify-center items-center overflow-hidden bg-muted rounded-full">
              <img
                src={
                  theme === 'dark'
                    ? images.nationalEmblemInverted
                    : images.nationalEmblem
                }
                alt="National Emblem"
                className="max-w-8 object-cover"
              />
            </div>
            <span className="text-primary text-4xl uppercase font-bold font-inter">
              {titles.projectName}
            </span>
            <section className="flex flex-col justify-center items-center gap-2">
              <div className="text-xs tracking-wider uppercase font-semibold text-muted-foreground">
                {titles.depName}
              </div>
            </section>
          </div>
          <div className="col-span-2">
            <AppSectionTitleWrapper
              title="Block Development Officers (BDO)"
              className="text-xs md:text-xs"
            />
            <Table className="mt-4">
              <TableCaption>
                <Link to={`#`}>View complete list of BDO</Link>
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs">
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">
                      {invoice.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </AppSectionWrapper>
    </AppPageWrapper>
  );
};
export default AppStateDashboard;
