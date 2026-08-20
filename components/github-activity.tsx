'use client'

import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import 'react-github-calendar/tooltips.css'

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false },
)

const GITHUB_ACCOUNTS = [
  { label: 'Personal', username: 'JoseMaurette1' },
  {
    label: 'Zensah',
    username: 'Jose-Zensah',
    year: 2026,
    startDate: '2026-05-01',
  },
]

export function GithubActivity() {
  const { resolvedTheme } = useTheme()
  const colorScheme = resolvedTheme === 'dark' ? 'dark' : 'light'

  return (
    <div className="flex flex-col gap-3">
      {GITHUB_ACCOUNTS.map((account) => (
        <div key={account.username} className="flex flex-col gap-1">
          <span className="text-muted-foreground text-sm font-medium">
            {account.label}
          </span>
          <div className="overflow-x-auto">
            <GitHubCalendar
              username={account.username}
              year={account.year ?? 'last'}
              transformData={
                account.startDate
                  ? (data) =>
                      data.filter((activity) => activity.date >= account.startDate)
                  : undefined
              }
              colorScheme={colorScheme}
              blockSize={9}
              blockMargin={3}
              fontSize={11}
              showWeekdayLabels={false}
              errorMessage={`Couldn't load activity for ${account.username}`}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
