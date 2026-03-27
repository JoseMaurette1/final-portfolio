'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import * as ReactActivityCalendar from 'react-activity-calendar'
import Link from 'next/link'

type ThemeInput = {
  light: [string, string, string, string, string]
  dark: [string, string, string, string, string]
}

type ContributionDay = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const GithubActivitySection = () => {
  const [data, setData] = useState<ContributionDay[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://github-contributions-api.jogruber.de/v4/JoseMaurette1?y=2026',
        )
        const json = await response.json()

        if (json && json.contributions) {
          const boostedData = json.contributions.map(
            (day: ContributionDay) => ({
              ...day,
              level: day.level === 0 ? 0 : Math.min(day.level + 1, 4),
            }),
          )
          setData(boostedData)
        }
      } catch (error) {
        console.error('Failed to fetch github data', error)
      }
    }
    fetchData()
  }, [])

  if (!mounted) return null

  const themeData: ThemeInput = {
    light: ['#1a1a1a', '#2e2e2e', '#484848', '#747474', '#b0b0b0'],
    dark: ['#1a1a1a', '#2e2e2e', '#484848', '#747474', '#b0b0b0'],
  }

  const ActivityCalendar =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ReactActivityCalendar as any).ActivityCalendar ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ReactActivityCalendar as any).default ||
    ReactActivityCalendar

  return (
    <motion.section initial="hidden" animate="visible" variants={ITEM_VARIANTS}>
      <div className="mb-7 flex items-center justify-between">
        <p className="text-xs tracking-[0.2em] text-[#444] uppercase">
          Github Activity
        </p>
        <Link
          href="https://github.com/JoseMaurette1"
          target="_blank"
          className="text-sm text-[#444] transition-colors hover:text-[#e8e4df]"
        >
          view profile →
        </Link>
      </div>

      <div className="flex w-full justify-center overflow-hidden border border-[#1e1e1e] bg-[#0d0d0d] p-5">
        <div className="w-full overflow-x-auto">
          {data.length > 0 ? (
            <ActivityCalendar
              data={data}
              theme={themeData}
              colorScheme="dark"
              blockSize={10}
              blockMargin={3}
              fontSize={11}
              hideColorLegend={false}
              hideTotalCount={false}
              labels={{
                legend: {
                  less: 'Less',
                  more: 'More',
                },
                months: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                totalCount: '{{count}} contributions in 2026',
                weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              }}
              showWeekdayLabels
            />
          ) : (
            <div className="flex h-[160px] w-full items-center justify-center text-[10px] text-[#333]">
              loading...
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}
