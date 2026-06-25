import { HStack, Link, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { FiExternalLink } from 'react-icons/fi'

type ExternalActionProps = {
  href: string
  label: string
  ariaLabel: string
  icon?: ReactNode
  variant?: 'button' | 'link' | 'icon'
  tone?: 'primary' | 'outline'
  testId?: string
}

const isExternalHref = (href: string): boolean => /^https?:\/\//.test(href)

function ExternalAction({
  href,
  label,
  ariaLabel,
  icon,
  variant = 'button',
  tone = 'outline',
  testId,
}: ExternalActionProps) {
  const external = isExternalHref(href)
  const sharedProps = {
    href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noreferrer' : undefined,
    'aria-label': ariaLabel,
    'data-testid': testId,
  }

  if (variant === 'icon') {
    return (
      <Link
        {...sharedProps}
        color="var(--text-300)"
        _hover={{ color: 'var(--accent-300)', transform: 'translateY(-2px)' }}
        transition="all 0.2s ease"
      >
        {icon ?? <FiExternalLink size={22} />}
      </Link>
    )
  }

  if (variant === 'link') {
    return (
      <Link
        {...sharedProps}
        color="var(--accent-300)"
        fontWeight={600}
        _hover={{ color: 'var(--text-100)' }}
      >
        <HStack gap={1.5}>
          <Text>{label}</Text>
          <FiExternalLink />
        </HStack>
      </Link>
    )
  }

  const primaryStyles =
    tone === 'primary'
      ? {
          bg: 'var(--accent-500)',
          color: 'white',
          borderColor: 'rgba(118, 168, 255, 0.58)',
          _hover: { bg: 'var(--accent-400)' },
        }
      : {
          bg: 'rgba(34, 128, 235, 0.1)',
          color: 'var(--text-100)',
          borderColor: 'rgba(118, 168, 255, 0.42)',
          _hover: { bg: 'rgba(34, 128, 235, 0.2)' },
        }

  return (
    <Link
      {...sharedProps}
      display="inline-flex"
      alignItems="center"
      minH="32px"
      px={3}
      py={1.5}
      borderRadius="md"
      border="1px solid"
      fontSize="sm"
      fontWeight={600}
      textDecoration="none"
      {...primaryStyles}
    >
      <HStack gap={1.5}>
        <Text>{label}</Text>
        <FiExternalLink />
      </HStack>
    </Link>
  )
}

export default ExternalAction
