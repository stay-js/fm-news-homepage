import { useState } from 'react';
import { cn } from '~/utils/cn';

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
    <nav className="flex w-full select-none items-center pb-12 pt-8 lg:pt-24">
      <div className="content flex w-full items-center justify-between">
        <img src="/logo.svg" alt="Logo" />

        <button
          className="z-10 lg:hidden"
          title="Toggle Hamburger"
          type="button"
          onClick={handleToggle}
        >
          <img src={isToggled ? '/icon-menu-close.svg' : '/icon-menu.svg'} alt="Toggle button" />
        </button>

        <div
          className={cn(
            'fixed inset-0 flex items-center justify-end bg-[hsl(240,_100%,_5%,_60%)] lg:static lg:flex lg:h-fit lg:w-fit lg:bg-transparent',
            !isToggled && 'hidden',
          )}
        >
          <ul className="flex h-screen w-8/12 flex-col gap-6 bg-off-white px-6 pt-32 lg:h-fit lg:w-fit lg:flex-row lg:gap-8 lg:p-0">
            {['Home', 'New', 'Popular', 'Trending', 'Categories'].map((item) => (
              <li key={item}>
                <a
                  className="text-xl text-gray-500 transition-colors hover:text-soft-red lg:text-base"
                  onClick={handleClose}
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
