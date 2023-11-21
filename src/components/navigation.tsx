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

        <button className="lg:hidden" title="Toggle Hamburger" type="button" onClick={handleToggle}>
          <img src={isToggled ? '/icon-menu-close.svg' : '/icon-menu.svg'} alt="Toggle button" />
        </button>

        <div
          className={cn(
            'fixed right-0 top-0 h-screen w-[80%] lg:static lg:flex lg:h-fit lg:w-fit',
            !isToggled && 'hidden',
          )}
        >
          <ul className="flex flex-col gap-8 pb-20 pt-4 lg:w-fit lg:flex-row lg:gap-8 lg:p-0">
            {['Home', 'New', 'Popular', 'Trending', 'Categories'].map((item) => (
              <li key={item}>
                <a
                  className="text-gray-500 transition-colors hover:text-soft-red"
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
