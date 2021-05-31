import * as Popover from '@radix-ui/react-popover'

const AccountPopover = ({ className }) => {
  return (
    <Popover.Root>
      <Popover.Trigger className={className}>
        <svg
          className="w-5 fill-current text-brand-beige"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="m0 12.8c0-4.48042 0-6.72063.871948-8.43192.766982-1.5053 1.990832-2.72915 3.496132-3.496132 1.71129-.871948 3.9515-.871948 8.43192-.871948h11.2v11.2c0 4.4804 0 6.7206-.8719 8.4319-.767 1.5053-1.9909 2.7292-3.4962 3.4962-1.7113.8719-3.9515.8719-8.4319.8719h-11.2zm12.0005-1.8c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5-3.50001 1.567-3.50001 3.5 1.56701 3.5 3.50001 3.5zm-6.50001 9c0-9.3334 13.00001-9.3333 13.00001 0z"
            fillRule="evenodd"
          />
        </svg>
      </Popover.Trigger>
      <Popover.Content
        className="overflow-y-scroll w-[450px] max-h-[80vh] bg-white shadow-lg rounded-lg origin-radix-popover-content animate-fadeDown"
        sideOffset={10}
      >
        <div className="flex w-full px-4 py-6 bg-bottom bg-cover rounded-t-lg h-36 sm:px-6 lg:px-8 bg-login-cover bg-blend-multiply">
          <div className="flex flex-col items-start justify-between w-[50%]">
            <h2 className="text-3xl text-center text-brand-beige font-header font-body">Sign in</h2>
            <p className="mt-2 text-lg font-medium text-center text-brand-beige font-body">
              Or{' '}
              <a href="#" className="underline text-brand-beige hover:text-gray-100">
                create an account
              </a>
            </p>
          </div>
          <div className="flex flex-col items-end justify-between w-[50%]">
            <span className="flex flex-wrap">
              <p className="text-lg font-medium font-body text-brand-beige">About</p>
              <p className="ml-2 text-lg font-medium font-body text-brand-beige">Impact</p>
              <p className="ml-2 text-lg font-medium font-body text-brand-beige">Contact</p>
            </span>
            <span className="flex">
              <svg
                className="w-5 fill-current text-brand-beige"
                fill="#493b36"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m8 0c-4.41828 0-8 3.58172-8 8v16h16c.0551 0 .1101-.0006.165-.0017h-3.2602v-8.9442h-2.9048v-3.5547h2.9048v-2.80062c0-3.04308 1.8031-4.69878 4.4354-4.69878 1.2616 0 2.3448.09749 2.6598.14082v3.17974h-1.8257c-1.4315 0-1.7082.70327-1.709 1.73069v2.44895h3.2306l-.4425 3.5547h-2.7873v8.9317c4.2014-.2413 7.5339-3.7248 7.5339-7.9866v-16z"
                  fillRule="evenodd"
                />
              </svg>
              <svg
                className="w-5 ml-3 fill-current text-brand-beige"
                fill="#493b36"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m.871948 4.36808c-.871948 1.71129-.871948 3.9515-.871948 8.43192v11.2h11.2c4.4804 0 6.7206 0 8.4319-.8719 1.5053-.767 2.7292-1.9909 3.4962-3.4962.8719-1.7113.8719-3.9515.8719-8.4319v-11.2h-11.2c-4.48042 0-6.72063 0-8.43192.871948-1.5053.766982-2.72915 1.990832-3.496132 3.496132zm18.715452 2.39545c.1969.50654.3344 1.09112.3719 1.94143.0375.85348.0407 1.12543.0407 3.29814 0 2.1727-.0094 2.4447-.0469 3.2982-.0375.8503-.1751 1.4318-.372 1.9414-.4158 1.0754-1.2661 1.9257-2.3416 2.3415-.5064.197-1.091.3345-1.9413.372-.8535.0376-1.1254.0469-3.2981.0469-2.17276 0-2.44484-.0093-3.2982-.0469-.85043-.0375-1.43183-.175-1.94143-.372-.53145-.2-1.01602-.5158-1.4162-.9222-.40641-.4002-.72208-.8816-.92528-1.4193-.19698-.5065-.33461-1.0911-.3721-1.9414-.03749-.8535-.04689-1.1255-.04689-3.2982 0-2.17271.0094-2.44466.05007-3.30132.03749-.85031.17499-1.43171.37197-1.94131.20015-.53145.51582-1.01602.92223-1.4162.40018-.40958.88157-.7222 1.41938-.92541.50642-.19685 1.091-.33448 1.94131-.37197.85348-.03749 1.12543-.04689 3.29814-.04689 2.1727 0 2.4447.0094 3.3013.05007.8504.03749 1.4319.17499 1.9414.37197.5314.20003 1.016.51582 1.4162.92223.4095.40018.7222.88157.9254 1.41926zm-1.3443 9.96017c.1094-.2814.2407-.7034.2751-1.485.0375-.844.0469-1.0941.0469-3.2294 0-2.13519-.0094-2.38834-.0469-3.23242-.0344-.7785-.1657-1.20359-.2751-1.48495-.1282-.34706-.3314-.65968-.5972-.91918-.2563-.26573-.5721-.46893-.919-.59703-.2814-.10942-.7034-.2407-1.485-.27514-.841-.03749-1.0942-.04689-3.2326-.04689-2.13507 0-2.38834.0094-3.23242.04689-.77838.03444-1.20359.16572-1.48495.27514-.34706.1281-.65968.3313-.91906.59703-.2689.25645-.47211.57212-.60033.91918-.10942.28136-.24069.7034-.27501 1.48495-.03761.84091-.04689 1.09723-.04689 3.23242 0 2.1353.00928 2.3885.04689 3.2326.03432.7784.16559 1.2036.27501 1.485.12822.3469.33143.6595.59716.919.25632.2658.57212.469.91905.5972.28136.1094.7034.2407 1.48496.275.84102.0376 1.09735.0469 3.23259.0469 2.1352 0 2.3884-.0093 3.2324-.0469.7785-.0343 1.2036-.1656 1.485-.275.6972-.2689 1.2505-.8222 1.5194-1.5194zm-6.2398-8.83156c-2.26952 0-4.11094 1.8413-4.11094 4.11096 0 2.2697 1.84142 4.111 4.11094 4.111 2.2697 0 4.111-1.8413 4.111-4.111 0-2.26966-1.8413-4.11096-4.111-4.11096zm0 6.77766c-1.4723 0-2.66665-1.1942-2.66665-2.6667s1.19435-2.66667 2.66665-2.66667c1.4725 0 2.6667 1.19417 2.6667 2.66667s-1.1942 2.6667-2.6667 2.6667zm4.2737-5.98047c.5301 0 .9598-.42973.9598-.95972 0-.53012-.4297-.95973-.9598-.95973-.53 0-.9597.42961-.9597.95973 0 .52999.4297.95972.9597.95972z"
                  fillRule="evenodd"
                />
              </svg>
              <svg
                className="w-5 ml-3 fill-current text-brand-beige"
                fill="#493b36"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m.871948 4.36808c-.871948 1.71129-.871948 3.9515-.871948 8.43192v11.2h11.2c4.4804 0 6.7206 0 8.4319-.8719 1.5053-.767 2.7292-1.9909 3.4962-3.4962.8719-1.7113.8719-3.9515.8719-8.4319v-11.2h-11.2c-4.48042 0-6.72063 0-8.43192.871948-1.5053.766982-2.72915 1.990832-3.496132 3.496132zm19.124152 15.63142v.0007h-3.3101v-5.2007c0-1.2394-.0253-2.8287-1.7247-2.8287-1.7246 0-1.9886 1.3466-1.9886 2.7393v5.2894h-3.31341v-10.6821h3.18201v1.4567h.0467c.442-.83936 1.5247-1.7247 3.138-1.7247 3.356 0 3.9741 2.2114 3.9741 5.082v5.8681zm-15.73178-10.68147h3.31737v10.68207h-3.31737zm-.26432-3.39668c0-1.06068.86067-1.92135 1.92135-1.92135 1.06001 0 1.92069.86067 1.92135 1.92135 0 1.06068-.86067 1.93935-1.92135 1.93935s-1.92135-.87867-1.92135-1.93935z"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-8 rounded-lg bg-gray-50 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            <form action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm font-body">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full px-3 py-2 text-lg font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full px-3 py-2 text-lg font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-lg font-medium text-green-600 font-body hover:text-green-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-lg font-medium text-white bg-green-600 border border-transparent rounded-md font-body group hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  )
}

export default AccountPopover
