'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import * as ReactActivityCalendar from 'react-activity-calendar'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
          'https://github-contributions-api.jogruber.de/v4/JoseMaurette1?y=last',
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
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#27272a', '#006d32', '#26a641', '#39d353', '#39d353'],
  }

  const ActivityCalendar =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ReactActivityCalendar as any).ActivityCalendar ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ReactActivityCalendar as any).default ||
    ReactActivityCalendar

  return (
    <motion.section initial="hidden" animate="visible" variants={ITEM_VARIANTS}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-[family-name:var(--font-playfair-display)] text-lg font-medium">
          github activity
        </h3>
        <Link
          href="https://github.com/JoseMaurette1"
          target="_blank"
          className="flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <span>view profile</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="flex w-full justify-center overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="w-full overflow-x-auto">
          {data.length > 0 ? (
            <ActivityCalendar
              data={data}
              theme={themeData}
              colorScheme="dark"
              blockSize={8}
              blockMargin={2}
              fontSize={12}
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
                totalCount: '{{count}} contributions in the last year',
                weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              }}
              showWeekdayLabels
            />
          ) : (
            <div className="flex h-[130px] w-full items-center justify-center text-sm text-zinc-400">
              Loading activity...
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}
