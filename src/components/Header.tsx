import React, { useState, useCallback } from 'react'
import LOGO from './../images/logo.svg'
import SEARCH from './../images/search.svg'
import { HiX, HiMenu } from 'react-icons/hi'
type Props = {}

export function Header({}: Props) {
  const [isOpen, setOpen] = useState<boolean>(false)
  const navNodes = ['Home', 'Sobre', 'Categorias', 'Contato']

  const handleMenuClick = useCallback(() => {
    setOpen(!isOpen)
  }, [isOpen])
  return (
    <>
      <header className="w-full lg:w-4/5 grid grid-cols-2 lg:grid-cols-3 grid-flow-row py-10">
        <div className="flex items-center">
          <img className="max-w-xs" src={LOGO} alt="" />
        </div>
        <div className="hidden lg:flex lg:flex-grow justify-center items-center">
          {navNodes.map((element: string, idx: number) => {
            return (
              <span
                key={idx}
                className="px-1 mx-4 text-rocket-blog-light-purple font-bold cursor-pointer transition border-l-2
                border-l-transparent  hover:border-l-rocket-blog-green"
              >
                {element}
              </span>
            )
          })}
        </div>
        <div className="lg:flex h-10 hidden items-center justify-end">
          <input
            placeholder="Buscar"
            type="search"
            className=" h-full bg-rocket-blog-dark px-3 text-white rounded-tl-sm rounded-bl-sm 
              border-rocket-blog-button transition-all"
          />
          <img
            src={SEARCH}
            alt=""
            className="h-full p-2 bg-rocket-blog-button rounded-tr-sm rounded-br-sm"
          />
        </div>
        <div className="flex flex-grow lg:hidden justify-end  items-center">
          {isOpen ? (
            <HiX
              className="text-3xl sm:text-4xl text-rocket-blog-white animate-pulse cursor-pointer"
              onClick={handleMenuClick}
            />
          ) : (
            <HiMenu
              className="text-3xl sm:text-4xl text-rocket-blog-white animate-pulse cursor-pointer"
              onClick={handleMenuClick}
            />
          )}
        </div>
      </header>
      {isOpen ? (
        <div className="w-full flex flex-col py-3 bg-rocket-blog-dark px-4 mb-8 ">
          {navNodes.map((element: string, idx: number) => {
            return (
              <button
                key={idx}
                className="px-4 py-2 text-left text-rocket-blog-light-purple font-bold cursor-pointer transition border-l-2
                border-l-transparent  hover:border-l-rocket-blog-green"
              >
                {element}
              </button>
            )
          })}
          <div className="lg:hidden w-full px-4 h-10 flex items-center mt-3">
            <input
              placeholder="Buscar"
              type="search"
              className=" h-full bg-rocket-blog-purple px-3 text-white rounded-tl-sm rounded-bl-sm 
              border-rocket-blog-button transition-all"
            />
            <img
              src={SEARCH}
              alt=""
              className="h-full p-2 bg-rocket-blog-button rounded-tr-sm rounded-br-sm"
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
