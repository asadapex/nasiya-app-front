import { useState } from 'react'
import { Home, Users, FolderOpen, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

const Menu = () => {
  const [activeItem, setActiveItem] = useState('/')

  const menuItems = [
    {
      id: '/',
      label: 'Asosiy',
      icon: Home,
    },
    {
      id: '/customers',
      label: 'Mijozlar',
      icon: Users,
    },
    {
      id: '/reports',
      label: 'Hisobot',
      icon: FolderOpen,
    },
    {
      id: '/settings',
      label: 'Sozlama',
      icon: Settings,
    },
  ]

  return (
    <div className="bg-white border-t border-gray-200 px-4 containers h-[60px] fixed bottom-0 left-0 right-0 z-50">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.id

          return (
            <Link to={`${item.id}`} key={item.id}>
              <button
                onClick={() => setActiveItem(item.id)}
                className={`flex flex-col items-center cursor-pointer justify-center px-3 rounded-lg transition-colors duration-200 min-w-0 flex-1 ${isActive
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                <Icon
                  size={20}
                  className={`mb-1 ${isActive ? 'text-blue-600' : 'text-gray-500'}`}
                />
                <span
                  className={`text-xs font-medium truncate ${isActive ? 'text-blue-600' : 'text-gray-500'
                    }`}
                >
                  {item.label}
                </span>
              </button></Link>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
