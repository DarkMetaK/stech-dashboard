import { DashboardContainer, Content, Charts } from './styles'
import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary'
import { IncomeChart } from './components/IncomeChart'
import { OutcomeChart } from './components/OutcomeChart'

export function Dashboard() {
  return (
    <DashboardContainer>
      <Header />

      <Content>
        <h1>Dashboard</h1>

        <Summary />

        <Charts>
          <IncomeChart />
          <OutcomeChart />
        </Charts>
      </Content>
    </DashboardContainer>
  )
}
