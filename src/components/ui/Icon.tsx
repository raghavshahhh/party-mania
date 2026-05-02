'use client'

import {
  Cake,
  Heart,
  Baby,
  Gem,
  Flower2,
  Palette,
  Building2,
  Sparkles,
  Clock,
  BadgeIndianRupee,
  Camera,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  Check,
  ChevronDown,
  Quote,
  Shield,
  Send,
  Calendar,
  User,
  X,
  ExternalLink,
  type LucideProps,
} from 'lucide-react'

const iconMap = {
  Cake,
  Heart,
  Baby,
  Gem,
  Flower2,
  Palette,
  Building2,
  Sparkles,
  Clock,
  BadgeIndianRupee,
  Camera,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  Check,
  ChevronDown,
  Quote,
  Shield,
  Send,
  Calendar,
  User,
  X,
  ExternalLink,
} as const

type IconName = keyof typeof iconMap

interface IconProps extends LucideProps {
  name: IconName
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = iconMap[name]
  return <LucideIcon {...props} />
}
