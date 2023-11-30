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
    <nav className="flex w-full select-none items-center justify-between py-12">
      <img src="/logo.svg" alt="Logo" />

      <button
        className="z-10 h-10 w-10 lg:hidden"
        title="Toggle Hamburger"
        type="button"
        onClick={handleToggle}
      >
        <span
          className={cn(
            'absolute block h-[3px] w-10 bg-current transition-all duration-300',
            isToggled ? 'rotate-45' : '-translate-y-2',
          )}
        />
        <span
          className={cn(
            'absolute block h-[3px] w-10 bg-current transition-all duration-300',
            isToggled && 'opacity-0',
          )}
        />
        <span
          className={cn(
            'absolute block h-[3px] w-10 bg-current transition-all duration-300',
            isToggled ? '-rotate-45' : 'translate-y-2',
          )}
        />
      </button>

      <div
        className={cn(
          'fixed inset-0 flex items-center justify-end bg-[hsl(240,_100%,_5%,_60%)] lg:static lg:flex lg:h-fit lg:w-fit lg:bg-transparent',
          !isToggled && 'hidden',
        )}
      >
        <ul className="flex h-screen w-8/12 flex-col gap-6 bg-off-white px-6 pt-32 lg:h-fit lg:w-fit lg:flex-row lg:gap-8 lg:p-0">
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <a
                className="text-xl text-dark-grayish-blue transition-colors hover:text-soft-red lg:text-base"
                onClick={handleClose}
                href={path}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
