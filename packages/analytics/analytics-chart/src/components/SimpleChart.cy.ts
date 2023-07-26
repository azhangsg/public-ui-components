// Cypress component test spec file
import { ChartMetricDisplay, ChartLegendPosition, ChartTypesSimple } from '../enums/'
import SimpleChart from './SimpleChart.vue'

const emptyExploreResult = {
  records: [],
  meta: {
    start: 1685452140.987,
    end: 1685473740.987,
    queryId: '12345',
    dimensions: {
      StatusCode: ['200', '300', '400', '500'],
    },
    metricNames: ['TotalRequests'],
    metricUnits: {
      TotalRequests: 'requests',
    },
    granularity: 3600000,
    truncated: false,
    limit: 10,
  },
}

const exploreResultTruncated = {
  records: [
    {
      version: '1.0',
      timestamp: '2023-05-30T13:09:00.987Z',
      event: {
        StatusCode: '200',
        TotalRequests: 255.49999999999997,
      },
    },
    {
      version: '1.0',
      timestamp: '2023-05-30T13:09:00.987Z',
      event: {
        StatusCode: '300',
        TotalRequests: 182.5,
      },
    },
  ],
  meta: {
    start: 1685452140.987,
    end: 1685473740.987,
    queryId: '12346',
    dimensions: {
      StatusCode: ['200', '300'],
    },
    metricNames: ['TotalRequests'],
    metricUnits: {
      TotalRequests: 'requests',
    },
    granularity: 3600000,
    truncated: false,
    limit: 10,
  },
}

describe('<SimpleChart />', () => {
  it('shows the empty state with no data', () => {
    cy.mount(SimpleChart, {
      props: {
        chartData: emptyExploreResult,
        chartOptions: {
          type: ChartTypesSimple.GAUGE,
          stacked: true,
          fill: false,
        },
      },
    })

    cy.get('[data-testid="no-data-in-report"]').should('be.visible')
  })

  it('renders a Gauge with both metric value and total text below', () => {
    cy.mount(SimpleChart, {
      props: {
        chartData: exploreResultTruncated,
        chartOptions: {
          type: ChartTypesSimple.GAUGE,
          isSimple: true,
          metricDisplay: ChartMetricDisplay.Full,
        },
        legendPosition: ChartLegendPosition.Hidden,
      },
    })

    cy.get('[data-testid="doughnut-chart-metric"]').should('be.visible')
    cy.get('[data-testid="doughnut-chart-total"]').should('be.visible')
  })

  it('renders a Gauge with only the large metric value', () => {
    cy.mount(SimpleChart, {
      props: {
        chartData: exploreResultTruncated,
        chartOptions: {
          type: ChartTypesSimple.GAUGE,
          isSimple: true,
          metricDisplay: ChartMetricDisplay.SingleMetric,
        },
        legendPosition: ChartLegendPosition.Hidden,
      },
    })

    cy.get('[data-testid="doughnut-chart-metric"]').should('be.visible')
    cy.get('[data-testid="doughnut-chart-total"]').should('not.exist')
  })

  it('renders a Gauge with no text', () => {
    cy.mount(SimpleChart, {
      props: {
        chartData: exploreResultTruncated,
        chartOptions: {
          type: ChartTypesSimple.GAUGE,
          isSimple: true,
          metricDisplay: ChartMetricDisplay.Hidden,
        },
        legendPosition: ChartLegendPosition.Hidden,
      },
    })

    cy.get('[data-testid="doughnut-chart-metric"]').should('not.exist')
    cy.get('[data-testid="doughnut-chart-total"]').should('not.exist')
  })
})