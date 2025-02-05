import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'

import { Card, SummaryContainer } from './styles'
import { Skeleton } from '../Skeleton/styles'

export function Summary() {
  const { isLoading, totalIncome, totalOutcome, totalBalance } = useSummary()

  return (
    <SummaryContainer>
      <Card>
        <header>
          <span>Receita</span>
          <ArrowCircleUp size={24} color="#00B37E" />
        </header>

        {isLoading ? (
          <Skeleton height="30px" />
        ) : (
          <strong>
            {totalIncome.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>
        )}
      </Card>

      <Card>
        <header>
          <span>Despesa</span>
          <ArrowCircleDown size={24} color="#F75A68" />
        </header>

        {isLoading ? (
          <Skeleton height="30px" />
        ) : (
          <strong>
            {totalOutcome.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>
        )}
      </Card>

      <Card>
        <header>
          <span>Total</span>
          <CurrencyDollar size={24} color="#fff" />
        </header>

        {isLoading ? (
          <Skeleton height="30px" />
        ) : (
          <strong>
            {totalBalance.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>
        )}
      </Card>
    </SummaryContainer>
  )
}
