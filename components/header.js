import Link from 'next/link'
import { useCart } from 'react-use-cart'

import { formatCurrencyValue } from '@/utils/format-currency-value'
import { HygraphSVG } from '@/svgs'
import { ShoppingCartIcon } from '@/icons'
import { useSettingsContext } from '@/context/settings'

function Header({ pages = [] }) {
  const { cartTotal } = useCart()
  const { activeCurrency } = useSettingsContext()

  return (
    <>
      <div className="w-full h-2.5 bg-yellow-300" />
      <div className="w-full h-2.5 bg-blue-700" />
      <div className="w-full h-2.5 bg-red-600" />
      <header className="mx-auto bg-white w-full flex flex-row items-center justify-between px-4 sm:px-6">
        <div className="py-6 w-full">
          <nav className="flex items-center justify-between flex-wrap space-x-4">
            <Link href="/">
              <HygraphSVG className="h-auto text-primary w-5" />
            </Link>
            {pages.length ? (
              <ul className="hidden md:mx-auto md:block md:flex-grow">
                {pages.map((page) => (
                  <li
                    key={page.id}
                    className="block my-4 md:inline-block md:my-0"
                  >
                    <Link
                      href={`/${page.type.toLowerCase()}/${page.slug}`}
                      className="text-lightgray hover:text-slategray hover:bg-gainsboro rounded-full py-2 px-3 font-medium"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="flex items-center">
              <Link href="/cart" className="flex space-x-2">
                <ShoppingCartIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
                <span className="text-gray-900">
                  {formatCurrencyValue({
                    currency: activeCurrency,
                    value: cartTotal
                  })}
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
