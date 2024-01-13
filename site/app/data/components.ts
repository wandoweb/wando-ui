export const componentsData = [
  {
    "name": "Avatar",
    "code": "import { cva, VariantProps } from 'class-variance-authority';\n\nconst avatarStyles = cva(\n  'inline-block align-middle rounded-full',\n  {\n    variants: {\n      intent: {\n        primary: 'border-2 border-neutral-50',\n        secondary: 'border-2 border-orange-400',\n      },\n      size: {\n        small: 'w-8 h-8',\n        medium: 'w-12 h-12',\n        large: 'w-16 h-16',\n      },\n    },\n    defaultVariants: {\n      intent: 'primary',\n      size: 'medium',\n    },\n  }\n);\n\nexport interface AvatarProps extends VariantProps<typeof avatarStyles> {\n  src: string,\n  alt: string,\n}\n\nexport default function Avatar({ src, alt, intent, size, ...props }: AvatarProps) {\n  return (\n    <img src={src} alt={alt} className={avatarStyles({ intent, size })} {...props} />\n  );\n}\n"
  },
  {
    "name": "Badge",
    "code": "import { cva, VariantProps } from 'class-variance-authority';\n\nconst badgeStyles = cva(\n  'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',\n  {\n    variants: {\n      intent: {\n        primary: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-100',\n        secondary: 'bg-orange-400 text-white',\n      },\n    },\n    defaultVariants: {\n      intent: 'primary',\n    },\n  }\n);\n\nexport interface BadgeProps extends VariantProps<typeof badgeStyles> {\n  children: React.ReactNode,\n}\n\nexport default function Badge({ children, intent, ...props }: BadgeProps) {\n  return (\n    <span className={badgeStyles({ intent })} {...props}>\n      {children}\n    </span>\n  );\n}\n"
  },
  {
    "name": "Button",
    "code": "import { cva, VariantProps } from 'class-variance-authority';\n\nconst buttonStyles = cva(\n\t'flex items-center shadow-sm  justify-center px-4 py-1 font-medium text-shadow transition-all',\n\t{\n\t  variants: {\n\t\tintent: {\n\t\t  primary: 'bg-neutral-50 hover:bg-neutral-200 rounded-md',\n\t\t  secondary:\n\t\t\t'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 hover:border-orange-600 text-white',\n\t\t},\n\t\tfullWidth: {\n\t\t  true: 'w-full',\n\t\t},\n\t\trounded: {\n\t\t\ttrue: 'rounded-full'\n\t\t},\n\t\tcentered: {\n\t\t  true: 'm-auto'\n\t\t}\n\t  },\n\t  defaultVariants: {\n\t\tintent: 'primary',\n\t  },\n\t},\n  );\n  \n\nexport interface ButtonProps extends\n\t\tVariantProps<typeof buttonStyles> {\n\t\t\tchildren: string,\n\t\t\thref?: string\n\t\t}\n\nexport default function Button({ intent, children, fullWidth, rounded, centered, href, ...props }: ButtonProps) {\n\t// Conditional rendering based on the presence of 'href'\n\treturn href ? (\n\t\t<a target='_blank' rel='noopener noreferrer' href={href} className={buttonStyles({ intent, fullWidth, centered, rounded })} {...props}>\n\t\t{children}\n\t\t</a>\n\t) : (\n\t\t<button className={buttonStyles({ intent, fullWidth, centered, rounded })} {...props}>\n\t\t{children}\n\t\t</button>\n\t);\n}\n"
  },
  {
    "name": "Card",
    "code": "import { cva, VariantProps } from 'class-variance-authority';\nimport { ReactNode } from 'react';\n\n const cardStyles = cva(\n\t'flex items-center justify-center px-10 py-10 rounded-lg mt-4',\n\t{\n\t\tvariants: {\n\t\t\tintent: {\n\t\t\t\tprimary: 'bg-primary border shadow-sm text-black',\n\t\t\t\tsecondary:\n\t\t\t\t\t'bg-secondary text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500',\n\t\t\t},\n\t\t\tfullWidth: {\n\t\t\t\ttrue: 'w-full',\n\t\t\t},\n\t\t\tcentered: {\n\t\t\t\ttrue: 'm-auto'\n\t\t\t}\n\t\t},\n\t\tdefaultVariants: {\n\t\t\tintent: 'primary',\n\t\t},\n\t},\n);\n\n\n\nexport interface CardProps extends\n\t\tVariantProps<typeof cardStyles> {\n\t\t\tchildren: ReactNode,\n\t\t}\n\nexport default function Card({ intent, children, fullWidth, centered, ...props }: CardProps) {\n\treturn (\n\t\t<div className={cardStyles({ intent, fullWidth, centered })} {...props} >{children}</div>\n\t);\n}\n"
  },
  {
    "name": "CodeBlock",
    "code": "'use client'\n\nimport React, { FC, useState } from 'react';\nimport { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';\n\ntype CodeBlockProps = {\n    codeSnippet: string;\n};\n\nconst CodeBlock: FC<CodeBlockProps> = ({ codeSnippet }) => {\n    const [isCopied, setIsCopied] = useState(false);\n\n    // Copy to Clipboard Function\n    const copyToClipboard = async () => {\n        try {\n            await navigator.clipboard.writeText(codeSnippet);\n            console.log('Code copied to clipboard!');\n            setIsCopied(true);\n            // Hide the message after 1 second\n            setTimeout(() => setIsCopied(false), 1000);\n        } catch (err) {\n            console.error('Error in copying text: ', err);\n        }\n    };\n\n    return (\n        <div className='relative'>\n            <div className='absolute top-5 right-4 flex '>\n            {isCopied && (\n                    <div className='m-0 p-0 text-sm text-slate-200 mr-2'>\n                        Copied to clipboard!\n                    </div>\n                )}\n            <button \n                \n                onClick={copyToClipboard}\n                className='cursor-pointer'>\n                <svg className='stroke-slate-200' xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" ><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/></svg>\n            </button>\n            </div>\n            \n            \n            <SyntaxHighlighter language=\"node-repl\" style={darcula} customStyle={{ paddingTop: \"12px\"}}>\n                {codeSnippet}\n            </SyntaxHighlighter>\n        </div>\n    );\n};\n\nexport default CodeBlock;\n\n\n\n\n\n\n\n"
  },
  {
    "name": "Collapsible",
    "code": "import { cva, VariantProps } from 'class-variance-authority';\nimport React, { useState } from 'react';\n\nconst collapsibleStyles = cva(\n  'transition-all overflow-hidden',\n  {\n    variants: {\n      intent: {\n        primary: 'bg-neutral-50 text-neutral-900',\n        secondary: 'bg-orange-100 text-orange-600',\n      },\n      expanded: {\n        true: 'max-h-screen',\n        false: 'max-h-0',\n      },\n    },\n    defaultVariants: {\n      intent: 'primary',\n      expanded: false\n    },\n  }\n);\n\nexport interface CollapsibleProps extends VariantProps<typeof collapsibleStyles> {\n  children: React.ReactNode,\n  label: string,\n}\n\nexport default function Collapsible({ children, label, intent, expanded, ...props }: CollapsibleProps) {\n  const [isOpen, setIsOpen] = useState(expanded === true);\n\n  return (\n    <div {...props}>\n      <button className='border-2 p-2 rounded-sm' onClick={() => setIsOpen(!isOpen)}>{label}</button>\n      <div className={collapsibleStyles({ intent, expanded: isOpen ? true : false })}>\n        {isOpen && children}\n      </div>\n    </div>\n  );\n}\n"
  },
  {
    "name": "Components",
    "code": "\n// componentsMap.ts\nimport { ComponentType } from 'react';\nimport Button from './Button';\nimport Card from './Card';\nimport Collapsible from './Collapsible';\nimport Avatar from './Avatar';\nimport Badge from './Badge';\nimport DatePicker from './DatePicker';\nimport Dialog from './Dialog';\nimport Dropdown from './Dropdown';\nimport Form from './Form';\nimport Menubar from './Menubar';\nimport NavigationMenu from './NavMenu';\nimport Popover from './Popover';\nimport Select from './Selector';\nimport Switch from './Switch';\nimport Toggle from './Toggle';\nimport Tooltip from './Tooltip';\nimport Textarea from './Textarea';\n// import other components\n\n// Use React.ComponentType<any> to allow any props\nconst componentsMap: Record<string, ComponentType<any>> = {\n  Button: Button,\n  Card: Card,\n  Collapsible: Collapsible,\n  Avatar: Avatar,\n  Badge: Badge,\n  DatePicker: DatePicker,\n  Dialog: Dialog,\n  Dropdown: Dropdown,\n  Form: Form,\n  Menubar: Menubar,\n  NavigationMenu: NavigationMenu,\n  Popover: Popover,\n  Select: Select,\n  Switch: Switch,\n  Toggle: Toggle,\n  Tooltip: Tooltip,\n  Textarea: Textarea\n};\n\nexport default componentsMap;\n"
  },
  {
    "name": "DatePicker",
    "code": "import { cva, VariantProps } from 'class-variance-authority';\nimport React from 'react';\n\nconst datePickerStyles = cva(\n  'border p-2 rounded-md',\n  {\n    variants: {\n      intent: {\n        primary: 'bg-neutral-50 border-neutral-200',\n        secondary: 'bg-orange-100 border-orange-400',\n      },\n    },\n    defaultVariants: {\n      intent: 'primary',\n    },\n  }\n);\n\nexport interface DatePickerProps extends VariantProps<typeof datePickerStyles> {\n  value: string,\n  onChange: (value: string) => void,\n}\n\nexport default function DatePicker({ value, onChange, intent, ...props }: DatePickerProps) {\n  return (\n    <input \n      type=\"date\" \n      value={value} \n      onChange={(e) => onChange(e.target.value)} \n      className={datePickerStyles({ intent })} \n      {...props} \n    />\n  );\n}\n"
  },
  {
    "name": "Dialog",
    "code": "'use client'\n\nimport { cva, VariantProps } from 'class-variance-authority';\nimport React from 'react';\nimport { useState } from 'react';\n\nconst dialogStyles = cva(\n  'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full',\n  {\n    variants: {\n      intent: {\n        primary: 'bg-white',\n        secondary: 'bg-orange-100',\n      },\n      open: {\n        true: 'flex',\n        false: 'hidden',\n      },\n    },\n    defaultVariants: {\n      intent: 'primary',\n      open: false,\n    },\n  }\n);\n\nexport interface DialogProps extends VariantProps<typeof dialogStyles> {\n  isOpen: boolean,\n  onClose: () => void,\n  children: React.ReactNode,\n}\n\nexport default function Dialog({ isOpen, onClose, children, intent, ...props }: DialogProps) {\n    // State to manage if the Dialog is open\n  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);\n\n  // Function to toggle the Dialog open/closed\n  const toggleDialog = () => {\n    setDialogOpen(!isDialogOpen);\n  };\n\n\n  // Function to close the Dialog\n  const handleCloseDialog = () => {\n    setDialogOpen(false);\n  };\n\n  return (\n<>\n    <button onClick={toggleDialog}>\n        {isDialogOpen ? 'Close Dialog' : 'Open Dialog'}\n    </button>\n    {isDialogOpen && (\n    <div className={dialogStyles({ intent, open: isOpen ? true : false })} {...props}>\n      <div className=\"m-auto p-4 rounded-md shadow-lg bg-white\">\n        {children}\n        <button onClick={handleCloseDialog}>Close</button>\n      </div>\n    </div>\n    )}\n</>\n  );\n}\n"
  },
  {
    "name": "Dropdown",
    "code": "'use client'\n\nimport { cva, VariantProps } from 'class-variance-authority';\nimport React, { useState, useEffect, useRef } from 'react';\n\nconst dropdownMenuStyles = cva(\n  'relative inline-block',\n  {\n    variants: {\n      intent: {\n        primary: 'text-neutral-700',\n        secondary: 'text-orange-500',\n      },\n      open: {\n        true: 'visible',\n        \n      },\n    },\n    defaultVariants: {\n      open: false,\n    },\n  }\n);\n\nconst menuStyles = cva(\n  'absolute w-48 py-1 mt-2 bg-white rounded-md shadow-lg border',\n  {\n    variants: {\n      open: {\n        true: 'block',\n        false: 'hidden',\n      },\n    },\n  }\n);\n\nexport interface DropdownMenuProps extends VariantProps<typeof dropdownMenuStyles> {\n  label: React.ReactNode,\n  children: React.ReactNode,\n  intent?: 'primary' | 'secondary',\n}\n\nexport default function Dropdown({ label, children, intent = 'primary', ...props }: DropdownMenuProps) {\n  const [isOpen, setIsOpen] = useState(false);\n  \n  const dropdownRef = useRef<HTMLDivElement>(null);\n\n  // Event listener to close the dropdown if clicked outside\n  useEffect(() => {\n    function handleClickOutside(event: MouseEvent) {\n      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {\n        setIsOpen(false);\n      }\n    }\n\n    // Bind the event listener\n    document.addEventListener(\"mousedown\", handleClickOutside);\n    return () => {\n      // Unbind the event listener on clean up\n      document.removeEventListener(\"mousedown\", handleClickOutside);\n    };\n  }, [dropdownRef]);\n\n  return (\n    <div ref={dropdownRef} className={dropdownMenuStyles({ intent, open: isOpen ? true : false })} {...props}>\n      <button onClick={() => setIsOpen(!isOpen)}>{label}</button>\n      <div className={menuStyles({ open: isOpen ? true : false })}>\n        {children}\n      </div>\n    </div>\n  );\n}\n"
  },
  {
    "name": "Form",
    "code": "import { cva, VariantProps } from 'class-variance-authority';\nimport React from 'react';\n\nconst formStyles = cva(\n  'space-y-4',\n  {\n    variants: {\n      intent: {\n        primary: 'text-neutral-700',\n        secondary: 'text-orange-500',\n      },\n    },\n    defaultVariants: {\n      intent: 'primary',\n    },\n  }\n);\n\nexport interface FormProps extends VariantProps<typeof formStyles>, React.FormHTMLAttributes<HTMLFormElement> {\n  children: React.ReactNode,\n}\n\nexport default function Form({ children, intent, ...props }: FormProps) {\n  return (\n    <form className={formStyles({ intent })} {...props}>\n      {children}\n    </form>\n  );\n}\n"
  },
  {
    "name": "Icon",
    "code": ""
  },
  {
    "name": "Menubar",
    "code": "import { cva, VariantProps } from 'class-variance-authority';\nimport React from 'react';\n\nconst menubarStyles = cva(\n  'flex space-x-4',\n  {\n    variants: {\n      intent: {\n        primary: 'bg-neutral-50 text-neutral-900',\n        secondary: 'bg-orange-100 text-orange-600',\n      },\n    },\n    defaultVariants: {\n      intent: 'primary',\n    },\n  }\n);\n\nexport interface MenubarProps extends VariantProps<typeof menubarStyles> {\n  children: React.ReactNode,\n}\n\nexport default function Menubar({ children, intent, ...props }: MenubarProps) {\n  return (\n    <nav className={menubarStyles({ intent })} {...props}>\n      {children}\n    </nav>\n  );\n}\n"
  },
  {
    "name": "NavMenu",
    "code": "import { cva, VariantProps } from 'class-variance-authority';\nimport React from 'react';\n\nconst navigationMenuStyles = cva(\n  'flex space-x-4',\n  {\n    variants: {\n      intent: {\n        primary: 'bg-neutral-50 text-neutral-900',\n        secondary: 'bg-orange-100 text-orange-600',\n      },\n    },\n    defaultVariants: {\n      intent: 'primary',\n    },\n  }\n);\n\nexport interface NavigationMenuProps extends VariantProps<typeof navigationMenuStyles> {\n  children: React.ReactNode,\n}\n\nexport default function NavigationMenu({ children, intent, ...props }: NavigationMenuProps) {\n  return (\n    <nav className={navigationMenuStyles({ intent })} {...props}>\n      {children}\n    </nav>\n  );\n}\n"
  },
  {
    "name": "Popover",
    "code": "import { cva, VariantProps } from 'class-variance-authority';\nimport React, { useState } from 'react';\n\nconst popoverStyles = cva(\n  'relative inline-block',\n  {\n    variants: {\n      intent: {\n        primary: 'text-neutral-700',\n        secondary: 'text-orange-500',\n      },\n      open: {\n        true: 'visible',\n        \n      },\n    },\n    defaultVariants: {\n      open: false,\n    },\n  }\n);\n\nconst contentStyles = cva(\n  'absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-lg border',\n  {\n    variants: {\n      open: {\n        true: 'block',\n        false: 'hidden',\n      },\n    },\n  }\n);\n\nexport interface PopoverProps extends VariantProps<typeof popoverStyles> {\n  buttonContent: React.ReactNode,\n  popoverContent: React.ReactNode,\n  intent?: 'primary' | 'secondary',\n}\n\nexport default function Popover({ buttonContent, popoverContent, intent = 'primary', ...props }: PopoverProps) {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <div className={popoverStyles({ intent, open: isOpen ? true : false })} {...props}>\n      <button onClick={() => setIsOpen(!isOpen)}>{buttonContent}</button>\n      <div className={contentStyles({ open: isOpen ? true : false })}>\n        {popoverContent}\n      </div>\n    </div>\n  );\n}\n"
  },
  {
    "name": "Progress",
    "code": "import { cva, VariantProps } from 'class-variance-authority';\nimport React from 'react';\n\nconst progressBarStyles = cva(\n  'w-full h-4 bg-gray-200 rounded-full overflow-hidden',\n  {\n    variants: {\n      intent: {\n        primary: 'bg-neutral-200',\n        secondary: 'bg-orange-100',\n      },\n    },\n  }\n);\n\nconst progressStyles = cva(\n  'h-full rounded-full',\n  {\n    variants: {\n      intent: {\n        primary: 'bg-blue-600',\n        secondary: 'bg-orange-500',\n      },\n    },\n  }\n);\n\nexport interface ProgressProps extends VariantProps<typeof progressStyles> {\n  value: number, // Percentage of progress\n}\n\nexport default function Progress({ value, intent, ...props }: ProgressProps) {\n  return (\n    <div className={progressBarStyles({ intent })} {...props}>\n      <div className={progressStyles({ intent })} style={{ width: \\`${value}%\\` }} />\n    </div>\n  );\n}\n"
  },
  {
    "name": "Select",
    "code": "'use client'\n\nimport React, { FC, ReactNode, useState } from 'react';\nimport Button from './Button';\nimport Card from './Card';\nimport Progress from './Progress';\nimport Collapsible from './Collapsible';\nimport Avatar from './Avatar';\nimport Badge from './Badge';\nimport DatePicker from './DatePicker';\nimport Dialog from './Dialog';\nimport Dropdown from './Dropdown';\nimport Form from './Form';\nimport Menubar from './Menubar';\nimport NavigationMenu from './NavMenu';\nimport Popover from './Popover';\nimport Select from './Selector';\nimport Switch from './Switch';\nimport Toggle from './Toggle';\nimport Tooltip from './Tooltip';\nimport Textarea from './Textarea';\nimport { componentsData } from '@/app/data/components';\nimport { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';\nimport Link from 'next/link';\n\n\ntype CodeBlockProps = {\n    codeSnippet: string;\n};\n\nconst CodeBlock: FC<CodeBlockProps> = ({ codeSnippet }) => {\n  const [isCopied, setIsCopied] = useState(false);\n\n  // Copy to Clipboard Function\n  const copyToClipboard = async () => {\n      try {\n          await navigator.clipboard.writeText(codeSnippet);\n          console.log('Code copied to clipboard!');\n          setIsCopied(true);\n          // Hide the message after 2 seconds\n          setTimeout(() => setIsCopied(false), 1000);\n      } catch (err) {\n          console.error('Error in copying text: ', err);\n      }\n  };\n\n    return (\n     \n        <div className='relative'>\n          \n          <div className='absolute top-5 right-4 flex items-center'>\n            {isCopied && (\n                    <div className='m-0 p-0 text-sm text-slate-200 mr-2'>\n                        Copied to clipboard!\n                    </div>\n                )}\n            <button \n                onClick={copyToClipboard}\n                className='cursor-pointer'\n            >\n                <svg className='stroke-slate-200' xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" ><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/></svg>\n            </button>\n            </div>\n           \n                \n            <SyntaxHighlighter useInlineStyles  language=\"typescript\" style={darcula} customStyle={{ paddingTop: \"40px\"}}>\n                {codeSnippet}\n            </SyntaxHighlighter>\n            \n        </div>\n        \n    );\n};\n\n\n\n\n// Adjust the path as necessary\n\nconst SelectComponent = () => {\n  const [selectedComponent, setSelectedComponent] = useState('');\n  const [codeSnippet, setCodeSnippet] = useState('');\n  const [viewMode, setViewMode] = useState('preview');\n  const [intent, setIntent] = useState('primary'); // New state for intent\n  const [isRounded, setIsRounded] = useState(false); \n  const [date, setDate] = useState<string>('');\n\n  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);\n\n  // Function to close the Dialog\n  const handleCloseDialog = () => {\n    setDialogOpen(false);\n  };\n\n  // Function to handle date change, with the parameter typed as a string\n  const handleDateChange = (newDate: string) => {\n    setDate(newDate);\n  };\n\n  const handleComponentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {\n    const selectedName = event.target.value;\n    setSelectedComponent(selectedName);\n\n    const componentData = componentsData.find(comp => comp.name === selectedName);\n    if (componentData) {\n      setCodeSnippet(componentData.code);\n    } else {\n      setCodeSnippet('');\n    }\n\n    setViewMode('preview');\n  };\n\n\n\n  const renderDynamicComponent = () => {\n    if (!selectedComponent) {\n      \n      return <div className=\" py-4\">Oh, hi. Nothing to see here. Select a component!</div>;\n    }\n\n    \n\n    switch (selectedComponent) {\n      case 'Button':\n        return <Card intent={\"primary\"}><Button rounded intent={\"secondary\"}>Button</Button></Card>;\n    \n      case 'Card':\n        return <Card><div>Content for Card</div></Card>;\n    \n      case 'Collapsible':\n        return <Card><Collapsible label='collapse' intent={\"primary\"}><div><p>reveal</p></div></Collapsible></Card>;\n    \n      case 'Avatar':\n        return <Card><Avatar alt='Avatar' intent={'primary'} size={'large'} src='/favicon.ico' /></Card>;\n    \n      case 'Badge':\n        return <Card><Badge intent={'primary'}>badge</Badge></Card>;\n    \n      case 'DatePicker':\n        return <Card><DatePicker onChange={handleDateChange} value={date} intent={\"primary\"} /></Card>;\n    \n      case 'Dialog':\n        return <Card><Dialog isOpen onClose={handleCloseDialog} intent={'primary'}><div>Tis the dialog</div></Dialog></Card>;\n    \n      case 'Dropdown':\n        return <Card><Dropdown open={true} label={'menu'}><ul><li><a href=\"/\">link</a></li><li>link</li></ul></Dropdown></Card>;\n    \n      // Add the remaining components here:\n      case 'Form':\n        return <Card><Form><h1>form</h1><button>submit</button></Form></Card>;\n    \n      case 'Menubar':\n        return <Card><Menubar><Link href='/'>home</Link><Link href='/'>home</Link></Menubar></Card>;\n    \n      case 'NavigationMenu':\n        return <Card><NavigationMenu><Link href='/'>home</Link><Link href='/'>home</Link></NavigationMenu></Card>;\n    \n      case 'Popover':\n        return <Card><Popover buttonContent=\"Open Popover\" popoverContent={<div>Popover content</div>} intent=\"primary\" /></Card>;\n    \n      case 'Progress':\n        return <Card><Progress value={50} intent=\"primary\" /></Card>;\n    \n      case 'Select':\n        return <Card><Select><option value=\"link\">test</option><option value=\"link\">test</option></Select></Card>;\n    \n      case 'Switch':\n        return <Card><Switch checked={true} /></Card>;\n    \n      case 'Textarea':\n        return <Card><Textarea intent=\"primary\" /></Card>;\n    \n      case 'Toggle':\n        return <Card><Toggle  /></Card>;\n\n        case 'Tooltip':\n          return <Card><Tooltip content=\"Tooltip text\" intent=\"primary\"></Tooltip></Card>;\n    \n\n        default:\n            return null;\n    }\n  };\n\n  return (\n    <div>\n      <select className='mb-2 p-2 rounded-md cursor-pointer' onChange={handleComponentChange} value={selectedComponent}>\n      <option value=\"Select Component\">Select Component</option>\n      <option value=\"Avatar\">Avatar</option>\n      <option value=\"Badge\">Badge</option>\n      <option value=\"Button\">Button</option>\n  \n      <option value=\"Card\">Card</option>\n      <option value=\"Collapsible\">Collapsible</option>\n      \n      <option value=\"DatePicker\">Date Picker</option>\n      <option value=\"Dialog\">Dialog</option>\n      <option value=\"Dropdown\">Dropdown Menu</option>\n      <option value=\"Form\">Form</option>\n      <option value=\"Menubar\">Menubar</option>\n      <option value=\"NavigationMenu\">Navigation Menu</option>\n      <option value=\"Popover\">Popover</option>\n      <option value=\"Progress\">Progress</option>\n      <option value=\"Select\">Select</option>\n      <option value=\"Switch\">Switch</option>\n      <option value=\"Textarea\">Textarea</option>\n     \n      <option value=\"Toggle\">Toggle</option>\n      <option value=\"Tooltip\">Tooltip</option>\n\n      \n      </select>\n\n    {selectedComponent && (\n      <div className=\"flex gap-2 mb-2 border-b border-gray-300\">\n        <span \n          className={\\`cursor-pointer ${viewMode === 'preview' ? 'border-b-2 border-orange-500' : ''}\\`}\n          onClick={() => setViewMode('preview')}\n        >\n          Preview\n        </span>\n        <span \n          className={\\`cursor-pointer  ${viewMode === 'code' ? 'border-b-2 border-orange-500' : ''}\\`}\n          onClick={() => setViewMode('code')}\n        >\n          Code\n        </span>\n      </div>\n    )}\n\n    {viewMode === 'preview' ? renderDynamicComponent() : (selectedComponent && <CodeBlock codeSnippet={codeSnippet} />)}\n</div> \n  );\n};\n\nexport default SelectComponent;\n"
  },
  {
    "name": "Selector",
    "code": "import { cva, VariantProps } from 'class-variance-authority';\nimport React from 'react';\n\nconst selectStyles = cva(\n  'block w-full pl-3 pr-10 py-2 text-base border rounded-md focus:outline-none focus:ring-1',\n  {\n    variants: {\n      intent: {\n        primary: 'border-neutral-300 focus:border-neutral-500 focus:ring-neutral-500',\n        secondary: 'border-orange-300 focus:border-orange-500 focus:ring-orange-500',\n      },\n    },\n    defaultVariants: {\n      intent: 'primary',\n    },\n  }\n);\n\nexport interface SelectProps extends VariantProps<typeof selectStyles>, React.SelectHTMLAttributes<HTMLSelectElement> {\n  children: React.ReactNode,\n}\n\nexport default function Select({ children, intent, ...props }: SelectProps) {\n  return (\n    <select className={selectStyles({ intent })} {...props}>\n      {children}\n    </select>\n  );\n}\n"
  },
  {
    "name": "Switch",
    "code": "'use client'\n\nimport { cva, VariantProps } from 'class-variance-authority';\nimport React, { useState } from 'react';\n\nconst switchStyles = cva(\n  'relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in',\n  {\n    variants: {\n      intent: {\n        primary: 'bg-neutral-200',\n        secondary: 'bg-orange-200',\n      },\n      checked: {\n        true: 'bg-blue-600',\n        false: 'bg-gray-300',\n      },\n    },\n  }\n);\n\nconst switchToggleStyles = cva(\n  'absolute block w-6 h-6 rounded-full bg-white border border-gray-300 shadow transform transition ease-in-out duration-200',\n  {\n    variants: {\n      checked: {\n        true: 'translate-x-full border-blue-600',\n        false: 'translate-x-0',\n      },\n    },\n  }\n);\n\nexport interface SwitchProps {\n  checked: boolean,\n  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void, \n  intent?: 'primary' | 'secondary',\n}\n\nexport default function Switch({ checked, onChange, intent = 'primary' }: SwitchProps) {\n\n    const [isSwitchOn, setIsSwitchOn] = useState(false);\n    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n        setIsSwitchOn(event.target.checked);\n      };\n\n    \n  return (\n    <label className={switchStyles({ intent, checked })}>\n      <input type=\"checkbox\" className=\"hidden\" checked={isSwitchOn} onChange={handleSwitchChange} />\n      <span className={switchToggleStyles({ checked })} />\n    </label>\n  );\n}\n"
  },
  {
    "name": "Textarea",
    "code": "import React from 'react';\nimport { cva, VariantProps } from 'class-variance-authority';\n\nconst textareaStyles = cva(\n  'block w-full p-2 border rounded-md focus:outline-none focus:ring-1',\n  {\n    variants: {\n      intent: {\n        primary: 'border-neutral-300 focus:border-neutral-500 focus:ring-neutral-500',\n        secondary: 'border-orange-300 focus:border-orange-500 focus:ring-orange-500',\n      },\n    },\n    defaultVariants: {\n      intent: 'primary',\n    },\n  }\n);\n\nexport interface TextareaProps extends VariantProps<typeof textareaStyles>, React.TextareaHTMLAttributes<HTMLTextAreaElement> {}\n\nconst Textarea: React.FC<TextareaProps> = ({ intent, ...props }) => {\n  return <textarea className={textareaStyles({ intent })} {...props} />;\n};\n\nexport default Textarea;\n"
  },
  {
    "name": "Toggle",
    "code": "import { cva, VariantProps } from 'class-variance-authority';\nimport React, { useState } from 'react';\n\nconst toggleStyles = cva(\n  'relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in',\n  {\n    variants: {\n      intent: {\n        primary: 'bg-neutral-200',\n        secondary: 'bg-orange-200',\n      },\n      on: {\n        true: 'bg-blue-600',\n        false: 'bg-gray-300',\n      },\n    },\n  }\n);\n\nconst toggleCircleStyles = cva(\n  'absolute block w-6 h-6 rounded-full bg-white border border-gray-300 shadow transform transition ease-in-out duration-200',\n  {\n    variants: {\n      on: {\n        true: 'translate-x-full border-blue-600',\n        false: 'translate-x-0',\n      },\n    },\n  }\n);\n\nexport interface ToggleProps {\n    defaultOn?: boolean, // Optional prop to set the initial state\n    onChange?: (isOn: boolean) => void, // Optional callback\n    intent?: 'primary' | 'secondary',\n  }\n  \n  const Toggle: React.FC<ToggleProps> = ({ defaultOn = false, onChange, intent = 'primary' }) => {\n    const [isOn, setIsOn] = useState(defaultOn);\n  \n    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n      const newState = event.target.checked;\n      setIsOn(newState);\n      onChange?.(newState); // Call the onChange callback if it exists\n    };\n  \n    return (\n      <label className={toggleStyles({ intent, on: isOn })}>\n        <input \n          type=\"checkbox\" \n          className=\"hidden\" \n          checked={isOn} \n          onChange={handleChange} \n        />\n        <span className={toggleCircleStyles({ on: isOn })} />\n      </label>\n    );\n  };\n  \n  export default Toggle;\n"
  },
  {
    "name": "Tooltip",
    "code": "import { cva, VariantProps } from 'class-variance-authority';\nimport React, { useState } from 'react';\n\nconst tooltipStyles = cva(\n  'relative cursor-pointer',\n  {\n    variants: {\n      intent: {\n        primary: 'text-neutral-700',\n        secondary: 'text-orange-500',\n      },\n      visible: {\n        true: 'visible',\n        \n      },\n    },\n    defaultVariants: {\n      visible: false,\n    },\n  }\n);\n\nconst tooltipContentStyles = cva(\n  'absolute z-10 w-32 py-2 px-2 mt-1 bg-white rounded-md shadow-lg border',\n  {\n    variants: {\n      visible: {\n        true: 'block',\n        false: 'hidden',\n      },\n    },\n  }\n);\n\nexport interface TooltipProps extends VariantProps<typeof tooltipStyles> {\n  content: string,\n  intent?: 'primary' | 'secondary',\n}\n\nexport default function Tooltip({ content, intent = 'primary', ...props }: TooltipProps) {\n  const [isVisible, setIsVisible] = useState(false);\n\n  return (\n    <div \n      className={tooltipStyles({ intent, visible: isVisible ? true : false })} \n      onMouseEnter={() => setIsVisible(true)}\n      onMouseLeave={() => setIsVisible(false)}\n      {...props}\n    >\n      {content}\n      <span className={tooltipContentStyles({ visible: isVisible ? true : false })}>\n        {content}\n      </span>\n    </div>\n  );\n}\n"
  }
];