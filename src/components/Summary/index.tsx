import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'

import { Card, SummaryContainer } from './styles'

export function Summary() {
  const { totalIncome, totalOutcome, totalBalance } = useSummary()

  return (
    <SummaryContainer>
      <Card>
        <header>
          <span>Receita</span>
          <ArrowCircleUp size={24} color="#00B37E" />
        </header>

        <strong>
          {totalIncome.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>
      </Card>

      <Card>
        <header>
          <span>Despesa</span>
          <ArrowCircleDown size={24} color="#F75A68" />
        </header>
        <strong>
          {totalOutcome.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>
      </Card>

      <Card variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={24} color="#fff" />
        </header>
        <strong>
          {totalBalance.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>
      </Card>
    </SummaryContainer>
  )
}
