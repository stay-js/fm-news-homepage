import { useState } from 'react';
import { cn } from '~/utils/cn';
import { navItems } from '~/constants/nav-items';

export const Navigation: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleClose = () => {
    setIsToggled(false);
    document.body.style.overflowY = 'scroll';
  };

  const handleToggle = () => {
    setIsToggled((value) => {
      value
        ? (document.body.style.overflowY = 'scroll')
        : (document.body.style.overflowY = 'hidden');

      return !value;
    });
  };

  return (
    <nav className="flex h-20 w-full select-none items-center">
      <div className="content flex w-full items-center justify-between">
        <img src="/logo.svg" alt="Logo" />

        <button
          className="h-6 w-6 lg:hidden"
          title="Toggle Hamburger"
          type="button"
          onClick={handleToggle}
        >
          <img src={isToggled ? '/icon-menu-close.svg' : '/icon-menu.svg'} alt="Toggle button" />
        </button>

        <div
          className={cn(
            'fixed left-0 top-20 h-[calc(100vh-5rem)] w-full overflow-y-auto lg:static lg:flex lg:h-fit lg:w-fit',
            !isToggled && 'hidden',
          )}
        >
          <ul className="content flex flex-col gap-8 pb-20 pt-4 lg:w-fit lg:flex-row lg:gap-1 lg:p-0">
            {navItems.map(({ path, name }) => (
              <li key={path}>
                <a
                  className="relative flex items-center gap-2 font-bold text-black transition-colors after:absolute after:-bottom-4 after:h-px after:w-full after:bg-neutral-300 lg:static lg:rounded-md lg:px-3 lg:py-2 lg:font-medium lg:after:hidden lg:hover:bg-neutral-300"
                  onClick={handleClose}
                  href={path}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
