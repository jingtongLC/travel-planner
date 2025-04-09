"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [language, setLanguage] = useState("中文")

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">打开菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="grid gap-6 py-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={() => {}}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%A3%9E%E7%8C%AALOGO-sWXpB94jDRMYywkDCX0gZN1oyji4pV.png"
                    alt="飞猪旅行"
                    width={24}
                    height={24}
                  />
                  <span>飞猪旅行</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%A3%9E%E7%8C%AALOGO-sWXpB94jDRMYywkDCX0gZN1oyji4pV.png"
              alt="飞猪旅行"
              width={28}
              height={28}
            />
            <span className="text-xl font-bold">飞猪旅行</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">切换主题</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>浅色</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>深色</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>系统</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                {language}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("中文")}>中文</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("English")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("한국어")}>한국어</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
