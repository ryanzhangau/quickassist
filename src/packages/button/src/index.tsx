import React from 'react'

export interface ButtonProps {
  label: string
  onClick: () => void
  size?: 'sm' | 'md' | 'lg'
  outline?: boolean
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  disabled?: boolean
}

export const generateClass = (size: string, color: string, outline: boolean | undefined): string =>
  `btn ${outline ? `btn-outline-${color}` : `btn-${color}`} btn-${size}`

const AnctechButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  size = 'md',
  outline,
  color = 'primary',
  disabled,
  ...props
}) => {
  return (
    <button
      className={generateClass(size, color, outline)}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {console.log(outline)}
      {label}
    </button>
  )
}

export default AnctechButton
